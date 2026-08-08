# Deployment

## Plataforma

Vercel.

## Requisitos previos

1. Repositorio en GitHub (`lexicorelabssystem/lexicore-labs-system` u otro).
2. Node.js 20+.

## Pasos para conectar con Vercel

1. Crear repositorio en GitHub.
2. Subir el código local:
   ```bash
   git remote add origin https://github.com/USUARIO/REPO.git
   git branch -M main
   git push -u origin main
   ```
3. En Vercel, importar el proyecto desde GitHub.
4. Configurar framework preset: **Astro**.
5. Agregar variables de entorno:
   - `RESEND_API_KEY`
   - `RESEND_TO=alexis.nunez@lexicorelabssystem.cl`
6. Deploy.

## Flujo

1. Push a `main` → deploy automático a producción.
2. Pull request → URL de preview.
3. GitHub Actions ejecuta Astro check, TypeScript check y build.

## Variables de entorno

- `RESEND_API_KEY` — API key de Resend para envío de correos.
- `RESEND_TO` — Correo destinatario del formulario de contacto.

## Notas

- No agregar nunca `.env.local` ni secrets al repositorio.
- Las capturas de pantalla viven en `src/assets/screenshots/`.
