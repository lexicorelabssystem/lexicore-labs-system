# Modelo de contenido

## Colecciones

### `projects`

Representa cada caso de estudio del portafolio.

```ts
{
  title: string;
  slug: string;
  url: string;
  category: string;
  description: string;
  longDescription?: string;
  heroImage?: string;
  gallery?: { src, alt, caption? }[];
  technologies?: string[];
  services?: string[];
  challenge?: string;
  solution?: string;
  architecture?: string;
  frontend?: string;
  backend?: string;
  data?: string;
  infrastructure?: string;
  security?: string;
  year?: number;
  featured?: boolean;
  status?: 'active' | 'archived' | 'in-development';
  externalUrl?: string;
}
```

### `capabilities`

Capacidades técnicas representadas en `/capabilities`.

### `process`

Pasos del proceso de trabajo representados en `/process`.

## Reglas

- Solo datos verificables.
- No inventar tecnologías, métricas, testimonios ni certificaciones.
- Los proyectos nuevos se agregan como archivos `.mdx` sin modificar el frontend.
