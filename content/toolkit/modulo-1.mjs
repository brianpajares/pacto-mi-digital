/**
 * Toolkit técnico de formación · Módulo 1.
 * Fuente: Toolkit PACTO-MI, Parte 1, págs. 4–23 (versión técnica actualizada octubre de 2026).
 * Las cifras se transcriben con el territorio, el periodo y la fuente que cita el toolkit.
 */
export default {
  howTo: {
    lead:
      "Este módulo combina lectura técnica, análisis de evidencia y ejercicios aplicados. No busca imponer una posición sobre la minería, sino fortalecer la capacidad de distinguir situaciones jurídicas, comprender cadenas económicas y debatir respuestas territoriales basadas en hechos.",
    moments: [
      ["Comprender", "Revisar conceptos, normativa y cifras verificadas.", "Criterios comunes."],
      ["Analizar", "Examinar factores, actores y estudios de caso.", "Hipótesis sustentadas."],
      ["Deliberar", "Contrastar intereses, evidencia y vacíos de información.", "Conclusiones razonadas."],
      ["Actuar", "Diseñar alertas y acciones preventivas seguras.", "Ruta territorial de acción."],
    ],
  },
  sheet: [
    ["Público objetivo", "Estudiantes universitarios, organizaciones juveniles, líderes comunitarios y actores locales."],
    ["Duración sugerida", "4 horas. Puede dividirse en dos sesiones de 2 horas."],
    ["Modalidad", "Presencial, virtual o híbrida."],
    ["Propósito", "Comprender la minería ilegal como problema económico, ambiental, institucional y de seguridad; diferenciarla de la minería formal y del proceso de formalización."],
    ["Productos", "Matriz de clasificación, mapa de cadena, análisis de casos, sala de situación y compromiso de acción."],
    ["Criterio de seguridad", "No confrontar, perseguir ni recopilar pruebas en contextos de riesgo. Priorizar canales oficiales y protección de las personas."],
  ],
  route: [
    "Marco conceptual: minería formal, en vías de formalización e ilegal.",
    "Contribución económica y responsabilidad pública.",
    "Factores de expansión y cadena de actores.",
    "Proceso de formalización minera integral.",
    "Caso Cajamarca: proyecto Conga como estudio de gobernanza y conflicto.",
    "Caso Madre de Dios: La Pampa como estudio de minería ilegal, deforestación y control territorial.",
    "Herramientas de diagnóstico, alertas y acción segura.",
  ],
  sections: [
    {
      id: "conceptos",
      title: "Minería, Estado y territorio",
      blocks: [
        { p: "La minería es una actividad económica vinculada al aprovechamiento de recursos minerales. Su evaluación no debe reducirse a una dicotomía simple entre “minería buena” y “minería mala”. El análisis técnico exige observar, como mínimo, el lugar donde se desarrolla, la escala, las autorizaciones existentes, el cumplimiento ambiental y laboral, la trazabilidad del mineral, la contribución tributaria y los impactos sobre terceros." },
        { callout: { title: "Pregunta de partida", body: "¿Qué diferencia a una actividad productiva que contribuye al desarrollo de una economía ilegal que captura rentas y debilita el Estado?" } },
        { p: "Las categorías siguientes describen situaciones jurídicas y de cumplimiento. No deben confundirse con la escala de producción: “pequeña minería” y “minería artesanal” describen categorías productivas; “formal”, “en vías de formalización” e “ilegal” describen la situación frente a la norma y al proceso administrativo." },
        { h: "Minería formal" },
        { p: "Desarrolla sus actividades con los títulos habilitantes y autorizaciones aplicables, cumple obligaciones ambientales, laborales, tributarias y de seguridad, y se encuentra sujeta a fiscalización. La formalidad no significa ausencia absoluta de impactos o conflictos: significa que existen obligaciones exigibles, autoridades competentes y mecanismos de supervisión y sanción." },
        { example: { title: "Ejemplo: Antamina", body: "Antamina, ubicada en Áncash, reportó para 2024 una producción de 429 mil toneladas de cobre, 273 mil toneladas de zinc, 8 mil toneladas de molibdeno y 1,3 millones de onzas de plata. En su Reporte de Sostenibilidad 2024 señaló que su actividad representó aproximadamente el 2,9 % del PBI nacional y el 43 % del PBI de Áncash, e informó inversiones por US$ 691 millones durante ese año. Las cifras provienen del reporte de la propia empresa." } },
        { callout: { tone: "warn", title: "Precisión para el debate", body: "Que existan recursos transferidos no garantiza automáticamente buenos servicios. Transformar ingresos públicos en escuelas, centros de salud o agua potable depende también de la priorización, la capacidad de formulación, ejecución, mantenimiento y control de las entidades públicas: generar recursos no es lo mismo que gastarlos bien." } },
        { h: "Minería informal o en vías de formalización" },
        { p: "El Decreto Legislativo N.° 1105 define la minería informal como la actividad realizada sin cumplir las exigencias administrativas, técnicas, sociales y ambientales, pero desarrollada en zonas no prohibidas por personas que han iniciado un proceso de formalización. La inscripción en un registro no equivale a haber culminado la formalización." },
        { example: { title: "Ejemplo: operador inscrito en el REINFO", body: "Un pequeño productor que trabaja en una zona no prohibida y mantiene una inscripción vigente en el Registro Integral de Formalización Minera puede encontrarse en vías de formalización. Para culminar el proceso debe acreditar, entre otros requisitos publicados por el MINEM, la aprobación del IGAFOM, el uso del terreno superficial, la titularidad de la concesión, la inexistencia de restos arqueológicos y el expediente técnico. Si la inscripción está suspendida, no puede desarrollar actividad minera mientras dure la suspensión." } },
        { callout: { tone: "info", title: "Situación vigente", body: "La Ley N.° 32537 prorrogó el proceso de formalización minera integral hasta el 31 de diciembre de 2026 o hasta la entrada en vigor de la Ley de la Pequeña Minería y Minería Artesanal y su reglamento, lo que ocurra primero. La norma incorporó un censo nacional y la obligación de sincerar la ubicación real de las operaciones." } },
        { h: "Minería ilegal" },
        { p: "El Decreto Legislativo N.° 1105 considera minería ilegal la actividad ejercida sin cumplir las exigencias administrativas, técnicas, sociales y ambientales, con equipos que no corresponden a la categoría autorizada o en zonas donde la minería está prohibida. Toda actividad minera desarrollada en una zona prohibida se considera ilegal. La definición también comprende a personas o grupos organizados que actúan al margen de la ley." },
        { example: { title: "Ejemplo: extracción aurífera en La Pampa", body: "La Pampa se ubica en la zona de amortiguamiento de la Reserva Nacional Tambopata. En ese territorio el Estado ha realizado interdicciones contra minería ilegal y delitos conexos: en 2019 desplegó la Operación Mercurio y en 2026 continuó ejecutando operativos contra organizaciones armadas vinculadas a minería ilegal, extorsión y sicariato." } },
        {
          table: {
            caption: "Comparación técnica de las tres situaciones jurídicas",
            head: ["Criterio", "Formal", "En vías de formalización", "Ilegal"],
            rows: [
              ["Ubicación", "Zona permitida.", "Zona no prohibida.", "Puede operar en zona prohibida."],
              ["Autorizaciones", "Cuenta con títulos y permisos aplicables.", "Mantiene requisitos pendientes.", "Incumple exigencias o actúa al margen de la ley."],
              ["Situación", "Actividad habilitada y fiscalizable.", "Proceso transitorio sujeto a obligaciones.", "Actividad ilícita."],
              ["Comercialización", "Canales legales y trazabilidad exigible.", "Acceso condicionado al avance y cumplimiento.", "Puede insertarse en cadenas sin trazabilidad."],
              ["Respuesta pública", "Fiscalización y sanción si incumple.", "Asistencia, evaluación y fiscalización.", "Prevención, investigación, interdicción y persecución penal, según corresponda."],
              ["Rol ciudadano", "Vigilancia y diálogo informado.", "Seguimiento del avance real.", "Alerta segura por canales oficiales."],
            ],
          },
        },
      ],
    },
    {
      id: "expansion",
      title: "¿Por qué se expande la minería ilegal?",
      blocks: [
        { p: "La minería ilegal no surge por una sola causa. Se expande cuando coinciden incentivos económicos, acceso a capital e insumos, rutas de transporte, compradores, baja trazabilidad, debilidad institucional, falta de alternativas y capacidad de actores ilegales para controlar o intimidar." },
        {
          table: {
            caption: "Dimensiones de análisis",
            head: ["Dimensión", "Preguntas de análisis", "Señales posibles"],
            rows: [
              ["Económica", "¿Existe alta rentabilidad, liquidez y compra asegurada?", "Pagos en efectivo, nuevos acopiadores, servicios asociados."],
              ["Institucional", "¿Las autoridades coordinan y fiscalizan de manera sostenida?", "Presencia intermitente, competencias fragmentadas, corrupción."],
              ["Social", "¿Hay empleo precario, migración o captación mediante falsas ofertas?", "Campamentos, endeudamiento, condiciones abusivas."],
              ["Territorial", "¿Hay rutas, ríos, zonas remotas o áreas sensibles?", "Accesos nuevos, maquinaria, alteración de cauces."],
              ["Comercial", "¿Cómo se procesa, transporta y vende el mineral?", "Intermediarios, plantas y compras sin trazabilidad."],
              ["Seguridad", "¿Existen amenazas, cupos o control armado?", "Extorsión, vigilancia ilegal, armas, represalias."],
            ],
          },
        },
        {
          table: {
            caption: "Cadena de valor ilegal",
            head: ["Eslabón", "Función", "Riesgo crítico"],
            rows: [
              ["Financiación", "Adelanta capital para maquinaria, combustible y operación.", "Lavado de activos y captura económica."],
              ["Abastecimiento", "Proporciona equipos, combustible, mercurio u otros insumos.", "Desvío de bienes fiscalizados."],
              ["Extracción", "Remueve material y recupera el mineral.", "Daño ambiental, inseguridad y explotación."],
              ["Procesamiento", "Concentra o beneficia el mineral.", "Contaminación y pérdida de trazabilidad."],
              ["Transporte", "Mueve mineral, insumos y personas.", "Uso de rutas clandestinas y corrupción."],
              ["Compra y comercialización", "Acopia, transforma y coloca el mineral en mercados.", "Mezcla de producción legal e ilegal."],
              ["Control territorial", "Protege la economía ilegal mediante amenazas o armas.", "Extorsión, sicariato y debilitamiento estatal."],
            ],
          },
        },
      ],
    },
    {
      id: "formalizacion",
      title: "Formalización minera integral",
      blocks: [
        { p: "La formalización busca que quienes desarrollan pequeña minería o minería artesanal en zonas no prohibidas obtengan los títulos, instrumentos y autorizaciones necesarios para operar legalmente y asumir responsabilidades ambientales, técnicas, laborales, sociales y tributarias." },
        { h: "Requisitos publicados por el MINEM" },
        {
          list: [
            "Resolución que aprueba el Instrumento de Gestión Ambiental para la Formalización Minera (IGAFOM).",
            "Autorización de uso del terreno superficial.",
            "Acreditación de titularidad de la concesión minera.",
            "Declaración Jurada de Inexistencia de Restos Arqueológicos.",
            "Expediente técnico.",
            "Solicitud de inicio o reinicio de actividades, cuando corresponda.",
          ],
        },
        { source: "MINEM, trámite “Proceso de Formalización Minera”, última actualización consultada: 14 de octubre de 2025." },
        { callout: { tone: "warn", title: "Registro no equivale a formalidad", body: "El REINFO es un registro dinámico: una inscripción puede estar vigente o suspendida. Según el portal oficial, los titulares con inscripción suspendida no cuentan con las prerrogativas del proceso y no pueden desarrollar actividad minera mientras dure la suspensión. Para solicitar el levantamiento deben cumplir condiciones como presentar el IGAFOM, contar con RUC activo cuando corresponda y declarar producción." } },
        { h: "Desafíos de política pública" },
        {
          list: [
            "Simplificar procedimientos sin reducir estándares esenciales.",
            "Distinguir al operador que evidencia avances de quien utiliza el proceso como cobertura.",
            "Resolver el acceso a concesión y terreno superficial.",
            "Mejorar la asistencia técnica y la capacidad de evaluación.",
            "Asegurar la trazabilidad del mineral desde la extracción hasta la venta.",
            "Coordinar la formalización con control de insumos, trabajo digno y protección ambiental.",
          ],
        },
      ],
    },
    {
      id: "conga",
      title: "Caso de estudio: proyecto Conga, Cajamarca",
      blocks: [
        { callout: { tone: "warn", title: "Clasificación del caso", body: "Conga fue un proyecto minero formal con Estudio de Impacto Ambiental aprobado. Se incorpora como caso de gobernanza, participación, confianza y conflicto socioambiental. No debe presentarse como un caso de minería ilegal." } },
        { h: "¿Qué buscaba el proyecto?" },
        { p: "El proyecto Conga fue presentado por Minera Yanacocha para desarrollar una explotación minera en los distritos de Sorochuco y Huasmín, provincia de Celendín, y La Encañada, provincia de Cajamarca. La Resolución Directoral N.° 351-2010-MEM/AAM identifica a Minera Yanacocha como titular y señala que el EIA fue presentado el 9 de febrero de 2010." },
        { p: "Contemplaba la explotación de oro y cobre y fue estimado públicamente en alrededor de US$ 4.800 millones. De haber entrado en operación, habría generado producción, empleo, compras, tributos y transferencias. En el módulo estas contribuciones se presentan como beneficios potenciales no materializados, no como ingresos efectivamente recibidos." },
        { h: "¿Cómo se aprobó?" },
        { p: "El EIA fue presentado ante la Dirección General de Asuntos Ambientales Mineros en febrero de 2010. La documentación oficial registra la participación de la Autoridad Nacional del Agua, la conformidad del resumen ejecutivo y del plan de participación ciudadana, mecanismos de difusión y el proceso de evaluación. Fue aprobado mediante la Resolución Directoral N.° 351-2010-MEM/AAM del 27 de octubre de 2010." },
        { h: "¿Por qué se produjo la oposición?" },
        { p: "Sectores de la población y organizaciones sociales cuestionaron los posibles efectos sobre lagunas, cabeceras de cuenca y disponibilidad de agua, así como la suficiencia y legitimidad de la información técnica. La oposición se intensificó en un contexto de desconfianza acumulada hacia las instituciones y la empresa. El conflicto mostró que una aprobación administrativa no produce automáticamente aceptación social." },
        { p: "La Defensoría del Pueblo exhortó a analizar el peritaje del EIA, difundirlo ampliamente, restablecer el diálogo y resolver las discrepancias mediante mecanismos legales y pacíficos. También recordó que el derecho a la protesta no legitima actos de violencia." },
        { h: "¿Cómo se paralizó?" },
        { p: "Las protestas y la escalada del conflicto detuvieron la continuidad del proyecto. El Gobierno promovió una revisión técnica adicional del EIA y el proyecto pasó a una situación de suspensión temporal de actividades de preconstrucción y construcción. Documentación presentada al MINEM en 2015 se refería expresamente al proyecto en “stand by”." },
        {
          table: {
            caption: "Lo que el caso permite discutir",
            head: ["Dimensión", "Pregunta analítica"],
            rows: [
              ["Legalidad", "¿Por qué una autorización formal puede ser insuficiente para sostener un proyecto?"],
              ["Confianza", "¿Qué antecedentes influyeron en la credibilidad de la empresa y del Estado?"],
              ["Agua", "¿Qué información debía ser comprendida, contrastada y monitoreada?"],
              ["Participación", "¿Los mecanismos utilizados generaron deliberación o solo cumplimiento procedimental?"],
              ["Economía", "¿Qué beneficios potenciales y costos de oportunidad deben analizarse?"],
              ["Gobernanza", "¿Qué capacidades faltaron para procesar el desacuerdo antes de la crisis?"],
            ],
          },
        },
        { callout: { tone: "warn", title: "Situación actual y precisión necesaria", body: "El área asociada al proyecto Conga no debe describirse de manera general como “invadida por minería ilegal” sin evidencia oficial georreferenciada y actualizada. Lo técnicamente responsable es decir que la paralización de un proyecto formal no elimina las presiones económicas ni sustituye una estrategia de gobernanza, control territorial y desarrollo. Cualquier referencia a minería ilegal actual debe indicar lugar, fecha y fuente verificable." } },
        { callout: { tone: "ok", title: "Lección estratégica", body: "La viabilidad de una inversión no depende únicamente del cumplimiento administrativo. También exige confianza, comprensión pública de la evidencia, instituciones legítimas, capacidad de diálogo y acuerdos sobre el uso del territorio. La lección no es que el conflicto formal produzca automáticamente minería ilegal, sino que los vacíos prolongados de gobernanza pueden dejar problemas económicos y territoriales sin resolver." } },
      ],
    },
    {
      id: "la-pampa",
      title: "Caso de estudio: La Pampa, Madre de Dios",
      blocks: [
        { p: "La Pampa se ubica en la provincia de Tambopata y en la zona de amortiguamiento de la Reserva Nacional Tambopata. Se convirtió en uno de los principales focos de minería ilegal de oro del país y en un territorio donde convergieron deforestación, trata de personas, explotación laboral, sicariato y otras formas de criminalidad." },
        {
          table: {
            caption: "La Pampa en cifras oficiales",
            head: ["Indicador", "Cifra y periodo", "Fuente oficial"],
            rows: [
              ["Bosque afectado", "Más de 11.000 hectáreas reportadas al inicio de la intervención de 2019.", "MINAM, 20 feb. 2019"],
              ["Deforestación previa", "173 ha/mes entre enero de 2017 y febrero de 2019.", "SINIA-MINAM, análisis MAAP"],
              ["Deforestación posterior", "14 ha/mes entre marzo de 2019 y mayo de 2020.", "SINIA-MINAM, análisis MAAP"],
              ["Reducción", "92 % en la tasa mensual de deforestación minera.", "SINIA-MINAM, análisis MAAP"],
              ["Despliegue Mercurio", "Más de 1.200 policías, 300 militares y 70 fiscales sobre 11.000 ha.", "MININTER, 19 feb. 2019"],
              ["Primeros tres meses", "152 detenidos; 51 víctimas de trata rescatadas; S/ 252 millones en bienes e insumos destruidos.", "MININTER, 17 may. 2019"],
              ["Operativo 2026", "21 detenidos; 19 fusiles y carabinas; 8 pistolas; 10 granadas.", "MININTER, 7 jul. 2026"],
              ["Control territorial 2026", "2.310 personas intervenidas y 560 vehículos fiscalizados.", "TV Perú, 8 ago. 2026"],
            ],
          },
        },
        { h: "Del daño ambiental al control criminal" },
        { p: "La evidencia oficial muestra una evolución. El problema comenzó como expansión de extracción aurífera ilegal con destrucción de bosque y alteración del territorio, pero también produjo economías conexas y control mediante violencia. En julio de 2026, un operativo en los kilómetros 111 y 115 de La Pampa enfrentó a una presunta organización criminal vinculada a minería ilegal, extorsión, sicariato y tenencia de armas. La Fiscalía informó que los investigados habrían operado desde campamentos y practicado cobro de cupos (MININTER, 7 de julio de 2026; Ministerio Público, 11 de julio de 2026)." },
        { figure: "toolkit-la-pampa" },
        {
          timeline: [
            ["2013", "El problema ya estaba consolidado", "Una interdicción reportada por el MINAM destruyó 38 motores, 27 tolvas, 23 balsas traca, 11 chupaderas, 18 cilindros de combustible y 950 metros de manguera."],
            ["2017–2019", "Aceleración ambiental", "La deforestación minera alcanzó un promedio de 173 hectáreas mensuales."],
            ["19 feb. 2019", "Operación Mercurio", "El Estado desplegó una intervención multisectorial para recuperar el principio de autoridad, erradicar la minería ilegal y enfrentar delitos conexos."],
            ["Mar. 2019 – may. 2020", "Reducción", "La tasa mensual bajó a 14 hectáreas, una reducción del 92 %. La actividad no desapareció y aparecieron presiones en otros sectores."],
            ["2022–2023", "Respuesta judicial", "Una condena de ocho años por minería ilegal agravada en La Pampa fue confirmada en apelación."],
            ["Jul.–ago. 2026", "Persistencia criminal", "Operativos oficiales registraron armas de guerra, presunta extorsión y sicariato, personas con requisitorias y una adolescente rescatada como presunta víctima de trata."],
          ],
        },
        { callout: { tone: "ok", title: "Lección central", body: "La Operación Mercurio demostró que una intervención estatal puede reducir de forma significativa la velocidad del daño ambiental. La persistencia de hechos criminales años después muestra que el control territorial requiere presencia sostenida, justicia, trazabilidad económica, recuperación ambiental y alternativas legales." } },
      ],
    },
    {
      id: "comparacion",
      title: "Dos casos, dos problemas distintos",
      blocks: [
        { p: "Conga y La Pampa no deben equipararse. Conga permite estudiar la gobernanza de un proyecto formal que, pese a contar con aprobación ambiental, no logró sostener legitimidad social. La Pampa permite estudiar una economía ilegal que produjo deforestación, delitos conexos y disputa por el control territorial." },
        {
          table: {
            head: ["Aspecto", "Conga", "La Pampa"],
            rows: [
              ["Naturaleza del caso", "Proyecto formal aprobado que no entró en operación.", "Minería ilegal aurífera aluvial."],
              ["Problema central", "Confianza, agua, participación, legitimidad y conflicto.", "Deforestación, delitos conexos y control territorial."],
              ["Respuesta estatal", "Evaluación ambiental, peritaje, diálogo y gestión del conflicto.", "Interdicción, presencia policial y militar, Fiscalía y recuperación territorial."],
              ["Riesgo de simplificación", "Presentarlo como conflicto entre “minería y ambiente” sin matices.", "Reducirlo a un problema ambiental e ignorar el crimen organizado."],
              ["Aprendizaje", "La legalidad no sustituye legitimidad ni acuerdos territoriales.", "El control territorial exige presencia sostenida, justicia y alternativas legales."],
            ],
          },
        },
        { h: "Preguntas de reflexión" },
        {
          list: [
            "¿Qué capacidades institucionales fueron insuficientes en cada caso?",
            "¿Qué tipo de evidencia habría permitido anticipar mejor el conflicto o el daño?",
            "¿Cómo cambia la respuesta cuando el problema es un desacuerdo legítimo frente a un proyecto formal o cuando se trata de una economía criminal?",
            "¿Qué oportunidades tienen los jóvenes para contribuir sin exponerse?",
          ],
        },
      ],
    },
  ],
  tools: {
    lead:
      "El rol juvenil puede ser estratégico en educación, análisis de datos, comunicación responsable, veeduría ciudadana y construcción de propuestas. Ese rol debe ejercerse con protocolos de seguridad y sin sustituir a las autoridades.",
    items: [
      {
        title: "Lista de alertas tempranas",
        intro: "Para cada alerta observable, registrar Sí/No, lugar y fecha, fuente y canal institucional.",
        fields: [
          "Apertura de campamentos no identificados",
          "Ingreso inusual de maquinaria o dragas",
          "Traslado atípico de combustible o insumos",
          "Alteración visible de ríos, quebradas o suelos",
          "Nuevos puntos de compra de oro sin información verificable",
          "Amenazas, extorsión o control territorial",
          "Ofertas laborales engañosas o condiciones abusivas",
          "Ausencia prolongada de coordinación institucional",
        ],
      },
      {
        title: "Diagnóstico territorial",
        ordered: true,
        fields: [
          "¿Qué cambio o actividad preocupa?",
          "¿Qué personas, recursos o lugares podrían verse afectados?",
          "¿Qué hechos verificables sustentan la preocupación?",
          "¿Qué información falta y quién podría proporcionarla?",
          "¿Qué instituciones tienen competencia?",
          "¿Cuál es el canal más seguro?",
          "¿Qué acción preventiva puede realizarse sin exposición?",
        ],
      },
      {
        title: "Plan de acción de 90 días",
        intro: "Una fila por objetivo, con estas columnas:",
        fields: ["Objetivo", "Actividad", "Responsable", "Aliado", "Indicador", "Riesgo y mitigación"],
      },
      {
        title: "Evaluación de aprendizaje",
        intro: "Marcar “logrado” o “en proceso” y anotar la evidencia:",
        fields: [
          "Distingue las tres situaciones jurídicas.",
          "Usa cifras con territorio, periodo y fuente.",
          "Identifica eslabones de la cadena ilegal.",
          "Diferencia Conga de La Pampa.",
          "Propone una acción preventiva segura.",
        ],
      },
      {
        title: "Antes pensaba / ahora comprendo / voy a hacer",
        intro: "Cierre individual en tres columnas.",
        fields: ["Antes pensaba…", "Ahora comprendo…", "Voy a hacer…"],
      },
    ],
  },
  keyMessages: [
    "No toda pequeña minería es ilegal y una inscripción no equivale a formalidad concluida.",
    "La minería formal crea obligaciones exigibles y aporta recursos, pero el desarrollo también depende de la calidad del gasto público.",
    "La minería ilegal funciona como cadena económica y territorial, no solo como punto de extracción.",
    "Conga es un caso de gobernanza de un proyecto formal; La Pampa es un caso de minería ilegal y criminalidad organizada.",
    "Las cifras deben presentar siempre territorio, periodo y fuente.",
    "La prevención juvenil debe basarse en evidencia, coordinación institucional y seguridad.",
  ],
  facilitation: {
    tone: [
      "Evitar presentar a una región, comunidad o actividad de pequeña escala como homogénea.",
      "No atribuir motivaciones sin evidencia.",
      "Distinguir oposición social legítima, incumplimiento administrativo y criminalidad.",
      "Corregir cifras sin fuente o que mezclen ámbitos territoriales.",
      "No usar imágenes de víctimas de trata ni testimonios que permitan identificarlas.",
      "Detener cualquier dinámica que proponga confrontación o investigación directa en campo.",
    ],
    answers: [
      ["Clasificación", "Formal: habilitada y fiscalizable. En vías: zona no prohibida y proceso vigente con requisitos pendientes. Ilegal: actividad al margen de la ley o en zona prohibida."],
      ["Antamina", "Usar las cifras como ejemplo de escala económica y contribución, aclarando que el reporte es de la empresa."],
      ["Conga", "No presentarlo como minería ilegal ni afirmar invasión actual sin fuente oficial específica."],
      ["La Pampa", "Separar daño ambiental, resultados operativos y criminalidad; no sumar cifras de periodos distintos."],
      ["Acción juvenil", "Priorizar formación, datos abiertos, comunicación responsable y coordinación institucional."],
    ],
    quality: [
      "Nombra el hecho y el periodo.",
      "Identifica la fuente.",
      "Distingue dato, interpretación y recomendación.",
      "Reconoce límites o información faltante.",
      "Evita generalizaciones y lenguaje estigmatizante.",
      "Propone una medida realizable y segura.",
    ],
  },
  sourceCriteria: [
    "Autoridad: identificar quién publica y cuál es su competencia sobre el tema.",
    "Fecha: comprobar cuándo se produjo el dato y si continúa vigente.",
    "Ámbito: distinguir si la cifra corresponde a La Pampa, Madre de Dios o al conjunto del país.",
    "Unidad de medida: no confundir hectáreas acumuladas, hectáreas por mes, personas intervenidas o personas detenidas.",
    "Naturaleza del documento: diferenciar norma, reporte empresarial, nota oficial, sentencia, investigación académica y opinión.",
    "Trazabilidad: conservar el enlace, la fecha de consulta y el fragmento exacto utilizado.",
  ],
  sources: [
    {
      group: "Marco normativo y formalización",
      items: [
        { text: "Decreto Legislativo N.° 1105. Disposiciones para la formalización de la pequeña minería y minería artesanal. Ministerio del Ambiente, Plataforma del Estado Peruano." },
        { text: "MINEM. Proceso de Formalización Minera (trámite). Plataforma del Estado Peruano." },
        { text: "MINEM. Portal de Formalización Minera Integral." },
        { text: "MINEM. Ley N.° 32537, que amplía la vigencia del proceso de formalización minera integral hasta diciembre de 2026." },
        { text: "MINEM. Registro Integral de Formalización Minera (REINFO)." },
      ],
    },
    {
      group: "Minería formal y contribución económica",
      items: [
        { text: "Antamina. Reporte de Sostenibilidad 2024." },
        { text: "MINEM. Más de S/ 8,070 millones fueron transferidos a los departamentos por actividad minera en el 2024." },
      ],
    },
    {
      group: "Caso Conga",
      items: [
        { text: "MINEM. Resolución Directoral N.° 351-2010-MEM/AAM." },
        { text: "Defensoría del Pueblo. Pronunciamiento sobre peritaje y diálogo, 9 de abril de 2012.", url: "https://www.defensoria.gob.pe/pronunciamientos/pronunciamiento-09-04-12/" },
        { text: "Defensoría del Pueblo. Discrepancias con Conga y mecanismos de diálogo, 22 de enero de 2014." },
        { text: "MINEM. Informe de monitoreo del proyecto Conga en etapa de suspensión temporal, 2015." },
      ],
    },
    {
      group: "Caso La Pampa",
      items: [
        { text: "MINAM. Interdicción en La Pampa, Madre de Dios, 25 de septiembre de 2013." },
        { text: "MININTER. Operación “Mercurio 2019” permitirá restituir el principio de autoridad en La Pampa, 19 de febrero de 2019." },
        { text: "MININTER. Operación Mercurio 2019 no cesará hasta erradicar minería ilegal, 17 de mayo de 2019." },
        { text: "SINIA-MINAM. MAAP #121: Reducción de minería ilegal en la Amazonía peruana sur." },
        { text: "Poder Judicial. Confirmación de condena por minería ilegal agravada en La Pampa, 19 de septiembre de 2023.", url: "https://www.pj.gob.pe/wps/wcm/connect/ambiente/s_amb_prin/as_noticias/cs_n_condena_mineriailegal_lapampa" },
        { text: "MININTER. PNP asesta nuevo golpe a la minería ilegal con 21 detenidos y arsenal de guerra incautado, 7 de julio de 2026." },
        { text: "Ministerio Público. FEMA solicita prisión preventiva para 21 investigados por minería ilegal en La Pampa, 11 de julio de 2026." },
        { text: "TV Perú. Intervienen a más de 2300 personas durante megaoperativo en La Pampa, 8 de agosto de 2026.", url: "https://www.tvperu.gob.pe/noticias/nacionales/madre-de-dios-intervienen-a-mas-de-2300-personas-durante-megaoperativo-en-la-pampa" },
      ],
    },
  ],
};
