/**
 * Configuración global del sitio.
 * Fuente de verdad para marca, contacto, navegación y URL canónica.
 */
export const site = {
  name: "PACTO-MI Digital",
  shortName: "PACTO-MI",
  project: "Youth Action Network Against Illegal Mining and Organized Crime",
  projectEs: "Juventud en Acción contra la Minería Ilegal y el Crimen Organizado",
  descriptor: "Plataforma de Acción contra la Minería Ilegal",
  claim: "Empoderando jóvenes para proteger territorios y fortalecer la minería formal",
  tagline: "Conocimiento que conecta. Comunidad que actúa. Impacto que se demuestra.",
  description:
    "Plataforma digital de conocimiento, formación y acción del proyecto PACTO-MI, ganador del Alumni Engagement Innovation Fund 2025, en Cajamarca y Madre de Dios, Perú.",
  origin: "https://pacto-mi-digital.vercel.app",
  locale: "es-PE",
  themeColor: "#7A171B",
  contact: {
    email: "aeif.proyecto@gmail.com",
    phone: "+51 941 007 076",
    phoneHref: "+51941007076",
    linkedin: "https://www.linkedin.com/company/pacto-mi",
  },
  repo: "https://github.com/brianpajares/pacto-mi-digital",
  prdVersion: "v1.0 · agosto 2026",
  buildLabel: "MVP público",
};

/** Navegación principal. Refleja la arquitectura de información del PRD §7. */
export const nav = [
  { href: "/conoce", label: "Conoce" },
  { href: "/aprende", label: "Aprende" },
  { href: "/recursos", label: "Recursos" },
  { href: "/expert-talks", label: "Expert Talks" },
  { href: "/eventos", label: "Eventos" },
  { href: "/actua", label: "Actúa" },
  { href: "/impacto", label: "Impacto" },
  { href: "/nosotros", label: "Nosotros" },
];

/** Enlaces del pie, agrupados. */
export const footerNav = [
  {
    title: "Plataforma",
    links: [
      { href: "/conoce", label: "Conoce el problema" },
      { href: "/aprende", label: "PACTO-MI Academy" },
      { href: "/recursos", label: "Knowledge Hub" },
      { href: "/actua", label: "Action Lab" },
    ],
  },
  {
    title: "Proyecto",
    links: [
      { href: "/nosotros", label: "Equipo y aliados" },
      { href: "/impacto", label: "Impacto y M&E" },
      { href: "/eventos", label: "Eventos" },
      { href: "/transparencia", label: "Transparencia" },
    ],
  },
  {
    title: "Confianza",
    links: [
      { href: "/privacidad", label: "Privacidad y seguridad" },
      { href: "/fuentes", label: "Fuentes y metodología" },
      { href: "/transparencia#estado", label: "Estado de la plataforma" },
    ],
  },
];

/** Principio rector del PRD §1. */
export const cycle = [
  { step: "Conocer", detail: "Información verificada sobre minería ilegal, sin sensacionalismo." },
  { step: "Aprender", detail: "Seis módulos formativos con evaluación previa y posterior." },
  { step: "Conectar", detail: "Red territorial con privacidad por defecto y opt-in explícito." },
  { step: "Actuar", detail: "Planes de acción locales con indicadores y evidencia." },
  { step: "Medir", detail: "Indicadores M&E capturados de forma nativa, no en hojas sueltas." },
  { step: "Replicar", detail: "Actividades de réplica registradas y validadas." },
];
