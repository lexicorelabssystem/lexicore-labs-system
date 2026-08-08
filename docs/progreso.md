# Progreso del proyecto

## Fase 1 — Estructura base, design system y esquemas de contenido

### Qué se hizo

- Inicialización del proyecto Astro 5.x con TypeScript strict.
- Configuración de Tailwind CSS 4 con tokens de diseño propios.
- Instalación de React, Zod, Resend, clsx y tailwind-merge.
- Creación de design system: colores, tipografía, espaciado, componentes base UI.
- Definición de esquemas Zod para colecciones `projects`, `capabilities` y `process`.
- Creación de contenido inicial: 8 proyectos, 10 capacidades y 8 pasos de proceso.
- Creación de layouts, Header, Footer, SkipLink y BaseLayout.
- Creación de páginas base: Home, `/work`, `/work/[slug]`, `/capabilities`, `/process`, `/infrastructure`, `/contact`.
- Configuración de CI/CD con GitHub Actions.
- Configuración inicial de headers de seguridad en `vercel.json`.
- Creación de documentación inicial en `docs/`.

### Decisiones adoptadas

- Static-first: solo el endpoint `/api/contact` requiere modo serverless.
- Tailwind CSS 4 en configuración CSS-first para mantener el bundle pequeño.
- Fuentes cargadas desde Google Fonts temporalmente; se evaluará self-hosting en Fase 10.
- Contenido de proyectos mínimo y verificable; LPN SO marcado como "en análisis".

### Pruebas realizadas

- Instalación de dependencias exitosa.
- `npm run check` sin errores ni advertencias.
- `npm run typecheck` sin errores.
- `npm run build` exitoso: 14 páginas generadas, bundle cliente de 2.25 kB.

### Problemas encontrados

- Node.js local es v20.19.5; se ajustó `engines` a `>=20.0.0`.
- Astro no cargaba archivos `.mdx` con `type: 'content'`; se migró a `loader: glob()` de `astro/loaders`.
- Los entries del content layer no exponen `.render()`; se usa `render(entry)` de `astro:content`.
- 4 vulnerabilidades menores en dependencias transitivas; se revisarán en Fase 11.

### Pendientes

- Implementar envío real del formulario en Fase 8.
- Agregar sitemap.xml y Schema.org en Fase 12.
- Añadir CSP estricto en Fase 11.
- Capturar screenshots reales en Fase 6.
- Reinstalar React únicamente si un componente interactivo lo justifica.

### Próximo paso

Fase 2 — Refinar dirección visual y aplicarla al Home con composición editorial.
