/**
 * PACTO-MI Academy. Los seis módulos del programa formativo.
 * Fuente: PRD §11 (diseño curricular digital) y Objetivo 1 de la propuesta AEIF 2025.
 *
 * `status` describe el estado editorial real del contenido, no un avance
 * de usuario inventado. Los estados válidos son: "publicado", "en-produccion",
 * "en-diseno".
 */
export const modules = [
  {
    n: 1,
    slug: "introduccion",
    title: "Introducción a la minería ilegal en el Perú",
    summary:
      "Actores, regiones impactadas y rutas de formalización. Qué distingue lo ilegal de lo informal y por qué esa diferencia importa.",
    format: "Video de 8–12 min · mapa conceptual · caso · quiz",
    objectives: [
      "Distinguir minería formal, informal e ilegal con criterios verificables.",
      "Identificar los actores y la cadena de valor del oro ilegal.",
      "Ubicar las regiones con mayor afectación y su contexto.",
    ],
    status: "en-produccion",
  },
  {
    n: 2,
    slug: "crimen-organizado",
    title: "Vínculos con el crimen organizado",
    summary:
      "Cómo la minería ilegal se entrelaza con narcotráfico, trata de personas y tráfico de armas, y qué implica eso para las comunidades.",
    format: "Storytelling interactivo · esquema de relaciones · preguntas de reflexión",
    objectives: [
      "Explicar los mecanismos de lavado y financiamiento asociados.",
      "Reconocer señales de riesgo en el territorio sin exponerse.",
      "Comprender por qué el proyecto no habilita denuncias públicas.",
    ],
    status: "en-produccion",
  },
  {
    n: 3,
    slug: "consecuencias",
    title: "Consecuencias ambientales y socioeconómicas",
    summary:
      "Deforestación, contaminación por mercurio, salud, economías locales y gobernanza territorial.",
    format: "Infografías · datos · caso territorial · actividad aplicada",
    objectives: [
      "Cuantificar los impactos con fuentes citadas y fecha de actualización.",
      "Relacionar el daño ambiental con efectos sociales y económicos.",
      "Analizar un caso de Cajamarca y otro de Madre de Dios.",
    ],
    status: "en-produccion",
  },
  {
    n: 4,
    slug: "advocacy",
    title: "Comunicación estratégica y advocacy digital",
    summary:
      "Cómo comunicar con rigor y seguridad: mensajes, formatos, verificación de fuentes y cuidado personal en redes.",
    format: "Plantillas · simulación de campaña · publicación modelo",
    objectives: [
      "Construir mensajes basados en evidencia y no en alarmismo.",
      "Aplicar prácticas de seguridad digital al publicar.",
      "Diseñar una campaña breve con objetivo e indicador.",
    ],
    status: "en-diseno",
  },
  {
    n: 5,
    slug: "politica-publica",
    title: "Política pública y mecanismos legales de prevención",
    summary:
      "Marco normativo, competencias institucionales y vías legítimas de participación ciudadana y vigilancia comunitaria.",
    format: "Guía navegable · glosario · caso práctico",
    objectives: [
      "Identificar qué institución responde ante cada situación.",
      "Conocer los mecanismos formales de participación ciudadana.",
      "Diferenciar incidencia legítima de acusación sin sustento.",
    ],
    status: "en-diseno",
  },
  {
    n: 6,
    slug: "planes-de-accion",
    title: "Desarrollo de planes de acción local",
    summary:
      "El módulo de cierre: cada participante convierte lo aprendido en un plan concreto, con actores, indicadores y evidencia esperada.",
    format: "Wizard del Action Lab · pitch · rúbrica · evidencia",
    objectives: [
      "Formular un problema priorizado y un objetivo medible.",
      "Mapear aliados y riesgos de la acción propuesta.",
      "Definir el indicador y la evidencia que probará el resultado.",
    ],
    status: "en-diseno",
  },
];

export const MODULE_STATUS = {
  publicado: { label: "Publicado", tone: "ok" },
  "en-produccion": { label: "En producción", tone: "warn" },
  "en-diseno": { label: "En diseño", tone: "idle" },
};
