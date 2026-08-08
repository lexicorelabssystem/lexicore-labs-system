# Deployment

## Plataforma

Vercel.

## Flujo

1. Push a `main` → deploy automático a producción.
2. Pull request → URL de preview.
3. GitHub Actions ejecuta Astro check, TypeScript check y build.

## Variables de entorno

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

## URL de preview

`lexicore-next.vercel.app` (ejemplo conceptual, se definirá al conectar repo).
