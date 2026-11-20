/**
 * Toolkit técnico de formación · Módulo 5.
 * Fuente: Toolkit PACTO-MI, Parte 2, págs. 73–91 de la numeración continua
 * (versión técnica actualizada noviembre de 2026).
 */
export default {
  howTo: {
    lead:
      "Ya no basta con saber qué ocurre ni con comunicarlo correctamente. Este módulo integra los cuatro anteriores para comprobar la situación jurídica de una operación, reconocer qué documentos importan, ubicar a la autoridad competente y activar una respuesta pública sin exponerse ni acusar sin sustento.",
    rule: {
      title: "Idea transversal",
      body: "La comunidad observa, previene y alerta. La autoridad verifica, investiga, interviene y sanciona.",
    },
    blocksTable: [
      ["01 · ¿Qué tipo de minería estamos viendo?", "Ficha de verificación REINFO–IGAFOM y análisis de dos territorios."],
      ["02 · ¿Qué derechos y reglas se aplican?", "Mapa de documentos, derechos y autorizaciones."],
      ["03 · ¿Dónde comienza y termina el problema?", "Mapa de la cadena de valor y responsabilidades."],
      ["04 · ¿Cómo puede prevenir una comunidad?", "Registro seguro de hechos y riesgos."],
      ["05 · ¿Qué mecanismo y autoridad se activan?", "Alerta o denuncia correctamente dirigida."],
      ["06 · ¿Cómo se sostiene la respuesta?", "Plan comunitario con trazabilidad e indicadores."],
    ],
    blocksHead: ["Pregunta", "Producto"],
  },
  sections: [
    {
      id: "camino",
      title: "El camino recorrido",
      blocks: [
        {
          table: {
            head: ["Módulo", "Qué aprendimos", "Cómo se conecta con el módulo 5"],
            rows: [
              ["01 · Distinguir", "A diferenciar minería formal, informal, en vías de formalización e ilegal; a no confundir escala con condición jurídica; y que una señal no prueba por sí sola ilegalidad.", "Nos dio el lenguaje básico para preguntar qué tipo de actividad estamos observando y qué información falta verificar."],
              ["02 · Comprender la red", "Cómo la minería ilegal puede integrarse con financiamiento, abastecimiento, transporte, comercialización, lavado, trata, extorsión, armas y control territorial.", "El problema no termina en la extracción: la respuesta debe mirar actores, cadenas y delitos conexos."],
              ["03 · Leer el territorio", "Que el mismo mineral puede seguir dos caminos: uno sujeto a obligaciones y controles, y otro sin trazabilidad ni garantías equivalentes.", "Qué se protege, qué impactos deben gestionarse y por qué la legalidad crea responsables y obligaciones exigibles."],
              ["04 · Verificar y comunicar", "A reconocer encuadres, sesgos, omisiones y descontextualización; contrastar fuentes y comunicar sin estigmatizar ni manipular.", "Nos prepara para documentar, redactar alertas y comunicar riesgos sin convertir rumores en acusaciones."],
              ["05 · Actuar con reglas", "Verificar REINFO, IGAFOM, derechos y autorizaciones; identificar competencias; elegir entre alerta, denuncia, solicitud o emergencia; y hacer seguimiento.", "Integra los cuatro módulos en una ruta práctica de prevención comunitaria y activación institucional."],
            ],
          },
        },
        {
          table: {
            caption: "Cómo usar este toolkit: lo que cada categoría es y lo que no garantiza",
            head: ["Categoría", "Qué es", "Lo que no garantiza"],
            rows: [
              ["Productor Minero Artesanal (PMA)", "Categoría legal vinculada con escala, capacidad y características de la actividad.", "Que cualquier labor realizada por esa persona esté autorizada."],
              ["Pequeño Productor Minero (PPM)", "Categoría legal de pequeña escala, con límites y requisitos propios.", "Que cada socavón, planta o ruta de mineral sea formal."],
              ["En formalización", "Persona inscrita en un proceso transitorio para cumplir requisitos.", "Que ya culminó la formalización."],
              ["Formal", "Operación que cuenta con derechos, instrumentos y autorizaciones aplicables.", "Que pueda trabajar fuera del área o condiciones autorizadas."],
              ["Ilegal", "Actividad sin habilitación aplicable o desarrollada en supuestos prohibidos.", "Una etiqueta que pueda asignarse solo por apariencia, rumor o tamaño."],
            ],
          },
        },
        { callout: { tone: "warn", title: "Primera regla", body: "No podemos mirar una bocamina, una retroexcavadora o el tamaño de una operación y concluir automáticamente que es ilegal." } },
      ],
    },
    {
      id: "verificar",
      title: "¿Qué tipo de minería estamos viendo?",
      blocks: [
        {
          table: {
            caption: "Dos territorios, la misma pregunta",
            head: ["Caso", "Situación", "Pregunta que debemos resolver"],
            rows: [
              ["Madre de Dios", "Un operador afirma: “Estoy en el REINFO, entonces toda mi actividad es legal”. La actividad observada utiliza maquinaria para extracción aluvial.", "¿La persona, ubicación, actividad y documentos coinciden con lo registrado?"],
              ["Cajabamba", "En Cachachi y Algamarca conviven personas que se consideran artesanales, operadores en formalización, titulares y denuncias sobre labores no autorizadas.", "¿Podemos calificar a todo el territorio de una sola manera?"],
            ],
          },
        },
        { p: "Respuesta: no. En un mismo territorio pueden coexistir situaciones jurídicas diferentes. La verificación debe realizarse operador por operador, labor por labor y ubicación por ubicación." },
        { h: "Herramienta 1 · Consulta el REINFO" },
        { p: "El Registro Integral de Formalización Minera es un registro público del Ministerio de Energía y Minas que permite buscar personas naturales o jurídicas vinculadas al proceso de formalización, por RUC, nombre, derecho minero o ubicación territorial." },
        { link: { label: "Consulta pública del REINFO (MINEM)", url: "https://pad.minem.gob.pe/REINFO_WEB/Index.aspx" } },
        {
          steps: [
            "Ingresa al portal oficial y registra la fecha de consulta.",
            "Busca por nombre o RUC. Si no cuentas con ese dato, filtra por departamento, provincia o distrito.",
            "Revisa nombre, derecho minero, ubicación y estado de inscripción.",
            "Guarda una captura o exportación para sustentar la verificación.",
            "No concluyas todavía: el REINFO es una pieza de la verificación, no la respuesta completa.",
          ],
        },
        { callout: { tone: "warn", title: "Trampa jurídica", body: "REINFO vigente no significa formalización concluida. Tampoco ampara trabajos fuera de la ubicación, actividad o condiciones declaradas." } },
        { h: "Herramienta 2 · Entiende el IGAFOM" },
        { p: "El Instrumento de Gestión Ambiental para la Formalización de Actividades de Pequeña Minería y Minería Artesanal es, en palabras simples, el instrumento ambiental del proceso de formalización. Tiene un componente correctivo (¿qué impactos ya generé?: medidas para corregir, mitigar, rehabilitar o cerrar impactos existentes) y uno preventivo (¿qué impactos podría generar?: medidas para prevenir, controlar, supervisar y cerrar impactos futuros)." },
        { callout: { tone: "warn", title: "Segunda regla", body: "Presentar un IGAFOM no es lo mismo que tenerlo aprobado. Tenerlo aprobado tampoco sustituye el derecho sobre el área ni la autorización de inicio o reinicio." } },
        {
          table: {
            caption: "La prueba de las seis coincidencias",
            head: ["Pregunta", "Qué debe coincidir"],
            rows: [
              ["1. ¿Quién opera?", "Persona real, RUC y titular de los registros."],
              ["2. ¿Dónde opera?", "Coordenadas observadas y ubicación declarada."],
              ["3. ¿Con qué derecho?", "Concesión propia, cesión o contrato de explotación válido."],
              ["4. ¿Qué actividad realiza?", "Extracción, beneficio, transporte u otra actividad declarada."],
              ["5. ¿Qué instrumentos tiene?", "REINFO, IGAFOM y permisos aplicables."],
              ["6. ¿Está autorizado para iniciar o reiniciar?", "Resolución o acto habilitante correspondiente."],
            ],
          },
        },
        { callout: { tone: "ok", title: "Idea clave", body: "Un documento aislado no define toda la operación. Deben coincidir persona + lugar + derecho + actividad + instrumentos + autorización." } },
      ],
    },
    {
      id: "derechos",
      title: "¿Qué derechos y reglas se aplican?",
      blocks: [
        { example: { title: "Experimento: “Mi terreno, ¿mi oro?”", body: "Una comunidad es propietaria de un terreno donde existen indicios de mineral. ¿La propiedad del suelo permite extraer libremente el mineral? La respuesta es: no automáticamente. Suelo, recurso mineral, concesión, acceso superficial y autorización son situaciones diferentes. La propiedad superficial no equivale al derecho sobre el recurso mineral, y la concesión tampoco autoriza por sí sola a ingresar al terreno o iniciar extracción." } },
        {
          table: {
            caption: "Cinco piezas jurídicas",
            head: ["Pieza", "Qué responde", "Error frecuente"],
            rows: [
              ["Terreno superficial", "¿Quién es propietario o poseedor del suelo?", "Creer que ser dueño del terreno otorga automáticamente el mineral."],
              ["Concesión minera", "¿Quién tiene el derecho minero otorgado por el Estado?", "Creer que permite iniciar trabajos sin otros requisitos."],
              ["Acuerdo o contrato", "¿Existe acceso al terreno o acuerdo con el titular de la concesión?", "Trabajar usando solo acuerdos verbales."],
              ["Instrumento ambiental", "¿Cómo se gestionarán impactos y obligaciones ambientales?", "Confundir presentación con aprobación."],
              ["Autorización de inicio o reinicio", "¿La autoridad habilitó el comienzo de la actividad?", "Suponer que REINFO o IGAFOM reemplazan la autorización."],
            ],
          },
        },
        {
          table: {
            caption: "Normas que debemos reconocer",
            head: ["Norma", "Para qué nos sirve"],
            rows: [
              ["Constitución Política del Perú", "Distingue propiedad, recursos naturales y rol del Estado."],
              ["TUO de la Ley General de Minería, D.S. N.° 014-92-EM", "Base de derechos mineros y régimen de la actividad minera."],
              ["Ley N.° 27651", "Regula y promueve la pequeña minería y la minería artesanal."],
              ["D. Leg. N.° 1100", "Regula la interdicción de la minería ilegal y supuestos prohibidos."],
              ["Normas del proceso de formalización minera integral", "Ordenan el REINFO y los requisitos del proceso transitorio."],
              ["Ley General del Ambiente y Ley de Recursos Hídricos", "Sustentan prevención, responsabilidad ambiental y protección del agua."],
            ],
          },
        },
        { callout: { tone: "info", title: "Equilibrio", body: "La ley reconoce la pequeña minería y la minería artesanal cuando cumplen las condiciones. La categoría artesanal no autoriza a trabajar en cualquier área, con cualquier método o sin control ambiental." } },
        { exercise: { title: "Actividad · Arma el expediente mínimo", body: "Para cada caso, ordena los documentos encontrados: identidad y RUC → derecho o contrato → ubicación → REINFO → IGAFOM → autorización → permisos específicos. Marca qué falta y qué autoridad podría confirmarlo." } },
      ],
    },
    {
      id: "cadena",
      title: "¿Dónde comienza y termina el problema?",
      blocks: [
        { p: "La minería ilegal funciona como una cadena económica y criminal, no solo como un punto de extracción." },
        {
          table: {
            head: ["Eslabón", "Pregunta de análisis", "Riesgo asociado"],
            rows: [
              ["Financiamiento", "¿Quién aporta capital, adelantos o maquinaria?", "Financiamiento ilícito y lavado de activos."],
              ["Insumos", "¿Quién provee combustible, explosivos, mercurio o cianuro?", "Desvío de insumos y abastecimiento ilegal."],
              ["Extracción", "¿Quién opera y en qué coordenadas?", "Afectación ambiental, seguridad y falta de habilitación."],
              ["Procesamiento", "¿Dónde se beneficia el mineral?", "Contaminación y plantas sin trazabilidad."],
              ["Transporte", "¿Qué rutas, placas y horarios se repiten?", "Traslado de mineral e insumos sin control."],
              ["Comercialización", "¿Quién compra y cómo acredita el origen?", "Ingreso de mineral ilegal a cadenas formales."],
              ["Lavado de activos", "¿Cómo se transforma la ganancia en patrimonio formal?", "Empresas fachada, testaferros e inversiones no explicadas."],
            ],
          },
        },
        { callout: { tone: "ok", title: "Idea clave", body: "No solo responde quien extrae. Financiar, abastecer, procesar, transportar o comercializar puede generar responsabilidades diferentes." } },
        {
          table: {
            caption: "Impactos y delitos conexos",
            head: ["Dimensión", "Ejemplos"],
            rows: [
              ["Ambiental", "Deforestación, vertimientos, sedimentos, mercurio, afectación de suelos y agua."],
              ["Social", "Explotación laboral, trata de personas, violencia, afectación de medios de vida."],
              ["Económica", "Evasión, competencia desleal, distorsión de precios y lavado."],
              ["Territorial", "Control de rutas, amenazas, ocupación y disputas por áreas."],
              ["Institucional", "Corrupción, débil fiscalización y fragmentación de competencias."],
            ],
          },
        },
        { h: "¿Por qué es un problema de política pública?" },
        { p: "Una política pública articula objetivos, instituciones, presupuesto, instrumentos, fiscalización, prevención y resultados. La formalización no depende únicamente de la voluntad del operador: también intervienen el acceso a derechos, los costos, la capacidad técnica, la evaluación ambiental, la coordinación interinstitucional y la presencia del Estado. Pregunta de discusión: ¿por qué, después de más de veinte años de normas de formalización, todavía existen brechas entre inscripción, cumplimiento y control territorial?" },
      ],
    },
    {
      id: "niveles",
      title: "¿Qué hacemos cuando algo cambia en nuestro territorio?",
      blocks: [
        { callout: { tone: "info", title: "Idea central", body: "No tenemos que esperar a que el problema sea grande para reaccionar. La prevención comienza cuando aparece la primera señal." } },
        {
          table: {
            caption: "Cuatro niveles de avance",
            head: ["Nivel", "Lo que observamos", "Respuesta principal"],
            rows: [
              ["1 · Señal temprana", "Bocamina, disturbio del terreno, trocha, acopio o maquinaria nueva.", "Observar + registrar + verificar + emitir alerta temprana."],
              ["2 · Actividad en expansión", "Más personas, equipos, insumos, explosiones, tránsito y salida de material.", "Abrir ficha de caso + verificación documental + alerta formal trazable."],
              ["3 · Impacto o riesgo", "Afectación de agua o ambiente, amenazas, violencia, explotación o conflicto.", "Proteger + activar autoridades especializadas + seguimiento coordinado."],
              ["4 · Escala territorial", "Red de labores, rutas, plantas, compradores, insumos y delitos conexos.", "Respuesta articulada del Estado + análisis de cadena + control territorial."],
            ],
          },
        },
        { callout: { tone: "warn", title: "Advertencia", body: "No hay que esperar al nivel 4 para actuar. Cada nivel exige una respuesta; lo que cambia es la intensidad, la formalidad y el número de instituciones que deben intervenir." } },
        { h: "Nivel 1 · Aparece una bocamina o un disturbio nuevo" },
        {
          table: {
            head: ["Paso", "Qué hacer exactamente"],
            rows: [
              ["1. Observar", "Definir qué apareció, desde cuándo y dónde. No ingresar ni acercarse para obtener una mejor imagen."],
              ["2. Registrar", "Anotar fecha, hora, referencia territorial y características visibles; tomar fotografías solo desde un lugar público y seguro."],
              ["3. No confrontar", "No interrogar trabajadores, no bloquear accesos, no ingresar a la labor y no publicar acusaciones."],
              ["4. Informar", "Comunicar al responsable comunal o canal interno acordado y conservar un registro de la comunicación."],
              ["5. Verificar", "Revisar catastro o derecho minero disponible, REINFO y cualquier información pública sobre el área."],
              ["6. Alertar", "Solicitar verificación a la autoridad minera regional y activar el canal ambiental si existe riesgo para agua, suelo o vegetación."],
            ],
          },
        },
        { callout: { tone: "ok", title: "Mensaje para recordar", body: "Una bocamina nueva no prueba por sí sola ilegalidad, pero sí es suficiente para observar, registrar, verificar y alertar." } },
        { h: "Nivel 2 · La actividad empieza a crecer" },
        { p: "Aparecen más trabajadores, maquinaria, combustible, perforaciones o explosiones, vehículos recurrentes, acopio y movimiento de material: un patrón de actividad que exige una verificación más completa y una alerta formal. Verificar identidad (¿nombre, razón social o RUC verificable?), ubicación (¿coinciden las coordenadas?), derecho (¿concesión, cesión o contrato?), REINFO (¿existe y cuál es su estado?), IGAFOM (¿presentado, evaluado o aprobado, y para qué?), autorización (¿inicio o reinicio y permisos?) y cadena (¿quién lleva insumos, retira, procesa o compra?)." },
        { callout: { tone: "info", title: "Alerta formal", body: "La comunicación debe contener hecho + ubicación + evolución + evidencia + riesgo + pedido concreto, y presentarse por un canal que entregue código, cargo o expediente." } },
        { h: "Nivel 3 · Ya existen impactos, amenazas o riesgos" },
        { p: "La prioridad deja de ser solo conocer la situación documental y pasa a proteger personas y activar autoridades especializadas." },
        {
          table: {
            head: ["Situación", "Ruta inicial", "Prioridad"],
            rows: [
              ["Posible actividad no autorizada", "Autoridad minera competente + Ministerio Público o Policía según los hechos.", "Verificación e investigación."],
              ["Afectación ambiental", "OEFA (Sinada) o entidad de fiscalización ambiental competente.", "Evaluación, fiscalización y derivación."],
              ["Afectación del agua", "Autoridad Nacional del Agua.", "Inspección y evaluación de la fuente afectada."],
              ["Amenazas o violencia", "Policía Nacional + Ministerio Público.", "Seguridad inmediata y protección."],
              ["Trata o explotación", "Policía y fiscalía especializadas.", "Protección de personas e investigación."],
              ["Explosivos o insumos peligrosos", "Policía y autoridad competente según el insumo.", "Control y prevención de riesgo."],
            ],
          },
        },
        { h: "Nivel 4 · El problema alcanza escala territorial" },
        { p: "Con múltiples labores, rutas, plantas, compradores, insumos, conflictos e impactos, el problema se convierte en uno de política pública, cadena económica y control territorial. Preguntas: ¿cuántas operaciones existen?, ¿qué situaciones jurídicas coexisten?, ¿cómo se sostiene la actividad?, ¿dónde termina el mineral?, ¿qué impactos se acumulan?, ¿qué ha hecho el Estado?, ¿la actividad se desplaza tras las intervenciones?" },
        { callout: { tone: "info", title: "Respuesta necesaria", body: "Articulación entre autoridad minera, gobierno regional, municipalidades, Fiscalía, Policía, OEFA, ANA y otras entidades según los riesgos. La comunidad aporta alertas, información territorial segura y seguimiento; no sustituye las funciones del Estado." } },
        { exercise: { title: "Actividad · ¿En qué nivel estamos?", body: "Cada equipo recibe un caso de Madre de Dios o Cajamarca y completa: nivel identificado, hechos observables, riesgo prioritario, verificación pendiente, acción inmediata, entidad y mecanismo, y código o hito de seguimiento." } },
      ],
    },
    {
      id: "mecanismos",
      title: "¿Qué mecanismo y autoridad se activan?",
      blocks: [
        {
          table: {
            caption: "No todo se llama denuncia",
            head: ["Mecanismo", "¿Cuándo corresponde?", "¿Qué busca?"],
            rows: [
              ["Emergencia", "Existe peligro inmediato para la vida o la integridad.", "Respuesta urgente."],
              ["Alerta preventiva", "Hay señales tempranas que requieren verificación.", "Activación o evaluación institucional."],
              ["Denuncia ambiental", "Existe posible afectación o incumplimiento ambiental.", "Registro, fiscalización o derivación."],
              ["Denuncia penal", "Los hechos podrían constituir delito.", "Investigación fiscal y policial."],
              ["Solicitud de información", "Se necesitan permisos, actos o datos públicos.", "Acceso a documentos existentes."],
              ["Queja administrativa", "Se cuestiona demora, atención o conducta en un trámite.", "Revisión del servicio o actuación."],
            ],
          },
        },
        {
          table: {
            caption: "¿Quién debe actuar?",
            head: ["Situación", "Ruta inicial", "¿Qué pedir?"],
            rows: [
              ["Posible minería ilegal o delito ambiental", "Ministerio Público y Policía Nacional; fiscalía especializada según el caso.", "Verificación e investigación."],
              ["Afectación ambiental", "OEFA (Sinada) o entidad de fiscalización competente.", "Evaluación, derivación y fiscalización."],
              ["Pequeña minería y minería artesanal", "MINEM o autoridad regional competente.", "Verificación de registro, instrumentos y autorizaciones."],
              ["Afectación del agua", "Autoridad Nacional del Agua.", "Inspección y evaluación de afectación."],
              ["Trata o explotación", "Policía, Ministerio Público y canales especializados.", "Protección e investigación."],
              ["Permisos o información local", "Gobierno regional o municipalidad según función.", "Copia, informe o respuesta formal."],
            ],
          },
        },
        { h: "Ruta ambiental: Sinada" },
        { p: "El Servicio Nacional de Denuncias Ambientales del OEFA permite informar presuntos incumplimientos ambientales. La denuncia debe describir hechos, fecha, lugar y circunstancias, y puede adjuntar fotografías, videos, documentos, mapas o audios. Si el asunto no es competencia directa del OEFA, puede derivarse a la entidad de fiscalización ambiental competente." },
        { link: { label: "Servicio Nacional de Denuncias Ambientales (gob.pe)", url: "https://www.gob.pe/913-servicio-nacional-de-denuncia-ambiental" } },
        {
          table: {
            caption: "Plantilla de alerta útil",
            head: ["Campo", "Contenido"],
            rows: [
              ["Asunto", "Alerta sobre [hecho observable] en [lugar]."],
              ["Fecha y hora", "Momento de observación y de comunicación."],
              ["Descripción", "Qué ocurrió, sin adjetivos ni conclusiones no verificadas."],
              ["Riesgo", "Por qué requiere atención."],
              ["Evidencia", "Archivos, referencias o testigos disponibles."],
              ["Solicitud", "Verificación, fiscalización, protección, derivación o información."],
              ["Contacto seguro", "Datos y reserva de identidad cuando corresponda."],
            ],
          },
        },
        { exercise: { title: "Caso aplicado · Aparecen máquinas aguas arriba", body: "El grupo decide: qué sabe, qué falta verificar, qué riesgo existe, qué evidencia puede obtener sin exponerse, qué autoridad tiene competencia y qué mecanismo corresponde." } },
      ],
    },
    {
      id: "seguimiento",
      title: "¿Cómo se sostiene la respuesta?",
      blocks: [
        { p: "Convertir una comunicación aislada en trazabilidad, coordinación y aprendizaje comunitario." },
        {
          table: {
            caption: "Seguimiento mínimo",
            head: ["Registro", "Contenido"],
            rows: [
              ["Fecha de envío", "Día y hora."],
              ["Entidad y canal", "Institución, oficina, plataforma, correo o mesa de partes."],
              ["Código o cargo", "Número asignado."],
              ["Responsable", "Área o persona institucional que recibió."],
              ["Derivación", "Entidad receptora y fecha."],
              ["Plazo o hito", "Fecha de consulta o compromiso."],
              ["Respuesta", "Acción realizada o información solicitada."],
              ["Siguiente paso", "Ampliar, reiterar, escalar o cerrar."],
            ],
          },
        },
        { callout: { tone: "info", title: "Trazabilidad", body: "Sin código, cargo o expediente es difícil demostrar qué se comunicó, cuándo y a quién. Guardar el registro fortalece la exigencia de respuesta." } },
        { h: "Simulación: sala de decisiones" },
        { p: "Roles: comunidad, municipalidad, autoridad regional, OEFA, ANA, Fiscalía, Policía, organización juvenil y medio local. Producto final: un Plan Comunitario de Prevención y Activación Institucional." },
        {
          steps: [
            "Separar hechos, rumores y riesgos.",
            "Consultar el REINFO y revisar los documentos disponibles.",
            "Definir protección y evidencia mínima.",
            "Elegir institución y mecanismo.",
            "Redactar y presentar la alerta.",
            "Responder como autoridad, derivar y registrar seguimiento.",
          ],
        },
        {
          table: {
            caption: "Criterios de evaluación",
            head: ["Criterio", "Logrado", "En proceso"],
            rows: [
              ["Precisión jurídica", "Distingue categoría, registro, instrumento y autorización.", "Usa conceptos como sinónimos."],
              ["Evidencia", "Separa hechos de interpretaciones y conserva originales.", "Presenta información incompleta o editada."],
              ["Competencia", "Dirige el caso a la institución y canal correctos.", "La ruta es parcial o genérica."],
              ["Protección", "Evita exposición y prevé reserva.", "Reconoce algunos riesgos, pero no los controla."],
              ["Seguimiento", "Registra código, hitos y siguiente paso.", "Solo conserva el envío."],
            ],
          },
        },
        { callout: { tone: "ok", title: "Para cerrar", body: "Conocer la norma no basta. Hay que saber verificar, actuar sin exponerse y exigir una respuesta del Estado." } },
      ],
    },
  ],
  tools: {
    items: [
      {
        title: "Ficha de consulta REINFO",
        fields: ["Nombre o razón social", "RUC", "Derecho minero", "Departamento / provincia / distrito", "Estado REINFO", "Fecha de consulta", "Coincidencia con el lugar observado"],
      },
      {
        title: "Ficha rápida de alerta temprana",
        fields: ["Fecha y hora de detección", "Lugar o referencia", "Cambio observado", "Fotografía o archivo original", "Riesgo visible", "Persona que recibió el aviso interno", "Entidad a la que se solicita verificación", "Código o cargo"],
      },
      {
        title: "Plan Comunitario de Prevención y Activación Institucional",
        fields: ["Riesgo priorizado", "Territorio y población expuesta", "Señales tempranas", "Canal seguro interno", "Verificación documental", "Evidencia mínima", "Institución competente", "Mecanismo de activación", "Medidas de protección", "Responsable de seguimiento", "Indicador de resultado"],
      },
    ],
  },
  glossary: [
    ["Concesión minera", "Derecho otorgado por el Estado sobre sustancias minerales en un área determinada; no autoriza por sí solo el inicio de explotación."],
    ["REINFO", "Registro público de personas comprendidas en el proceso de formalización minera integral."],
    ["IGAFOM", "Instrumento ambiental del proceso de formalización, con componentes correctivo y preventivo."],
    ["Contrato de explotación", "Acuerdo que puede permitir a un operador trabajar sobre un derecho minero bajo condiciones pactadas."],
    ["Autorización de inicio o reinicio", "Acto de la autoridad que habilita el comienzo o la reanudación de la actividad correspondiente."],
    ["Sinada", "Servicio Nacional de Denuncias Ambientales del OEFA."],
    ["Competencia", "Facultad legal de una entidad para intervenir."],
    ["Trazabilidad", "Capacidad de seguir el origen, traslado, procesamiento y destino del mineral, y de registrar la actuación institucional."],
  ],
  keyMessages: [
    "La comunidad observa, previene y alerta; la autoridad verifica, investiga, interviene y sanciona.",
    "REINFO vigente no significa formalización concluida, y presentar un IGAFOM no es tenerlo aprobado.",
    "Deben coincidir persona, lugar, derecho, actividad, instrumentos y autorización.",
    "No hay que esperar al nivel 4: la prevención comienza con la primera señal.",
    "Sin código, cargo o expediente no hay seguimiento posible.",
  ],
  updateNote: "Antes de cada taller, verificar cambios normativos, estados registrales y canales oficiales.",
  sources: [
    {
      group: "Fuentes y bibliografía",
      items: [
        { text: "Ministerio de Energía y Minas. Consulta pública del REINFO.", url: "https://pad.minem.gob.pe/REINFO_WEB/Index.aspx" },
        { text: "Organismo de Evaluación y Fiscalización Ambiental. Servicio Nacional de Denuncias Ambientales.", url: "https://www.gob.pe/913-servicio-nacional-de-denuncia-ambiental" },
        { text: "TUO de la Ley General de Minería, D.S. N.° 014-92-EM." },
        { text: "Ley N.° 27651, Ley de Formalización y Promoción de la Pequeña Minería y la Minería Artesanal." },
        { text: "D. Leg. N.° 1100 y normas del proceso de formalización minera integral." },
        { text: "Estrategia Nacional para la Reducción e Interdicción de la Minería Ilegal en el Perú al 2030." },
        { text: "Ley General del Ambiente y Ley de Recursos Hídricos." },
      ],
    },
  ],
};
