/**
 * Ciclo de ponencias virtuales PACTO-MI 2026 (Expert Talks).
 *
 * Fuente: las cuatro agendas oficiales en PDF y los flyers de cada sesión
 * (carpeta "Sesiones virtuales 2026" del Drive del proyecto), más las
 * presentaciones de los ponentes que las compartieron.
 *
 * Reglas de este archivo:
 *  - Un cargo solo se publica si figura en el flyer oficial. Si no figura,
 *    el campo `role` se omite; no se completa con suposiciones.
 *  - `topics` resume de qué trató la presentación, sin reproducir cifras
 *    de terceros ni datos de contacto que aparezcan en las diapositivas.
 *  - Donde las fuentes se contradicen, `dateLabel` lo declara en vez de
 *    elegir una fecha.
 */

export const cycle = {
  title: "Ciclo de ponencias virtuales",
  subtitle: "Minería ilegal, sostenibilidad y liderazgo juvenil desde una mirada multidisciplinaria",
  modality: "Virtual",
  organizer: "PACTO-MI, iniciativa impulsada por la Embajada de los Estados Unidos y U.S.-Peru Alumni",
  moderator: "Jhuleyssy Sánchez Aguilar (presentación del proyecto y de cada ponente)",
};

export const sessions = [
  {
    n: 1,
    date: "2026-03-05",
    dateLabel: "5 de marzo de 2026",
    time: "7:00 p. m.",
    title: "Visión introductoria sobre la minería ilegal en el Perú",
    objective:
      "Establecer un marco conceptual común para todo el ciclo: actores, zonas de mayor incidencia, impactos socioambientales y desafíos para la formalización y el control.",
    status: "realizada",
    speakers: [
      {
        name: "Iván Arenas",
        role: "Analista político",
        talk: "Panorama actual de la minería ilegal en el Perú",
        topics: [
          "La Ley N.º 32537 y la situación del REINFO",
          "El censo nacional de la pequeña minería y la minería artesanal",
          "Corredores mineros y su vínculo con economías criminales",
        ],
      },
      {
        name: "César Ipenza",
        role: "Abogado especializado en materia ambiental y vocero del Observatorio de Minería Ilegal (OMI)",
        talk: "Marcos normativos y mecanismos legales",
        topics: [],
      },
      {
        name: "Johana Cárdenas",
        role: "Ingeniera ambiental",
        talk: "Impactos ambientales y socioeconómicos de la minería ilegal",
        topics: [
          "Impactos ambientales visibles e invisibles",
          "Deforestación y salud de las comunidades en Madre de Dios",
          "Economías sostenibles como alternativa",
          "La gobernanza como eslabón perdido",
        ],
      },
    ],
  },
  {
    n: 2,
    date: "2026-03-30",
    dateLabel: "30 de marzo de 2026",
    time: "8:00 p. m.",
    title: "Minería ilegal, sostenibilidad y liderazgo juvenil desde una mirada multidisciplinaria",
    objective:
      "Fortalecer el pensamiento crítico y promover un liderazgo informado y comprometido frente a la minería ilegal.",
    status: "realizada",
    speakers: [
      {
        name: "Nicolás Zevallos Trigoso",
        role: "Dr. · Director del Instituto de Criminología",
        talk: "Minería ilegal y crimen organizado: una economía criminal interconectada",
        topics: [],
      },
      {
        name: "Jean Cesar León Mendoza",
        role: "Promotor minero para el desarrollo sostenible",
        talk: "Sostenibilidad en minería (enfoque de actores)",
        topics: [],
      },
      {
        name: "Gabriela Ramírez Uyeno",
        role: "Consultora en selección y recursos humanos",
        talk: "Liderazgo juvenil como herramienta frente a la minería ilegal",
        topics: [
          "La minería ilegal como desafío adaptativo, no solo técnico",
          "Liderazgo adaptativo (Heifetz y Linsky)",
          "La metáfora del balcón y la pista de baile",
          "Preguntas para pasar de la reflexión a la acción",
        ],
      },
    ],
  },
  {
    n: 3,
    date: "2026-04-30",
    dateLabel: "30 de abril de 2026",
    time: "7:00 p. m.",
    title: "Impactos de la minería ilegal en terrenos indígenas, recursos hídricos y gobernanza",
    objective:
      "Profundizar en los impactos sobre territorios indígenas y recursos hídricos, y en los desafíos de gobernanza.",
    status: "realizada",
    speakers: [
      {
        name: "Gloria Aguilar",
        talk: "Impactos de la minería ilegal en los recursos hídricos en el ámbito de la cuenca Marañón",
        topics: [],
      },
      {
        name: "Linked Carrera Reyes",
        talk: "La ignorancia y el rol de los profesionales",
        topics: [],
      },
      {
        name: "Silvia Castro",
        role: "Dra.",
        talk: "Minería ilegal – Proyecto GIRA",
        topics: [
          "Pueblos indígenas y derechos colectivos",
          "La consulta previa, libre e informada",
          "La minería ilegal como economía criminal y sus riesgos sistémicos",
          "Experiencia de Ecuador como caso comparado",
        ],
      },
      {
        name: "Rosaluz Aguilar",
        talk: "Pequeña minería y minería artesanal: aspectos legales y administrativos",
        topics: [],
      },
    ],
  },
  {
    n: 4,
    date: null,
    // La agenda dice "30 de mayo" y el flyer dice "viernes 15 de mayo".
    // Hasta que el equipo confirme cuál es, no se publica un día exacto.
    dateLabel: "Mayo de 2026",
    time: "7:00 p. m.",
    title: "Minería ilegal: ¿qué se está haciendo para combatirla?",
    objective:
      "Dos miradas sobre cómo se combate la minería ilegal y el rol clave de los líderes juveniles en esta labor.",
    status: "realizada",
    speakers: [
      {
        name: "César Ipenza",
        role: "Abogado especializado en materia ambiental y vocero del Observatorio de Minería Ilegal (OMI)",
        // La agenda solo dice "Ponencia": no hay título individual. Los temas
        // salen de la biografía del flyer.
        talk: null,
        topics: [
          "La relación entre minería ilegal, crimen organizado y gobernanza territorial",
          "Desafíos para enfrentar las economías ilegales y fortalecer la legalidad",
        ],
      },
      {
        name: "Bruno Marcos Villanueva",
        role: "Ingeniero ambiental por la Universidad Nacional Mayor de San Marcos · Cofundador de Yachay Mining Roots",
        talk: null,
        topics: [],
      },
    ],
  },
];

export const SESSION_STATUS = {
  realizada: { label: "Realizada", tone: "ok" },
  programada: { label: "Programada", tone: "idle" },
};

/** Total de ponencias del ciclo, calculado para no desincronizarlo de la lista. */
export const talkCount = sessions.reduce((sum, s) => sum + s.speakers.length, 0);

/**
 * Metadata mínima que el PRD §12 exige para cada sesión antes de publicar su
 * ficha completa. Se muestra en la página para que el equipo sepa qué falta.
 */
export const talkMetadata = [
  "Título y resumen aprobados",
  "Ponente y cargo confirmados",
  "Fecha, duración y modalidad",
  "Grabación en plataforma de video",
  "Presentación y recursos relacionados",
  "Encuesta de evaluación posterior",
  "Consentimiento de uso de imagen",
];
