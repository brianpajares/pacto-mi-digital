/**
 * PACTO-MI Academy. Los seis módulos del programa formativo.
 *
 * Fuente: Toolkit técnico de formación PACTO-MI, partes 1 y 2 (108 páginas),
 * "Prevención y respuesta frente a la minería ilegal en el Perú", proyecto
 * Juventud en Acción contra la Minería Ilegal y el Crimen Organizado.
 * Títulos, subtítulos y enfoques se transcriben de las portadas de cada módulo.
 *
 * `status` describe el estado editorial real del contenido. Los estados válidos
 * son: "publicado", "en-produccion", "en-diseno".
 *
 * El contenido completo de cada módulo vive en `content/toolkit/modulo-N.mjs` y
 * se publica en /aprende/<slug>.
 */
import m1 from "./toolkit/modulo-1.mjs";
import m2 from "./toolkit/modulo-2.mjs";
import m3 from "./toolkit/modulo-3.mjs";
import m4 from "./toolkit/modulo-4.mjs";
import m5 from "./toolkit/modulo-5.mjs";
import m6 from "./toolkit/modulo-6.mjs";

/** Repositorio donde se conservan los PDF del toolkit (no se despliegan en Vercel). */
const REPO_RAW = "https://github.com/brianpajares/pacto-mi-digital/raw/main/docs/toolkit";

export const toolkit = {
  title: "Toolkit técnico de formación",
  subtitle: "Prevención y respuesta frente a la minería ilegal en el Perú",
  project: "Proyecto Juventud en Acción contra la Minería Ilegal y el Crimen Organizado",
  scope: "Fortalecimiento de capacidades en Cajamarca y Madre de Dios",
  pages: 108,
  full: { href: `${REPO_RAW}/PACTO-MI_Toolkit_completo.pdf`, size: "1,6 MB", pages: 108 },
  intro: [
    "PACTO-MI (Plataforma de Acción contra la Minería Ilegal) es una iniciativa de formación, sensibilización y participación ciudadana que busca fortalecer el liderazgo juvenil y promover acciones concretas frente a la minería ilegal y sus vínculos con el crimen organizado en el Perú, con especial énfasis en Cajamarca y Madre de Dios.",
    "A través de seis módulos virtuales, el programa reunió a especialistas, académicos y jóvenes para abordar minería ilegal y crimen organizado, impactos socioambientales, comunicación estratégica y activismo digital, políticas públicas, mecanismos legales y formulación de planes de acción.",
    "Este toolkit reúne los conocimientos, metodologías y recursos prácticos desarrollados a partir de esos contenidos. Su propósito es que los participantes puedan replicar lo aprendido, sensibilizar a sus comunidades y transformar sus ideas en iniciativas de impacto.",
  ],
  closing: "Lo aprendido nos une. Lo que hagamos marcará la diferencia.",
};

