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
    // El banner del foro indica jornadas hasta el 19 de junio de 2026; el
    // primer dígito del día de inicio queda cortado en las fotografías, así
    // que solo se publica el mes.
    dateLabel: "Junio de 2026",
    status: "realizado",
    attendance: null,
    venue: "Auditorio Central Margarita Soto Benavente, Universidad Nacional Amazónica de Madre de Dios (UNAMAD)",
    summary:
      "Segunda etapa presencial del proyecto, en Madre de Dios. PACTO-MI estuvo presente en el V Foro Internacional para el Desarrollo Amazónico Sustentable por los Objetivos de Desarrollo Sostenible (FIDAS 2026), de la Facultad de Ciencias Empresariales de la UNAMAD, bajo el lema «Minería sostenible y desarrollo empresarial en Madre de Dios».",
    method: null,
    banner: "Juventud, minería, comunidad y defensa del territorio",
    facts: [
      ["Horario", "9:00 a. m. a 1:00 p. m."],
      ["Modalidad", "Presencial"],
      ["Ponentes", "Nacionales e internacionales"],
      ["Dirigido a", "Estudiantes, docentes, comunidad y público en general"],
    ],
    pillars: [
      "Diálogo y participación",
      "Desarrollo sostenible",
      "Responsabilidad y transparencia",
      "Defensoría del territorio",
    ],
    gallery: [
      "mdd-ponente-banner",
      "mdd-atril",
      "mdd-ponencia",
      "mdd-panel",
      "mdd-estrado",
      "mdd-escenario",
    ],
    hero: "mdd-auditorio",
  },
];

export const EVENT_STATUS = {
  realizado: { label: "Realizado", tone: "ok" },
  "en-planificacion": { label: "En planificación", tone: "warn" },
};
