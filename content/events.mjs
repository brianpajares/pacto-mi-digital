/**
 * Eventos del proyecto. Solo se publica lo documentado.
 * Fuente: presentación AEIF 2026 y PRD §1.
 */
export const events = [
  {
    id: "cajamarca-2025",
    title: "Taller presencial PACTO-MI Cajamarca",
    city: "Cajamarca",
    region: "Cajamarca",
    date: "2025-11-19",
    dateLabel: "19 de noviembre de 2025",
    status: "realizado",
    attendance: 220,
    summary:
      "Primera sesión presencial del proyecto. Reunió a organizaciones juveniles y de voluntariado, estudiantes universitarios, ciudadanía independiente y representantes de instituciones públicas y privadas.",
    method:
      "Metodología participativa: trabajo en grupos, paneles multiactor y dinámicas basadas en dilemas reales sobre las dimensiones territorial, social, ambiental, cultural y económica de la minería ilegal.",
  },
  {
    id: "madre-de-dios",
    title: "Sesión PACTO-MI Madre de Dios",
    city: "Puerto Maldonado",
    region: "Madre de Dios",
    date: null,
    dateLabel: "Fecha por confirmar",
    status: "en-planificacion",
    attendance: null,
    summary:
      "Réplica de la experiencia de Cajamarca adaptada al contexto amazónico, convocando a líderes comunitarios, jóvenes, sociedad civil y representantes de los sectores público y privado.",
    method:
      "Aplica las lecciones aprendidas en Cajamarca: metodologías participativas y experienciales, paneles multiactor y dinámicas basadas en dilemas reales.",
  },
];

export const EVENT_STATUS = {
  realizado: { label: "Realizado", tone: "ok" },
  "en-planificacion": { label: "En planificación", tone: "warn" },
};
