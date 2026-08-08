import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

export const prerender = false;

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(120),
  organization: z.string().max(120).optional(),
  type: z.enum(['software', 'web', 'platform', 'infrastructure', 'migration', 'other']),
  message: z.string().min(10).max(2000),
  website: z.string().max(0).optional(),
});

const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = rateLimit.get(ip);
  if (last && now - last < RATE_LIMIT_WINDOW_MS) {
    return true;
  }
  rateLimit.set(ip, now);
  return false;
}

/**
 * Endpoint de contacto.
 * Envía correo vía Resend cuando RESEND_API_KEY y RESEND_TO están configurados.
 * En ausencia de credenciales, valida y devuelve éxito sin enviar.
 */
export const POST: APIRoute = async ({ request, clientAddress }) => {
  const contentType = request.headers.get('content-type') || '';

  if (!contentType.includes('application/x-www-form-urlencoded') && !contentType.includes('multipart/form-data')) {
    return new Response(JSON.stringify({ error: 'Unsupported content type' }), {
      status: 415,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const formData = await request.formData();
  const honeypot = formData.get('website');

  if (honeypot && honeypot.toString().length > 0) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ip = clientAddress ?? 'unknown';
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'Demasiadas solicitudes. Intenta nuevamente en un minuto.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const raw = {
    name: formData.get('name')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    organization: formData.get('organization')?.toString() ?? '',
    type: formData.get('type')?.toString() ?? '',
    message: formData.get('message')?.toString() ?? '',
    website: formData.get('website')?.toString() ?? '',
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: 'Datos inválidos', issues: parsed.error.issues }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, organization, type, message } = parsed.data;
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const resendTo = import.meta.env.RESEND_TO;

  if (resendApiKey && resendTo) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'Lexicore Labs System <contacto@lexicorelabssystem.cl>',
        to: resendTo,
        replyTo: email,
        subject: `Nuevo contacto desde lexicorelabssystem.cl: ${type}`,
        text: [
          `Nombre: ${name}`,
          `Correo: ${email}`,
          `Empresa: ${organization || 'No indicada'}`,
          `Tipo de proyecto: ${type}`,
          '',
          message,
        ].join('\n'),
      });
    } catch (error) {
      console.error('Error enviando correo:', error);
      return new Response(JSON.stringify({ error: 'No se pudo enviar el mensaje. Intenta más tarde.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
