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
    title: "PACTO-MI en el V Foro Internacional FIDAS 2026",
    city: "Puerto Maldonado",
    region: "Madre de Dios",
    date: null,
    dateLabel: "Fecha exacta por confirmar",
    status: "realizado",
    attendance: null,
    venue: "Universidad Nacional Amazónica de Madre de Dios (UNAMAD), Facultad de Ciencias Empresariales",
    summary:
      "Segunda etapa presencial del proyecto, en Madre de Dios. Se desarrolló en la UNAMAD durante el V Foro Internacional para el Desarrollo Amazónico Sustentable por los Objetivos de Desarrollo Sostenible (FIDAS 2026), bajo el lema «Minería sostenible y desarrollo empresarial en Madre de Dios», con una jornada de 9:00 a. m. a 1:00 p. m. dirigida a estudiantes, docentes, comunidad y público en general.",
    method: null,
    banner: "Juventud, minería, comunidad y defensa del territorio",
  },
];

export const EVENT_STATUS = {
  realizado: { label: "Realizado", tone: "ok" },
  "en-planificacion": { label: "En planificación", tone: "warn" },
};
