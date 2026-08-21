/**
 * Knowledge Hub. Catálogo de recursos del proyecto.
 *
 * Cada recurso declara `availability`:
 *  - "publicado": archivo disponible; `href` obligatorio.
 *  - "en-revision": existe, está en revisión técnica o editorial.
 *  - "planificado": comprometido en la propuesta, aún no producido.
 *
 * Ningún recurso sin `href` muestra un botón de descarga. La ficha explica
 * en qué estado está y quién lo revisa.
 */
export const resources = [
  {
    id: "toolkit-digital",
    title: "Toolkit PACTO-MI (versión digital)",
    type: "Toolkit",
    region: "Nacional",
    summary:
      "Guía base para talleres, réplicas y acciones de incidencia juvenil. Comprometida en el Objetivo 3 de la propuesta AEIF 2025, junto con 700 ejemplares impresos.",
    owner: "Coordinación académica",
    reviewer: "Revisión técnica",
    version: "v1.0",
    availability: "en-revision",
    href: null,
    tags: ["toolkit", "réplica", "acción", "advocacy"],
  },
  {
    id: "toolkit-impreso",
    title: "Toolkit PACTO-MI (versión impresa)",
    type: "Toolkit",
    region: "Cajamarca · Madre de Dios",
    summary:
      "700 ejemplares para universidades, instituciones locales, organizaciones y participantes del proyecto. La ficha registra el inventario y la distribución.",
    owner: "Coordinación de proyecto",
    reviewer: "M&E",
    version: "v1.0",
    availability: "planificado",
    href: null,
    tags: ["toolkit", "distribución"],
  },
  {
    id: "guia-plan-accion",
    title: "Guía para el plan de acción local",
    type: "Guía",
    region: "Nacional",
    summary:
      "Plantilla del Action Canvas: problema, territorio, actores, objetivo, acción, aliados, indicadores, riesgos y evidencia esperada.",
    owner: "Action Lab",
    reviewer: "Coordinación académica",
    version: "v1.0",
    availability: "publicado",
    href: "/actua",
    tags: ["action-lab", "canvas", "plan"],
  },
  {
    id: "ficha-replica",
    title: "Ficha de registro de réplica",
    type: "Guía",
    region: "Nacional",
    summary:
      "Campos mínimos para reportar una actividad de réplica: tipo, fecha, lugar general, alcance, material utilizado, evidencia y validación M&E.",
    owner: "M&E",
    reviewer: "Coordinación de proyecto",
    version: "v1.0",
    availability: "en-revision",
    href: null,
    tags: ["réplica", "indicadores", "M&E"],
  },
  {
    id: "modulos-academy",
    title: "Módulos formativos PACTO-MI Academy",
    type: "Curso",
    region: "Nacional",
    summary:
      "Los seis módulos del programa, con objetivos de aprendizaje, formato y evaluación previa y posterior.",
    owner: "Coordinación académica",
    reviewer: "Revisión técnica",
    version: "v1.0",
    availability: "en-revision",
    href: "/aprende",
    tags: ["academy", "formación", "módulos"],
  },
  {
    id: "prd",
    title: "PRD PACTO-MI Digital v1.0",
    type: "Documento",
    region: "Nacional",
    summary:
      "Documento de requerimientos de producto de esta plataforma: alcance, arquitectura de información, modelo de datos, privacidad, M&E y hoja de ruta.",
    owner: "Coordinación de innovación",
    reviewer: "Equipo PACTO-MI",
    version: "v1.0 · agosto 2026",
    availability: "publicado",
    href: "/docs/prd/PRD_PACTOMI_Digital_v1.0.docx",
    tags: ["prd", "producto", "documentación"],
  },
  {
    id: "grabaciones-talks",
    title: "Grabaciones del ciclo de Expert Talks",
    type: "Video",
    region: "Nacional",
    summary:
      "Sesiones con especialistas nacionales. Cada grabación se publica con ponente, resumen, materiales y consentimiento de uso registrado.",
    owner: "Coordinación académica",
    reviewer: "Comunicación",
    version: "ciclo 2026",
    availability: "planificado",
    href: "/expert-talks",
    tags: ["video", "expert-talk", "sesiones"],
  },
];

export const AVAILABILITY = {
  publicado: { label: "Disponible", tone: "ok" },
  "en-revision": { label: "En revisión", tone: "warn" },
  planificado: { label: "Planificado", tone: "idle" },
};

/** Tipos únicos, para los filtros del buscador. */
export const resourceTypes = ["Todos", ...new Set(resources.map((r) => r.type))];
