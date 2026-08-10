export const SITE = {
  name: 'LEXICORE LABS SYSTEM',
  shortName: 'Lexicore',
  url: 'https://lexicorelabssystem.cl',
  description:
    'Diseñamos software, plataformas e infraestructura capaces de transformar procesos reales en sistemas digitales claros, seguros y escalables.',
  tagline: 'Del proceso al producto digital.',
  author: 'Lexicore Labs System',
  locale: 'es-CL',
  language: 'es',
  twitterHandle: '',
  email: 'alexis.nunez@lexicorelabssystem.cl',
  whatsapp: '+56 9 5206 3160',
  whatsappLink:
    'https://wa.me/56952063160?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20web%20o%20de%20digitalizaci%C3%B3n.',
} as const;

export const NAVIGATION = [
  { href: '/work', label: 'Proyectos' },
  { href: '/inventacore', label: 'InventaCore' },
  { href: '/capabilities', label: 'Capacidades' },
  { href: '/process', label: 'Proceso' },
  { href: '/infrastructure', label: 'Infraestructura' },
  { href: '/contact', label: 'Contacto' },
] as const;

export const SOCIAL = [
  { name: 'GitHub', href: 'https://github.com/lexicorelabssystem' },
  { name: 'LinkedIn', href: '#' },
] as const;