export const modules = [
  {
    n: 1,
    slug: "gobernanza-territorial",
    title: "Minería ilegal, gobernanza territorial y desarrollo sostenible",
    subtitle: "Conceptos, cadena de actores, formalización y estudios de caso",
    summary:
      "Manual técnico y participativo dirigido a jóvenes, líderes comunitarios y actores locales. Prioriza conceptos jurídicos precisos, hechos verificables, cifras con fuente y análisis territorial sin estigmatizar a personas ni comunidades.",
    format: "Matriz de clasificación · mapa de cadena · casos Conga y La Pampa · plan de 90 días",
    objectives: [
      "Distinguir minería formal, minería en vías de formalización y minería ilegal mediante criterios normativos.",
      "Interpretar cifras económicas y territoriales sin confundir ámbitos ni periodos.",
      "Reconocer los actores y eslabones que sostienen la cadena de la minería ilegal.",
      "Explicar por qué la legalidad administrativa no sustituye la construcción de legitimidad y confianza.",
      "Proponer medidas preventivas seguras y adaptadas al territorio.",
    ],
    version: "octubre de 2026",
    cover: "toolkit-m1",
    pdf: { file: "PACTO-MI_Toolkit_Modulo_1.pdf", size: "534 KB", pages: 23 },
    status: "publicado",
    content: m1,
  },
  {
    n: 2,
    slug: "crimen-organizado",
    title: "Minería ilegal y crimen organizado",
    subtitle: "Cadenas económicas, delitos conexos y control territorial",
    summary:
      "Herramienta de consulta para jóvenes. Explica cómo una actividad extractiva ilegal puede convertirse en una economía criminal conectada con lavado de activos, trata de personas, extorsión, armas, explosivos, secuestro y control territorial.",
    format: "Cadena criminal del oro · casos La Rinconada, Pataz y Trujillo · protocolo de comunicación segura",
    objectives: [
      "Comprender la diferencia entre delito individual, banda y organización criminal.",
      "Reconocer los eslabones económicos que conectan minería ilegal con otros delitos.",
      "Interpretar datos sobre lavado de activos, trata, armas, explosivos y violencia.",
      "Analizar La Rinconada, Pataz y Trujillo sin presentar hipótesis como hechos probados.",
      "Identificar mecanismos institucionales de prevención, investigación y respuesta.",
    ],
    version: "octubre de 2026",
    cover: "toolkit-m2",
    pdf: { file: "PACTO-MI_Toolkit_Modulo_2.pdf", size: "407 KB", pages: 22 },
    status: "publicado",
    content: m2,
  },
  {
    n: 3,
    slug: "consecuencias",
    title: "Consecuencias ambientales y socioeconómicas de la minería ilegal",
    subtitle: "Minería y territorio: economía, sociedad y gestión ambiental",
    summary:
      "Herramienta de consulta para jóvenes. Compara cómo la legalidad o ilegalidad cambia la forma en que el valor económico circula, cómo se construyen relaciones con el territorio y cómo se gestionan los impactos ambientales antes, durante y después de la operación.",
    format: "Taller de 120 minutos · cinco ejercicios · matriz de priorización",
    objectives: [
      "Explicar conexiones entre deterioro de ecosistemas y afectaciones sociales y económicas.",
      "Evaluar evidencia sin generalizar resultados de un lugar a toda una región.",
      "Priorizar impactos considerando gravedad, alcance, duración y desigualdad.",
      "Proponer acciones de información y prevención que puedan realizarse sin exposición al riesgo.",
    ],
    version: "noviembre de 2026",
    cover: "toolkit-m3",
    pdf: { file: "PACTO-MI_Toolkit_Modulo_3.pdf", size: "194 KB", pages: 8 },
    status: "publicado",
    content: m3,
  },
  {
    n: 4,
    slug: "comunicacion-estrategica",
    title: "Comunicación estratégica y activismo digital",
    subtitle: "Lo que sabemos importa. Cómo lo contamos también.",
    summary:
      "Enfoque formativo y práctico orientado a fortalecer la comunicación estratégica y el activismo digital frente a la minería ilegal. Promueve el análisis crítico y la verificación de fuentes para construir mensajes claros, responsables y sustentados en evidencia.",
    format: "Experimento de titulares · ruta de las siete preguntas · laboratorio PACTO-MI · rúbrica",
    objectives: [
      "Leer críticamente: reconocer encuadres, emociones, omisiones y sesgos.",
      "Verificar: contrastar fuentes, fechas, imágenes, cifras y documentos.",
      "Comunicar: transformar evidencia en mensajes claros sin manipular.",
      "Actuar: usar medios digitales para informar, organizar y movilizar responsablemente.",
    ],
    version: "noviembre de 2026",
    cover: "toolkit-m4",
    pdf: { file: "PACTO-MI_Toolkit_Modulo_4.pdf", size: "269 KB", pages: 19 },
    status: "publicado",
    content: m4,
  },
  {
    n: 5,
    slug: "prevencion-comunitaria",
    title: "Marcos de política pública y mecanismos legales para la prevención comunitaria",
    subtitle: "Conocer las reglas también es una forma de proteger el territorio",
    summary:
      "Enfoque práctico de prevención comunitaria frente a la minería ilegal en Cajamarca y Madre de Dios. Brinda herramientas para verificar información, reconocer señales tempranas y activar los mecanismos legales e institucionales correspondientes, con seguimiento a la respuesta de las autoridades.",
    format: "Consulta REINFO · prueba de las seis coincidencias · cuatro niveles de alerta · sala de decisiones",
    objectives: [
      "Verificar REINFO, IGAFOM, derechos y autorizaciones sin confundir registro con formalidad.",
      "Distinguir terreno superficial, concesión, contrato, instrumento ambiental y autorización.",
      "Reconocer el nivel de avance de un problema y la respuesta que exige cada nivel.",
      "Elegir entre emergencia, alerta, denuncia, solicitud de información o queja, y la autoridad competente.",
      "Hacer seguimiento con código, cargo, hitos e indicadores.",
    ],
    version: "noviembre de 2026",
    cover: "toolkit-m5",
    pdf: { file: "PACTO-MI_Toolkit_Modulo_5.pdf", size: "281 KB", pages: 19 },
    status: "publicado",
    content: m5,
  },
  {
    n: 6,
    slug: "de-lo-aprendido-a-la-accion",
    title: "De lo aprendido a la acción",
    subtitle: "¿Y yo qué puedo hacer por mi territorio?",
    summary:
      "Cierra el proceso formativo de PACTO-MI. Ayuda a cada joven a convertir lo aprendido en una acción personal, una réplica responsable y un plan posible para su territorio.",
    format: "Método PACTO · semáforo de acción · canales institucionales · reto de 72 horas",
    objectives: [
      "Diferenciar entre reaccionar, observar, comprender y actuar.",
      "Reconocer qué acciones sí puedes asumir y cuáles corresponden a las autoridades.",
      "Elegir una forma de participación adecuada a tu realidad.",
      "Diseñar una pequeña iniciativa usando el método PACTO.",
      "Definir un compromiso personal que pueda comenzar en las próximas 72 horas.",
    ],
    version: "noviembre de 2026",
    cover: "toolkit-m6",
    pdf: { file: "PACTO-MI_Toolkit_Modulo_6.pdf", size: "230 KB", pages: 17 },
    status: "publicado",
    content: m6,
  },
].map((m) => ({ ...m, path: `/aprende/${m.slug}`, pdf: { ...m.pdf, href: `${REPO_RAW}/${m.pdf.file}` } }));

export const MODULE_STATUS = {
  publicado: { label: "Publicado", tone: "ok" },
  "en-produccion": { label: "En producción", tone: "warn" },
  "en-diseno": { label: "En diseño", tone: "idle" },
};
