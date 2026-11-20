/**
 * Toolkit técnico de formación · Módulo 4.
 * Fuente: Toolkit PACTO-MI, Parte 1, pág. 54, y Parte 2, págs. 55–72 de la numeración
 * continua (versión técnica actualizada noviembre de 2026).
 * Los titulares se citan con fines pedagógicos, como indica el propio toolkit.
 */
export default {
  howTo: {
    lead:
      "En los módulos anteriores examinamos las diferencias entre minería formal, informal e ilegal, sus impactos y las decisiones que afectan el futuro de los territorios. Este cuarto módulo incorpora una pregunta indispensable: ¿cómo se construye lo que la sociedad cree sobre esos problemas?",
    capacities: [
      ["Leer críticamente", "Reconocer encuadres, emociones, omisiones y sesgos."],
      ["Verificar", "Contrastar fuentes, fechas, imágenes, cifras y documentos."],
      ["Comunicar", "Transformar evidencia en mensajes claros sin manipular."],
      ["Actuar", "Usar medios digitales para informar, organizar y movilizar responsablemente."],
    ],
    path: ["Experimentar", "Comprender", "Verificar", "Comunicar", "Movilizar"],
  },
  sections: [
    {
      id: "experimentar",
      title: "Antes de creer, detente",
      blocks: [
        { p: "El módulo comienza con un experimento: pares de titulares sobre un mismo hecho. En cada par, una versión mantiene la información disponible y otra modifica un elemento capaz de cambiar nuestra interpretación. Antes de leer la explicación, decide cuál compartirías y qué necesitarías verificar." },
        {
          pairs: [
            {
              label: "Par 1 · ¿A quién responsabiliza el titular?",
              a: "“‘Vida fácil’: encuentran a jóvenes que se ganaban la vida ofreciendo servicios sexuales en zonas mineras de Madre de Dios.”",
              b: "“Redes criminales captaban y explotaban sexualmente a jóvenes en zonas mineras de Madre de Dios.”",
              aNote: "“Vida fácil” sugiere elección individual, puede estigmatizar a las víctimas y desplaza la atención del delito y de quienes se benefician de la explotación.",
              bNote: "Coloca la acción en las redes criminales y describe el hecho desde la captación y la explotación sexual.",
              changed: "El sujeto de la historia y la atribución de responsabilidad.",
            },
            {
              label: "Par 2 · ¿Qué significa realmente la cifra?",
              a: "“Gobierno de Perú denuncia minería ilegal en yacimiento de US$4.800 millones en Cajamarca.”",
              b: "“Mineros ilegales se apoderan de US$4.800 millones en oro en Conga.”",
              aNote: "Respaldada: vincula los US$4.800 millones al yacimiento o proyecto mencionado.",
              bNote: "Manipulada: conserva la cifra pero la presenta como el valor del oro supuestamente apropiado por mineros ilegales. La fuente citada no afirma eso.",
              changed: "El significado de la cifra. Un número puede ser real y la conclusión construida con ese número puede ser falsa.",
            },
            {
              label: "Par 3 · ¿Cómo nombramos al protagonista?",
              a: "“Autoridades intervienen actividad de minería ilegal que operaba en zona prohibida.”",
              b: "“Autoridades intervienen a pequeños mineros artesanales que buscaban trabajar.”",
              aNote: "Centra la atención en la condición jurídica y territorial en la que se realiza la actividad.",
              bNote: "Desplaza la atención hacia la escala del productor y su motivación. “Artesanal” no determina por sí solo si la actividad es legal, informal o ilegal.",
              changed: "La forma de nombrar al actor.",
            },
            {
              label: "Par 4 · Del mensaje cerrado a la pregunta abierta",
              a: "“AGUA SÍ, MINA NO”",
              b: "“AGUA Y MINERÍA: ¿PUEDEN COEXISTIR?”",
              aNote: "Encuadre de oposición: sencilla, emocional y memorable, pero deja implícita una relación que debe analizarse en cada caso concreto.",
              bNote: "Encuadre de pregunta: no asegura que la coexistencia ocurra siempre ni que sea imposible; abre preguntas sobre el proyecto, el agua, los impactos, la fiscalización y la evidencia.",
              changed: "El encuadre. Ninguna de las dos es, por sí sola, una noticia.",
            },
          ],
        },
        { callout: { tone: "ok", title: "Antes de compartir", body: "No preguntes solo “¿es verdad?”. Pregunta también: “¿está contada en su contexto?”." } },
      ],
    },
    {
      id: "comprender",
      title: "Conceptos clave para leer críticamente un mensaje",
      blocks: [
        {
          table: {
            head: ["Concepto", "Qué significa"],
            rows: [
              ["Hecho", "Acontecimiento o dato que puede comprobarse mediante evidencia."],
              ["Frame o marco", "Idea organizadora que permite interpretar una situación y qué elementos parecen más relevantes."],
              ["Encuadre o framing", "Proceso de seleccionar y destacar ciertos aspectos de la realidad para orientar la interpretación."],
              ["Saliencia", "Grado de visibilidad o importancia que un mensaje concede a una palabra, imagen, cifra o consecuencia."],
              ["Interpretación", "Significado atribuido a un hecho. Puede ser razonable, pero no equivale automáticamente a un dato comprobado."],
              ["Atribución de responsabilidad", "Forma en que el mensaje señala quién causó un problema o quién debería resolverlo."],
              ["Omisión", "Información que se deja fuera, cuando lo omitido cambiaría de manera importante la comprensión."],
              ["Descontextualización", "Uso de una frase, cifra, imagen o video verdadero fuera de su fecha, lugar o significado original."],
              ["Sesgo", "Tendencia que favorece una perspectiva; puede aparecer en la selección de fuentes, palabras o evidencias."],
              ["Sensacionalismo", "Presentación exagerada o emocional diseñada para atraer atención."],
              ["Narrativa", "Relato que conecta hechos, causas y consecuencias para dar sentido a un problema."],
              ["Manipulación", "Uso deliberado de selección o edición para producir una interpretación engañosa."],
            ],
          },
        },
        { h: "Una realidad, muchas historias" },
        { p: "Comunicar implica seleccionar. Hecho base del ejercicio: una autoridad informa sobre actividad minera ilegal en una zona cercana a un proyecto paralizado. El mismo hecho puede recibir encuadres distintos:" },
        {
          table: {
            head: ["Encuadre", "Titular posible"],
            rows: [
              ["Económico", "“Población cajamarquina impulsa actividades extractivas y genera movimiento económico.”"],
              ["Ambiental", "“Minería ilegal amenaza fuentes de agua en zona altoandina.”"],
              ["Seguridad", "“Fiscalía alerta sobre posible expansión criminal alrededor de zonas mineras.”"],
              ["Institucional", "“Autoridades reconocen dificultades para determinar el área afectada.”"],
            ],
          },
        },
        { callout: { tone: "info", title: "Encuadrar no es necesariamente manipular", body: "El encuadre decide qué parte de la realidad se vuelve visible. Se convierte en manipulación cuando la selección, la exageración o la omisión hacen que el mensaje sostenga algo que la evidencia no permite afirmar: cuando omite información determinante, presenta una interpretación como dato comprobado, usa una imagen que no corresponde al lugar o al momento, exagera el alcance de la evidencia o confunde deliberadamente minería formal, informal e ilegal." } },
        { h: "Caso Conga: una narrativa capaz de movilizar" },
        { p: "El caso se analiza como fenómeno comunicacional, no para decirle al participante qué posición adoptar. La consigna “Agua sí, oro no” condensó en pocas palabras una discusión mucho más amplia sobre agua, agricultura, territorio, inversión, confianza, evaluación ambiental y desarrollo. ¿Qué elementos del conflicto quedaron visibles en la consigna y cuáles quedaron fuera?" },
        { flow: { title: "De un problema complejo a una narrativa movilizadora", steps: ["Problema complejo", "Selección de un conflicto central", "Consigna memorable", "Repetición", "Identidad colectiva", "Movilización"] } },
        { callout: { tone: "warn", title: "La precisión que exige el presente", body: "Infobae Perú (23 de octubre de 2026) tituló que la Fiscalía alerta que la minería ilegal “ya está” en el entorno de Conga, pero la propia nota precisa que todavía es difícil determinar qué porcentaje del área vinculada al proyecto habría sido ocupado. No es lo mismo decir “Conga fue tomado por la minería ilegal” que “Fiscalía advierte indicios de minería ilegal en zonas cercanas a Conga; el área comprometida todavía no ha sido determinada”." } },
        { exercise: { title: "Actividad · Dos momentos, una conversación", body: "Identifica las palabras asociadas a Conga en 2011–2012 y las asociadas a la minería ilegal en 2025–2026. Compara protagonistas, fuentes, imágenes, riesgos y llamados a la acción. Formula una pregunta de investigación, no una conclusión anticipada. Producto: una matriz comparativa de narrativas y vacíos de información." } },
      ],
    },
    {
      id: "desinformacion",
      title: "Cuando lo falso parece verdadero",
      blocks: [
        { p: "La desinformación más eficaz no siempre es completamente inventada: puede apoyarse en una parte verdadera y alterar su contexto." },
        {
          table: {
            caption: "No todo contenido problemático es igual",
            head: ["Tipo", "Qué es"],
            rows: [
              ["Error", "Información incorrecta difundida sin intención consciente de engañar."],
              ["Desinformación", "Contenido falso o engañoso creado o difundido deliberadamente."],
              ["Contenido descontextualizado", "Material verdadero presentado con lugar, fecha o significado incorrectos."],
              ["Manipulación", "Selección o edición orientada a producir una interpretación engañosa."],
              ["Fabricación", "Afirmación, fuente, imagen, audio o documento inventado."],
            ],
          },
        },
        { h: "Formas frecuentes en temas mineros" },
        {
          list: [
            "Fotografía verdadera de otra operación o de otro país.",
            "Video antiguo presentado como si hubiera ocurrido hoy.",
            "Cifra correcta utilizada para una conclusión que la fuente no sostiene.",
            "Testimonio individual presentado como opinión de toda una comunidad.",
            "Mapa sin escala, origen, fecha o metodología.",
            "Contenido generado o editado con inteligencia artificial.",
            "Titular que habla de “minería” sin precisar su condición legal.",
          ],
        },
        {
          table: {
            caption: "¿Por qué creemos y compartimos?",
            head: ["Mecanismo", "Cómo actúa"],
            rows: [
              ["Sesgo de confirmación", "Aceptamos con mayor facilidad lo que coincide con nuestras creencias previas."],
              ["Emoción", "El miedo, la indignación y la sorpresa aceleran la reacción."],
              ["Repetición", "Lo familiar puede empezar a parecernos más verdadero."],
              ["Validación social", "Muchos “me gusta” o compartidos se interpretan como credibilidad."],
              ["Urgencia", "“Compártelo antes de que lo borren” reduce la reflexión."],
              ["Algoritmos", "El contenido que genera interacción obtiene más visibilidad."],
            ],
          },
        },
        { flow: { title: "Cadena de viralización", steps: ["Me impacta", "Confirma lo que pienso", "Lo comparto", "Otros lo repiten", "Se vuelve familiar", "Parece verdad"] } },
        { exercise: { title: "Actividad · Pausa de 30 segundos", body: "Observa una publicación polémica. Nombra la emoción que intenta activar, identifica qué afirmación concreta debe verificarse y decide qué fuente primaria necesitarías." } },
        { h: "La minería ilegal también construye narrativas" },
        { p: "Los mensajes deben analizarse sin negar los problemas económicos reales, pero sin normalizar daños o delitos. Narrativas para analizar: “Solo son pequeños mineros que buscan sobrevivir”; “Formal e ilegal es prácticamente lo mismo”; “Si se interviene, miles de familias se quedan sin ingresos”; “Da trabajo a quienes no tienen oportunidades”." },
        {
          list: [
            "¿Qué parte puede contener una realidad verificable?",
            "¿Qué aspectos económicos, ambientales, sociales o delictivos omite?",
            "¿La frase distingue minería artesanal, pequeña minería, informalidad e ilegalidad?",
            "¿Quién aparece como protagonista y quién permanece invisible?",
            "¿Qué emoción intenta activar?",
            "¿Qué actor obtiene legitimidad si el mensaje se instala?",
          ],
        },
      ],
    },
    {
      id: "verificar",
      title: "Detectives de la información",
      blocks: [
        { p: "La verificación no consiste en buscar una fuente que confirme lo que pensamos, sino en someter la afirmación a prueba." },
        {
          table: {
            caption: "La ruta de las siete preguntas",
            head: ["Pregunta", "Qué revisar"],
            rows: [
              ["1. ¿Quién lo dice?", "Autor, medio, institución y fuente original."],
              ["2. ¿Cuándo?", "Fecha de publicación y del hecho."],
              ["3. ¿Dónde?", "El lugar y la relación de la imagen con el sitio."],
              ["4. ¿Qué evidencia?", "Documento, estudio, resolución, registro o testimonio."],
              ["5. ¿Qué falta?", "Información capaz de cambiar la interpretación."],
              ["6. ¿Quién más confirma?", "Contraste con una fuente independiente."],
              ["7. ¿La imagen es auténtica?", "Búsqueda inversa de imágenes y localización de la publicación original."],
            ],
          },
        },
        { p: "Para proyectos e impactos ambientales, consulta documentos y pronunciamientos de SENACE, OEFA, MINAM, MINEM, ANA, Ministerio Público, gobiernos regionales y municipalidades, según la competencia. Prioriza siempre el documento o registro original." },
        { callout: { tone: "info", title: "Regla de oro", body: "Una fuente interesada puede aportar información valiosa, pero no debe ser la única fuente utilizada para verificar una controversia." } },
        {
          table: {
            caption: "No todas las fuentes prueban lo mismo",
            head: ["Fuente", "Qué aporta"],
            rows: [
              ["Primaria", "Resolución, expediente, EIA, informe técnico, base de datos, declaración directa o registro oficial."],
              ["Periodística", "Ayuda a contextualizar, contrastar y reunir voces; debe enlazar o identificar su evidencia."],
              ["Especializada", "Aporta conocimiento técnico, pero debe transparentar metodología e intereses."],
              ["Testimonio", "Indispensable para comprender experiencias, aunque no representa automáticamente a toda una población."],
              ["Red social", "Puede alertar sobre un hecho, pero rara vez es prueba suficiente por sí sola."],
            ],
          },
        },
        { exercise: { title: "Actividad · Rastrea hasta el origen", body: "Subraya la afirmación verificable del titular, identifica a quién se atribuye, localiza la declaración o documento original, compara el titular con el contenido completo y registra qué parte se confirmó, qué parte requiere contexto y qué no pudo verificarse." } },
        { h: "¿De qué minería estamos hablando? Clasifica antes de comunicar" },
        {
          table: {
            head: ["Categoría", "Criterio"],
            rows: [
              ["Minería formal", "Cuenta con autorizaciones y obligaciones aplicables, fiscalización y mecanismos formales de gestión."],
              ["En proceso de formalización", "Debe analizarse según el marco vigente y su situación concreta; la inscripción no equivale automáticamente a cumplimiento total."],
              ["Minería ilegal", "Opera en condiciones o zonas prohibidas, o emplea medios ilícitos según el marco aplicable."],
              ["No determinable", "El titular o la publicación no ofrecen información suficiente para clasificar."],
            ],
          },
        },
        { exercise: { title: "Actividad · Formal, informal, ilegal o indeterminado", body: "Selecciona diez titulares reales, identifica qué término utiliza cada uno, revisa si el cuerpo de la noticia sustenta esa clasificación y corrige los que mezclen categorías. Producto: una galería de titulares corregidos y justificados." } },
        { h: "Laboratorio de titulares" },
        { p: "Hecho base: la Fiscalía advierte indicios de minería ilegal en zonas cercanas a Conga y señala que aún no puede determinarse el porcentaje del área comprometida." },
        {
          table: {
            head: ["Versión", "Titular"],
            rows: [
              ["Favorable", "“El oro vuelve a generar oportunidades en zonas rurales de Cajamarca.”"],
              ["Alarmista", "“Conga tomada: minería ilegal avanza sin control.”"],
              ["Interpretativo", "“Una década después, el oro vuelve a cambiar el destino de Conga.”"],
              ["Riguroso", "“Fiscalía advierte indicios de minería ilegal cerca de Conga; área afectada aún no ha sido determinada.”"],
            ],
          },
        },
        { p: "Para cada versión: ¿qué dato preserva?, ¿qué dato omite?, ¿qué emoción activa?, ¿qué afirmación no está demostrada?, ¿cuál tendría más clics?, ¿cuál permite comprender mejor el nivel de certeza?" },
        { callout: { tone: "ok", title: "Criterio editorial", body: "Un titular responsable puede ser atractivo, pero no debe afirmar más de lo que la evidencia permite sostener." } },
      ],
    },
    {
      id: "comunicar",
      title: "Del dato a una historia responsable",
      blocks: [
        { p: "No basta con desmentir: una corrección técnicamente impecable puede fracasar si nadie la entiende, recuerda o comparte. Un contenido falso viral tiene diez palabras, una imagen impactante, una emoción intensa y miles de visualizaciones; una corrección técnica suele tener quince páginas, lenguaje especializado, publicación tardía y poca circulación. La información rigurosa también necesita claridad, contexto, historia, formato, oportunidad y llamado a la acción." },
        {
          table: {
            caption: "Estructura de un mensaje responsable",
            head: ["Paso", "Pregunta"],
            rows: [
              ["1. Gancho", "¿Por qué debería importarle a esta audiencia?"],
              ["2. Hecho", "¿Qué ocurrió exactamente?"],
              ["3. Evidencia", "¿Cómo lo sabemos y con qué nivel de certeza?"],
              ["4. Territorio", "¿Qué significa para personas y lugares concretos?"],
              ["5. Contexto", "¿Qué falta saber o qué posiciones existen?"],
              ["6. Acción", "¿Qué puede hacer la audiencia de manera realista?"],
            ],
          },
        },
        { example: { title: "Ejemplo", body: "Versión técnica: “Se identificó contaminación por mercurio asociada a actividades de minería ilegal”. Versión comunicacional: “El oro puede viajar miles de kilómetros hasta llegar a un mercado. El mercurio puede permanecer mucho más tiempo en el territorio”. Luego deben incorporarse la fuente, el lugar, el dato y sus límites." } },
        { exercise: { title: "Actividad · Traduce sin distorsionar", body: "Elige un dato ambiental, social o económico. Redacta una versión técnica, crea un gancho de máximo 15 palabras y añade fuente, contexto y una acción posible. Pide a otro grupo que identifique qué podría malinterpretarse. Producto: un mensaje listo para un carrusel o reel, con fuente visible." } },
        { h: "Activismo digital: de espectador a actor" },
        { flow: { title: "El objetivo no es publicar por publicar", steps: ["Hacer visible", "Informar", "Conectar", "Movilizar", "Incidir"] } },
        {
          table: {
            head: ["Acción", "Qué implica"],
            rows: [
              ["Verificar", "Evitar amplificar información falsa o engañosa."],
              ["Corregir", "Responder con evidencia sin humillar a quien compartió."],
              ["Crear", "Producir reels, carruseles, videos, podcasts o artículos."],
              ["Convocar", "Invitar a una actividad, diálogo o acción concreta."],
              ["Organizar", "Conectar personas alrededor de un objetivo verificable."],
              ["Incidir", "Dirigir una petición realista a una institución competente."],
            ],
          },
        },
        { callout: { tone: "warn", title: "Qué no es activismo digital responsable", body: "Atacar o exponer datos personales de quien piensa diferente; usar noticias falsas porque favorecen nuestra causa; convertir una denuncia no verificada en una acusación pública; medir el éxito solo por número de “me gusta”; crear expectativas sobre acciones que ninguna institución puede cumplir." } },
      ],
    },
    {
      id: "laboratorio",
      title: "Laboratorio PACTO-MI: cambiemos la conversación",
      blocks: [
        { p: "El reto final reúne los aprendizajes de los cuatro módulos. Elige una narrativa: “Toda minería contamina de la misma manera”; “La minería ilegal beneficia al territorio porque genera empleo”; “Formal, informal e ilegal son prácticamente iguales”; “Si una noticia tiene miles de compartidos, debe ser cierta”; “Los impactos terminan cuando se retira la maquinaria”." },
        {
          steps: [
            "Desarma: separa hechos, opiniones, emociones, omisiones y afirmaciones verificables.",
            "Verifica: rastrea fuente, fecha, lugar, evidencia, imagen, segunda fuente y límites de certeza.",
            "Reconstruye: redacta una versión rigurosa, clara, atractiva y comprensible.",
            "Activa: define una acción concreta que la audiencia pueda realizar más allá del “me gusta”.",
          ],
        },
        {
          table: {
            caption: "Criterios de evaluación: no se premia la publicación más llamativa, sino la que combina rigor, claridad y capacidad de movilización",
            head: ["Criterio", "4 · Sólido", "2 · En proceso", "1 · Insuficiente"],
            rows: [
              ["Rigor", "Fuente primaria y contraste; límites explícitos.", "Fuentes parciales o contexto incompleto.", "Sin evidencia verificable."],
              ["Precisión", "Distingue formal, informal e ilegal.", "Usa categorías con alguna ambigüedad.", "Mezcla o confunde categorías."],
              ["Claridad", "Mensaje comprensible y fiel a la evidencia.", "Mensaje claro, pero pierde matices relevantes.", "Mensaje confuso o engañoso."],
              ["Estrategia", "Audiencia, formato y acción están alineados.", "Algunos elementos no se conectan.", "Publicación sin objetivo concreto."],
              ["Ética", "No ataca, no expone y no manipula.", "Presenta riesgos menores de estigmatización.", "Acusa, estigmatiza o fabrica."],
            ],
          },
        },
      ],
    },
  ],
  tools: {
    items: [
      {
        title: "Ficha de producción",
        intro: "Para el reto del Laboratorio PACTO-MI.",
        fields: [
          "Problema o narrativa a trabajar",
          "Audiencia prioritaria",
          "Afirmación verificable",
          "Fuente primaria",
          "Segunda fuente independiente",
          "Dato principal y su límite",
          "Emoción que se busca activar",
          "Mensaje central en una frase",
          "Formato digital",
          "Llamado a la acción",
          "Riesgo de malinterpretación",
          "Cómo se medirá el resultado",
        ],
      },
    ],
  },
  keyMessages: [
    "Un número puede ser real y la conclusión construida con ese número puede ser falsa.",
    "Encuadrar no es necesariamente manipular; lo es cuando el mensaje sostiene algo que la evidencia no permite afirmar.",
    "Clasifica antes de comunicar: formal, en formalización, ilegal o no determinable.",
    "Un titular responsable puede ser atractivo, pero no debe afirmar más de lo que la evidencia permite sostener.",
    "Activismo digital responsable: verificar, corregir sin humillar, crear, convocar, organizar e incidir.",
  ],
  updateNote:
    "Los titulares se incluyen con fines pedagógicos y deben revisarse nuevamente antes de una edición pública definitiva.",
  sources: [
    {
      group: "Titulares y guías citados",
      items: [
        { text: "Infobae Perú, 23 de octubre de 2026. “Fiscalía alerta que la minería ilegal ‘ya está’ en el entorno de Conga y que Cajamarca sería ‘diez’ veces peor que Pataz”." },
        { text: "Bloomberg Línea, 15 de diciembre de 2025. “Gobierno de Perú denuncia minería ilegal en yacimiento de US$4.800 millones en Cajamarca”." },
        { text: "Instituto de Ingenieros de Minas del Perú, 16 de diciembre de 2025. “PCM denuncia la presencia de minería ilegal en el proyecto Conga”." },
        { text: "Business & Human Rights Resource Centre, actualización del 27 de febrero de 2026. “Perú: Gobierno advierte presencia de minería ilegal en inmediaciones del proyecto minero Conga”." },
        { text: "Saber para Crecer, 6 de agosto de 2026. “Del rumor a los datos: cinco formas de verificar la información sobre proyectos de inversión”." },
      ],
    },
  ],
};
