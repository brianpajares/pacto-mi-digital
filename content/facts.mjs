/**
 * Toda cifra pública del sitio vive aquí y declara su fuente.
 *
 * Reglas no negociables:
 *  - `value: null` significa "todavía no medido". Se renderiza como "sin dato
 *    registrado", nunca como 0 ni como una estimación.
 *  - Ningún número puede publicarse sin `source`.
 *  - `kind: "meta"` es un compromiso del proyecto; `kind: "real"` es un
 *    resultado ya ocurrido y documentado.
 *
 * `scripts/check.mjs` falla el build si una cifra pierde su fuente.
 */

export const SOURCES = {
  AEIF25: {
    id: "AEIF25",
    label: "Propuesta AEIF 2025 — Youth Action Network Against Illegal Mining and Organized Crime",
    note: "Propuesta ganadora presentada al Alumni Engagement Innovation Fund de la Embajada de los Estados Unidos.",
  },
  AEIF25_ME: {
    id: "AEIF25_ME",
    label: "AEIF 2025 — Monitoring and Evaluation Template",
    note: "Matriz de monitoreo y evaluación anexa a la propuesta ganadora.",
  },
  AEIF26: {
    id: "AEIF26",
    label: "Presentación institucional PACTO-MI — AEIF 2026",
    note: "Reporte de avance y estrategia para la etapa de Madre de Dios.",
  },
  PRD: {
    id: "PRD",
    label: "PRD PACTO-MI Digital v1.0 — agosto 2026",
    note: "Documento de requerimientos de producto de la plataforma.",
  },
};

/** @typedef {{id:string,label:string,value:number|null,unit?:string,kind:"meta"|"real",source:keyof typeof SOURCES,asOf:string,detail?:string}} Fact */

/** @type {Fact[]} */
export const facts = [
  // --- Compromisos del grant (metas) -------------------------------------
  {
    id: "beneficiarios-directos",
    label: "Beneficiarios directos comprometidos",
    value: 300,
    kind: "meta",
    source: "AEIF25",
    asOf: "2025",
    detail: "Jóvenes y líderes comunitarios a formar en Cajamarca y Madre de Dios.",
  },
  {
    id: "beneficiarios-indirectos",
    label: "Beneficiarios indirectos estimados",
    value: 1000,
    kind: "meta",
    source: "AEIF25",
    asOf: "2025",
    detail: "Alcance estimado en la propuesta a través de réplicas y difusión.",
  },
  {
    id: "estudiantes",
    label: "Estudiantes universitarios (18–30 años)",
    value: 225,
    kind: "meta",
    source: "AEIF25",
    asOf: "2025",
    detail: "Objetivo 1 de la propuesta, en programas híbridos de formación.",
  },
  {
    id: "lideres",
    label: "Líderes comunitarios",
    value: 75,
    kind: "meta",
    source: "AEIF25",
    asOf: "2025",
    detail: "Objetivo 1, de zonas afectadas por minería ilegal.",
  },
  {
    id: "expert-talks",
    label: "Expert Talks programadas",
    value: 4,
    kind: "meta",
    source: "AEIF25",
    asOf: "2025",
    detail: "Objetivo 2: cuatro conferencias híbridas mensuales con especialistas nacionales.",
  },
  {
    id: "toolkits",
    label: "Toolkits impresos a distribuir",
    value: 700,
    kind: "meta",
    source: "AEIF25_ME",
    asOf: "2025",
    detail: "Objetivo 3, más la versión digital de libre descarga.",
  },
  {
    id: "planes-accionables",
    label: "Participantes con plan de acción",
    value: 90,
    unit: "%",
    kind: "meta",
    source: "AEIF25_ME",
    asOf: "2025",
    detail: "Meta de la matriz M&E al cierre del Módulo 6.",
  },
  {
    id: "satisfaccion",
    label: "Satisfacción de participantes",
    value: 90,
    unit: "%",
    kind: "meta",
    source: "AEIF25_ME",
    asOf: "2025",
    detail: "Meta declarada en encuestas posteriores a cada sesión.",
  },
  {
    id: "presupuesto",
    label: "Presupuesto adjudicado",
    value: 19525,
    unit: "USD",
    kind: "real",
    source: "AEIF26",
    asOf: "2025",
    detail: "Monto del fondo AEIF 2025 otorgado al proyecto.",
  },
  {
    id: "duracion",
    label: "Duración del proyecto",
    value: 9,
    unit: "meses",
    kind: "real",
    source: "AEIF26",
    asOf: "2025-2026",
    detail: "Ejecución entre 2025 y 2026.",
  },

  // --- Resultados ya ocurridos y documentados ----------------------------
  {
    id: "participantes-cajamarca",
    label: "Participantes en el taller de Cajamarca",
    value: 220,
    kind: "real",
    source: "AEIF26",
    asOf: "2025-11-19",
    detail: "Primera sesión presencial del proyecto.",
  },
  {
    id: "organizaciones",
    label: "Organizaciones juveniles y de voluntariado",
    value: 11,
    kind: "real",
    source: "AEIF26",
    asOf: "2025-11-19",
    detail: "Representadas en el taller de Cajamarca.",
  },
  {
    id: "regiones",
    label: "Regiones de intervención",
    value: 2,
    kind: "real",
    source: "AEIF25",
    asOf: "2025",
    detail: "Cajamarca y Madre de Dios, con arquitectura preparada para más regiones.",
  },

  // --- Aún no medido: se publica el hueco, no un número ------------------
  {
    id: "planes-registrados",
    label: "Planes de acción registrados",
    value: null,
    kind: "real",
    source: "PRD",
    asOf: "2026-08",
    detail: "Se contabilizará cuando el Action Lab persista datos con backend.",
  },
  {
    id: "replicas",
    label: "Actividades de réplica validadas",
    value: null,
    kind: "real",
    source: "PRD",
    asOf: "2026-08",
    detail: "Requiere el módulo de réplicas y validación M&E.",
  },
  {
    id: "descargas",
    label: "Descargas de recursos",
    value: null,
    kind: "real",
    source: "PRD",
    asOf: "2026-08",
    detail: "Se contabilizará cuando la analítica de producto esté instrumentada.",
  },
  {
    id: "miembros",
    label: "Miembros registrados en la plataforma",
    value: null,
    kind: "real",
    source: "PRD",
    asOf: "2026-08",
    detail: "El registro se habilita con autenticación y consentimientos.",
  },
];

const byId = new Map(facts.map((f) => [f.id, f]));

/** Devuelve un hecho por id. Lanza si no existe, para que el build falle temprano. */
export function fact(id) {
  const found = byId.get(id);
  if (!found) throw new Error(`Hecho desconocido: "${id}"`);
  return found;
}

/** Formatea el valor de un hecho para lectura humana. */
export function factValue(id) {
  const f = fact(id);
  if (f.value === null) return "sin dato registrado";
  const n = f.unit === "USD"
    ? `US$ ${f.value.toLocaleString("es-PE")}`
    : f.value.toLocaleString("es-PE");
  if (!f.unit || f.unit === "USD") return n;
  return f.unit === "%" ? `${n} %` : `${n} ${f.unit}`;
}

/** Metas del dashboard público, emparejando avance real contra compromiso. */
export const progress = [
  { meta: "beneficiarios-directos", real: "participantes-cajamarca", label: "Personas formadas" },
  { meta: "expert-talks", real: null, label: "Expert Talks realizadas" },
  { meta: "toolkits", real: null, label: "Toolkits distribuidos" },
  { meta: "planes-accionables", real: "planes-registrados", label: "Planes de acción" },
];
