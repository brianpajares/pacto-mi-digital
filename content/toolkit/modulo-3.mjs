/**
 * Toolkit técnico de formación · Módulo 3.
 * Fuente: Toolkit PACTO-MI, Parte 1, págs. 46–53 (versión técnica actualizada noviembre de 2026).
 */
export default {
  howTo: {
    lead:
      "Este material ayuda a comprender cómo el daño ambiental asociado a la minería ilegal repercute en los medios de vida, la convivencia y el desarrollo territorial. Combina lectura técnica, revisión de fuentes y ejercicios para construir propuestas de prevención sustentadas en evidencia.",
    moments: [
      ["Comprender", "Relacionar procesos de extracción con impactos.", "Cadena de impactos."],
      ["Analizar", "Examinar evidencia y diferencias territoriales.", "Ficha de caso."],
      ["Deliberar", "Priorizar consecuencias y población afectada.", "Matriz razonada."],
      ["Actuar", "Proponer una respuesta juvenil viable y segura.", "Compromiso de acción."],
    ],
    rule: {
      title: "Regla metodológica",
      tone: "warn",
      body: "Distinguir hecho verificable, fuente, interpretación y pregunta pendiente. Una fotografía o un cambio de color del agua no prueban por sí solos contaminación ni ilegalidad. Identificar siempre lugar, fecha y alcance de cada evidencia.",
    },
  },
  sheet: [
    ["Público", "Estudiantes universitarios, organizaciones juveniles y actores locales."],
    ["Duración sugerida", "120 minutos de trabajo adaptable; no representa la duración oficial de la ponencia."],
    ["Materiales", "Este toolkit, acceso a fuentes públicas y un documento compartido o papel."],
    ["Productos", "Ficha de evidencia, matriz de impactos, comparación territorial y propuesta breve."],
    ["Seguridad", "Trabajar con información pública. No ingresar a campamentos ni identificar personas expuestas."],
  ],
  sections: [
    {
      id: "impactos",
      title: "Comprender los impactos",
      blocks: [
        { p: "Un impacto es un cambio en el ambiente o en las condiciones de vida vinculado con una actividad. Para atribuirlo a la minería ilegal se requiere evidencia de la actividad, del cambio observado y de la relación entre ambos: la coincidencia territorial no basta." },
        {
          table: {
            caption: "Del proceso al efecto",
            head: ["Proceso o presión", "Cambio ambiental posible", "Consecuencia por analizar"],
            rows: [
              ["Remoción de vegetación y suelo", "Pérdida de cobertura, hábitat y capacidad de recuperación.", "Menor disponibilidad de recursos y mayores dificultades para recuperar usos productivos."],
              ["Excavación y movimiento de sedimentos", "Alteración de cauces, turbidez y depósitos de sedimentos.", "Cambios en pesca y uso del agua; requieren datos locales."],
              ["Uso y liberación de mercurio en extracción aurífera", "Contaminación y transformación ambiental del mercurio.", "Posible exposición a través de cadenas alimentarias; no equivale a un diagnóstico individual."],
              ["Abandono de áreas intervenidas", "Suelos degradados y pozas de extracción.", "Costos de recuperación y limitaciones para otros usos del territorio."],
            ],
          },
        },
        { source: "Base de lectura: CINCIA, síntesis científica sobre impactos en cuerpos de agua amazónicos (2022); MINAM y GIZ, manual de recuperación de áreas." },
        {
          cards: [
            { title: "Directo", body: "Remoción de suelo durante la extracción." },
            { title: "Indirecto", body: "Afectación de una actividad que depende del ecosistema alterado." },
            { title: "Acumulativo", body: "Efectos combinados de varias intervenciones a lo largo del tiempo. No atribuir todos los cambios de una cuenca a una sola operación sin estudiar otras presiones." },
          ],
        },
        { exercise: { title: "Ejercicio 1 · Un titular bajo la lupa", time: "10 min", body: "Selecciona una noticia o imagen pública sobre minería ilegal. Registra el enlace, su autor, fecha de publicación y lugar. Explica en un minuto qué muestra, qué afirma y qué información falta. Completa tres columnas: hecho documentado y fuente, interpretación inicial y dato que falta verificar. No uses imágenes de víctimas identificables." } },
      ],
    },
    {
      id: "socioeconomicas",
      title: "Consecuencias socioeconómicas",
      blocks: [
        { p: "El ingreso inmediato de una actividad no resume sus efectos sobre el territorio. El análisis debe preguntar quién recibe beneficios, quién asume daños y costos, y durante cuánto tiempo. Los siguientes son ejes de indagación, no afirmaciones aplicables automáticamente a todas las comunidades." },
        {
          table: {
            head: ["Dimensión", "Preguntas para el análisis", "Evidencia pertinente"],
            rows: [
              ["Medios de vida", "¿Cambió la pesca, agricultura, turismo o acceso al territorio?", "Series de producción, registros y testimonios contrastados."],
              ["Condiciones laborales", "¿Hay precariedad, engaño, dependencia o exposición a riesgos?", "Informes de inspección e investigaciones acreditadas."],
              ["Bienestar y servicios", "¿Existen cambios en acceso al agua, educación o atención pública?", "Indicadores comparables y documentos de entidades competentes."],
              ["Convivencia y seguridad", "¿Se documentan desplazamiento, amenazas o restricciones de movilidad?", "Reportes institucionales; preservar identidades."],
              ["Economía pública", "¿Qué costos de control y recuperación asumen las instituciones?", "Presupuestos y gastos efectivamente ejecutados."],
              ["Desigualdad", "¿Cómo cambian los efectos según edad, género, ocupación o pertenencia indígena?", "Información desagregada y participación de grupos afectados."],
            ],
          },
        },
        { exercise: { title: "Ejercicio 2 · Cadena de consecuencias", time: "15 min", body: "En equipos, construyan una secuencia de cinco pasos: actividad → presión ambiental → cambio en el ecosistema → afectación a un medio de vida → consecuencia social. Señalen una fuente para cada conexión o márquenla como hipótesis pendiente. Ejemplo didáctico: remoción de vegetación → pérdida de hábitat → cambio en disponibilidad de recursos → dificultad para una actividad local → reducción de oportunidades. Es una hipótesis de trabajo que debe verificarse en cada territorio." } },
        { h: "Preguntas para deliberar" },
        {
          list: [
            "¿Qué costos quedan fuera del precio del mineral?",
            "¿Quiénes tienen menos posibilidades de evitar o afrontar los daños?",
            "¿Qué efectos pueden continuar aun cuando se detiene la extracción?",
            "¿Qué datos permitirían distinguir un cambio temporal de un daño persistente?",
          ],
        },
      ],
    },
    {
      id: "territorios",
      title: "Análisis territorial comparado",
      blocks: [
        {
          cards: [
            { title: "Madre de Dios: evidencia sobre ecosistemas amazónicos", body: "La síntesis científica de CINCIA de 2022 describe mecanismos por los cuales la remoción del sustrato y el uso de mercurio en la minería aurífera ilegal afectan cuerpos de agua amazónicos. Sus conclusiones deben leerse con su alcance territorial y metodológico. En Valle Dorado, una nota del Ministerio Público de 2026 reporta avance de deforestación y desplazamiento de agricultores asociado a minería ilegal: es un caso localizado que no representa por sí solo a toda Madre de Dios ni demuestra que idéntica dinámica exista en Cajamarca." },
            { title: "Cajamarca: construcción de un caso documentado", body: "Seleccionen un reporte público de una entidad competente sobre minería ilegal en un lugar concreto de Cajamarca. Identifiquen tipo de extracción, ecosistema y afectaciones documentadas. Si la fuente solo informa una intervención, no la conviertan en prueba de contaminación medida o de impactos sociales no investigados. No usar el proyecto Conga como ejemplo de minería ilegal, ni trasladar automáticamente al territorio cajamarquino los procesos de extracción aluvial estudiados en la Amazonía." },
          ],
        },
        {
          table: {
            caption: "Ejercicio 3 · Comparar sin equiparar (20 min)",
            head: ["Criterio", "Madre de Dios", "Caso de Cajamarca"],
            rows: [
              ["Lugar y periodo", "Precisar sector y fechas de la fuente.", "Completar con fuente pública."],
              ["Ecosistema y actividad", "Identificar según el documento elegido.", "Identificar sin suponer equivalencias."],
              ["Impacto documentado", "Describir y citar evidencia.", "Describir y citar evidencia."],
              ["Población afectada", "Identificar solo si está documentada.", "Identificar solo si está documentada."],
              ["Vacíos de información", "¿Qué no permite concluir la fuente?", "¿Qué falta medir o contrastar?"],
            ],
          },
        },
        { p: "Producto del equipo: tres conclusiones — una semejanza sustentada, una diferencia territorial y una pregunta que requiera información adicional. Si no encuentran evidencia suficiente para Cajamarca, registren el vacío en lugar de completar el cuadro con suposiciones." },
      ],
    },
    {
      id: "priorizar",
      title: "Priorizar y proponer respuestas",
      blocks: [
        { exercise: { title: "Ejercicio 4 · Matriz de priorización", time: "20 min", body: "Elijan tres impactos del caso analizado y asignen de 1 a 3 puntos por criterio: gravedad (leve a severa), alcance (localizado a extendido), duración (breve a persistente) y desigualdad (menor a mayor concentración del daño en grupos vulnerables). Justifiquen cada puntuación con evidencia. La suma orienta la discusión; no sustituye una evaluación técnica." } },
        { exercise: { title: "Ejercicio 5 · Una acción viable", time: "15 min", body: "A partir del impacto priorizado, propongan una acción de educación, análisis de fuentes públicas o comunicación responsable, con un resultado verificable en 30 días y sin realizar fiscalización ni trabajo de campo en zonas de riesgo. Definan: impacto y población, acción concreta y objetivo, responsable y aliado propuesto, plazo y recursos, indicador y medio de verificación, riesgo y medida de protección." } },
        { exercise: { title: "Cierre", time: "10 min", body: "Cada equipo presenta su propuesta en un minuto. El grupo responde: ¿qué evidencia la sustenta?, ¿a quién beneficia?, ¿cómo se verificará su resultado? Cada participante escribe un aprendizaje y un compromiso realizable." } },
        {
          table: {
            caption: "Secuencia sugerida del taller",
            head: ["Bloque", "Minutos"],
            rows: [
              ["Apertura y objetivos", "10"],
              ["Lectura guiada de conceptos e impactos", "20"],
              ["Ejercicio 1: Un titular bajo la lupa", "10"],
              ["Ejercicio 2: Cadena de consecuencias", "15"],
              ["Ejercicio 3: Comparación territorial", "20"],
              ["Ejercicio 4: Priorización", "20"],
              ["Ejercicio 5: Acción juvenil", "15"],
              ["Cierre y compromisos", "10"],
            ],
          },
        },
        { callout: { tone: "ok", title: "Criterios para revisar los productos", body: "Una ficha completa identifica fuente, fecha y lugar; diferencia evidencia de interpretación; explica mecanismos sin generalizar; reconoce grupos afectados sin estigmatizarlos y propone una acción segura con indicador verificable." } },
      ],
    },
  ],
  keyMessages: [
    "Para atribuir un impacto a la minería ilegal se necesita evidencia de la actividad, del cambio y de la relación entre ambos.",
    "Una fotografía o un cambio de color del agua no prueban por sí solos contaminación ni ilegalidad.",
    "El análisis socioeconómico pregunta quién recibe beneficios, quién asume los costos y durante cuánto tiempo.",
    "Comparar Madre de Dios y Cajamarca exige no equiparar: cada territorio tiene ecosistemas y dinámicas propias.",
    "Si falta evidencia, se registra el vacío en lugar de completar con suposiciones.",
  ],
  updateNote:
    "Antes de replicar el taller, revisar la disponibilidad de las fuentes. Toda cifra adicional debe indicar unidad, periodo, territorio y documento de origen. Las situaciones construidas para los ejercicios son didácticas y no sustituyen investigaciones ambientales o sociales.",
  sources: [
    {
      group: "Fuentes y bibliografía",
      items: [
        { text: "CINCIA. Síntesis científica 1 (2022): impactos ambientales previstos de la actividad minera ilegal en cuerpos de agua de la Amazonía peruana. Base técnica de la sección ambiental.", url: "https://cincia.wfu.edu/wp-content/uploads/2022.03.14_-DSC-1_IMPACTOS-AMBIENTALES-PREVISTOS-ACTIVIDAD-MINERA-ILEGAL-EN-CUERPOS-DE-AGUA-DE-LA-AMAZON%C3%8DA-PERUANA.pdf" },
        { text: "MINAM y GIZ. Manual de buenas prácticas: minería aurífera aluvial y recuperación de áreas. Referencia para comprender condiciones de recuperación; no acredita la legalidad de una operación.", url: "https://sinia.minam.gob.pe/documentos/manual-buenas-practicas-mineria-aurifera-aluvial-facilitar-una" },
        { text: "Ministerio Público. Caso Valle Dorado (2026): interdicción, deforestación y desplazamiento de agricultores en un sector de Madre de Dios.", url: "https://www.gob.pe/institucion/mpfn/noticias/1374250-fema-de-madre-de-dios-realiza-interdiccion-en-el-sector-valle-dorado-contra-la-mineria-ilegal" },
      ],
    },
  ],
};
