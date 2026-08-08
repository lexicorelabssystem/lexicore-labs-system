import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind CSS de manera segura,
 * resolviendo conflictos y permitiendo condicionales.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea una URL externa asegurando que tenga protocolo https.
 */
export function formatExternalUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
}

/**
 * Verifica si una URL pertenece al dominio actual.
 */
export function isInternalLink(href: string): boolean {
  return href.startsWith('/') || href.startsWith('#') || href.startsWith('?');
}
