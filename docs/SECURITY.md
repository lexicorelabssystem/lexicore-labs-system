# Seguridad

## Referencias

- OWASP Top 10 2025.

## Headers configurados

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` restrictivo

## Pendiente Fase 11

- Content-Security-Policy estricto.
- Validación y sanitización del formulario con Zod.
- Rate limiting por IP.
- Audit de dependencias.
- Protección contra clickjacking.

## Gestión de secretos

- Solo variables de entorno.
- Nunca en el repositorio.
- `.env.example` sin valores reales.
