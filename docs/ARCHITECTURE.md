# Arquitectura

## Stack tecnológico

- **Framework:** Astro 5.x (output: static)
- **Lenguaje:** TypeScript strict
- **Estilos:** Tailwind CSS 4 + CSS custom properties
- **Contenido:** Astro Content Collections + `astro/loaders` + Zod
- **Imágenes:** Astro Image Service (Sharp)
- **Formulario:** Astro API route serverless + Resend (Fase 8)
- **Interactividad:** Sin React en Fase 1; se evaluará en fases posteriores solo si se justifica.
- **Hosting:** Vercel
- **CI/CD:** GitHub Actions

## Principios

- Static-first.
- Mínimo JavaScript en cliente.
- Contenido separado de la presentación.
- Sin base de datos para contenido corporativo.
- Sin backend propio salvo endpoint de contacto.

## Estructura de rutas

- `/` Home
- `/work` Portfolio
- `/work/[slug]` Case study
- `/capabilities` Capacidades
- `/process` Proceso
- `/infrastructure` Infraestructura
- `/contact` Contacto
- `/api/contact` Endpoint de formulario
