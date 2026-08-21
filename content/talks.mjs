/**
 * Expert Talks. El Objetivo 2 de la propuesta AEIF 2025 compromete cuatro
 * conferencias híbridas mensuales con especialistas nacionales.
 *
 * Los ponentes listados provienen del inventario de materiales del proyecto
 * (PRD §35). Cuando un dato no consta en la documentación —fecha exacta,
 * título definitivo, enlace de grabación— se declara pendiente en lugar de
 * completarse con una suposición.
 */
export const talks = [
  {
    n: 1,
    speaker: "César Ipenza",
    expertise: "Abogado especializado en derecho ambiental",
    topic: "Por publicar",
    date: null,
    status: "realizada",
    materials: "Ficha en preparación",
  },
  {
    n: 2,
    speaker: "Iván Arenas",
    expertise: "Especialista invitado del ciclo PACTO-MI",
    topic: "Por publicar",
    date: null,
    status: "realizada",
    materials: "Ficha en preparación",
  },
  {
    n: 3,
    speaker: "Johana Cárdenas",
    expertise: "Especialista invitada del ciclo PACTO-MI",
    topic: "Por publicar",
    date: null,
    status: "realizada",
    materials: "Ficha en preparación",
  },
  {
    n: 4,
    speaker: "Por confirmar",
    expertise: "Cuarta sesión del ciclo comprometido",
    topic: "Por publicar",
    date: null,
    status: "programada",
    materials: "Pendiente",
  },
];

export const TALK_STATUS = {
  realizada: { label: "Realizada", tone: "ok" },
  programada: { label: "Programada", tone: "idle" },
};

/**
 * Metadata mínima que el PRD §12 exige para cada sesión antes de publicarla.
 * Se muestra en la página para que el equipo editorial sepa qué falta.
 */
export const talkMetadata = [
  "Título y resumen",
  "Ponente y cargo",
  "Fecha, duración y modalidad",
  "Grabación en plataforma de video",
  "Presentación y recursos relacionados",
  "Encuesta de evaluación posterior",
  "Consentimiento de uso de imagen",
];
