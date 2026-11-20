/**
 * Toolkit técnico de formación · Módulo 2.
 * Fuente: Toolkit PACTO-MI, Parte 1, págs. 24–45 (versión técnica actualizada octubre de 2026).
 * Los casos distinguen hechos confirmados, personas investigadas e hipótesis fiscales,
 * tal como lo exige la regla de lectura del propio módulo.
 */
export default {
  howTo: {
    lead:
      "Este módulo continúa el análisis del primero. El foco ya no está únicamente en distinguir minería formal, informal e ilegal, sino en comprender qué ocurre cuando la extracción ilegal se integra con financiación, logística, violencia y mecanismos para ocultar el origen del dinero o del mineral.",
    rule: {
      title: "Regla de lectura",
      tone: "warn",
      body: "Distinguir siempre entre hechos confirmados por una autoridad, personas investigadas, hipótesis fiscales y sentencias firmes. La existencia de minería informal o de comercio de minerales no prueba por sí sola la participación en crimen organizado.",
    },
    blocksTable: [
      ["Conceptos", "¿Cuándo una actividad ilegal pasa a formar parte de una estructura criminal organizada?"],
      ["Cadena económica", "¿Qué eslabones permiten extraer, mover, vender y ocultar el origen del oro?"],
      ["La Rinconada", "¿Cómo convergen minería, trata, armas, explosivos y control de bocaminas?"],
      ["Pataz", "¿Cómo la renta del oro alimenta disputa territorial, secuestro y homicidio?"],
      ["Trujillo", "¿Cómo una red criminal puede proyectar violencia hacia espacios urbanos y comerciales?"],
      ["Respuesta", "¿Qué instituciones intervienen y qué puede hacer la ciudadanía sin exponerse?"],
    ],
  },
  sections: [
    {
      id: "economia-criminal",
      title: "De la extracción ilegal a la economía criminal",
      blocks: [
        { p: "La extracción ilegal es el punto de inicio, pero no explica por sí sola todo el fenómeno. Para obtener ingresos de manera continua, una operación necesita dinero, personas, equipos, combustible, insumos, rutas, compradores y mecanismos para mover o vender el mineral. Cuando esas funciones se conectan y se repiten, aparece una cadena económica ilegal." },
        { example: { title: "Ejemplo sencillo", body: "Extraer oro es solo una parte del negocio. Si alguien financia una excavadora, otra persona consigue combustible, otra controla el acceso, otra transporta el mineral y otra lo compra sin verificar su origen, ya existe una cadena de actividades conectadas. La responsabilidad de cada persona debe analizarse según lo que hizo, sabía y podía conocer." } },
        { h: "¿Qué cambia cuando aparece la organización?" },
        { p: "Una actividad ilegal puede ser ocasional o limitada. El problema se vuelve más complejo cuando varias personas se reparten funciones, coordinan decisiones y mantienen el negocio en el tiempo. La organización permite repetir la operación, reemplazar participantes, proteger ganancias y reaccionar frente a los controles del Estado." },
        {
          table: {
            head: ["De una extracción aislada…", "…a una economía criminal"],
            rows: [
              ["Una persona o grupo extrae mineral sin cumplir la ley.", "Diferentes actores financian, abastecen, extraen, transportan, venden y protegen el negocio."],
              ["El objetivo inmediato es obtener mineral.", "El objetivo es mantener y ampliar una fuente continua de ingresos ilegales."],
              ["La actividad puede depender de un lugar y de pocos participantes.", "La red puede operar en varios lugares, usar rutas y conectarse con mercados urbanos o internacionales."],
              ["El riesgo principal parece ambiental o administrativo.", "Aparecen riesgos financieros, laborales, sociales y de seguridad: corrupción, extorsión, trata, armas o lavado."],
              ["El dinero se usa directamente.", "Las ganancias pueden reinvertirse, convertirse en bienes o mezclarse con ingresos legales."],
            ],
          },
        },
        {
          table: {
            caption: "Cinco capacidades que sostienen el negocio",
            head: ["Capacidad", "En qué consiste", "Por qué importa"],
            rows: [
              ["Financiar", "Conseguir capital para maquinaria, trabajadores, combustible, explosivos y pagos.", "Sin dinero inicial, la operación no puede comenzar ni mantenerse."],
              ["Abastecer", "Asegurar insumos, repuestos, equipos y acceso a servicios.", "Permite que la extracción continúe incluso después de una intervención."],
              ["Mover y vender", "Transportar, acopiar, procesar y encontrar compradores.", "Convierte el mineral en dinero y conecta la zona de extracción con el mercado."],
              ["Proteger", "Vigilar accesos, intimidar, corromper o utilizar violencia.", "Reduce controles, expulsa competidores y asegura el dominio de rutas u operaciones."],
              ["Ocultar y reinvertir", "Disfrazar el origen del mineral o del dinero y adquirir bienes o nuevas operaciones.", "Permite disfrutar las ganancias y financiar la expansión del negocio."],
            ],
          },
        },
        { h: "La renta ilegal transforma relaciones y territorios" },
        { p: "La renta es el ingreso que produce el negocio. Cuando una actividad genera ganancias elevadas, esas ganancias pueden financiar más maquinaria, comprar información, pagar protección, atraer trabajadores o intermediarios y sostener amenazas. El dinero no solo remunera la extracción: también puede convertirse en capacidad para controlar personas, rutas, bocaminas, comercios o decisiones." },
        { p: "El control territorial no significa necesariamente dominar toda una provincia. Puede comenzar con el control de un acceso, una bocamina, una vía de transporte, un campamento, una planta o un punto de compra. Controlar un punto estratégico permite decidir quién entra, quién trabaja, quién vende y quién recibe una parte de la renta." },
        { flow: { title: "Cadena de transformación", steps: ["Extracción ilegal", "Ingresos ilícitos", "Financiación y expansión", "Protección o violencia", "Control de puntos estratégicos", "Mayor capacidad para extraer, vender y ocultar ganancias"] } },
        { callout: { tone: "warn", title: "No todo actor de la cadena es automáticamente criminal organizado", body: "Una persona puede participar en una actividad económica sin conocer todo el circuito. No es correcto afirmar que cada trabajador, transportista, comerciante o pequeño minero pertenece a una organización criminal. Para establecer responsabilidad se debe analizar la conducta concreta, el conocimiento, la coordinación con otros actores y la evidencia disponible." } },
        { callout: { tone: "ok", title: "Idea central", body: "La economía criminal aparece cuando la actividad ilícita funciona como negocio: articula funciones, genera rentas, se reproduce, protege sus operaciones y busca ocultar o aprovechar sus ganancias." } },
      ],
    },
    {
      id: "conceptos",
      title: "Conceptos fundamentales",
      blocks: [
        { h: "Crimen organizado" },
        { p: "El crimen organizado no significa simplemente que varias personas cometan un delito juntas. Se refiere a una forma de coordinación en la que un grupo reparte tareas o funciones, actúa de manera concertada y busca cometer delitos graves para obtener beneficios o controlar una actividad ilegal. La Ley N.° 30077 establece reglas para investigar, juzgar y sancionar delitos cometidos por organizaciones criminales. La normativa ha sido modificada en los últimos años, por lo que la calificación aplicable corresponde a las autoridades de justicia en cada caso." },
        {
          table: {
            caption: "Elementos que ayudan a reconocerlo",
            head: ["Elemento", "En lenguaje sencillo", "Ejemplo aplicado"],
            rows: [
              ["Pluralidad de personas", "Participan varias personas, no un solo actor.", "Unos financian, otros controlan accesos y otros comercializan."],
              ["Reparto de funciones", "Cada integrante puede cumplir una tarea distinta.", "Conseguir armas, transportar mineral o administrar pagos."],
              ["Coordinación", "Las acciones no son independientes; responden a acuerdos o decisiones conectadas.", "El transporte se programa según la extracción y la vigilancia de la ruta."],
              ["Continuidad", "La estructura busca funcionar de forma estable o repetida.", "La operación vuelve a activarse, reemplaza equipos o cambia de ruta."],
              ["Beneficio o control", "El propósito es obtener ganancias o controlar una cadena o mercado ilegal.", "Apropiarse de mineral, cobrar cupos o controlar una bocamina."],
            ],
          },
        },
        { callout: { tone: "warn", title: "No confundir", body: "Una multitud, una protesta, una comunidad, una asociación o un grupo de trabajadores no constituyen por sí mismos una organización criminal. Se requiere evidencia sobre coordinación, funciones y finalidad delictiva." } },
        {
          table: {
            caption: "Diferencias útiles",
            head: ["Situación", "Qué la caracteriza"],
            rows: [
              ["Delito individual", "Una persona realiza una conducta delictiva por cuenta propia."],
              ["Participación conjunta", "Varias personas intervienen en un hecho, pero ello no demuestra por sí solo una estructura estable."],
              ["Banda", "Grupo que puede actuar en delitos concretos con menor complejidad organizativa."],
              ["Organización criminal", "Estructura coordinada, con reparto de roles y continuidad para cometer delitos graves y obtener beneficio o control."],
            ],
          },
        },
        { source: "Fuente normativa: Ley N.° 30077 y modificaciones aplicables; la determinación jurídica corresponde a la Fiscalía y al Poder Judicial." },
        { h: "Economía criminal" },
        { p: "Una economía criminal es un sistema de generación de ingresos basado en actividades ilícitas. No describe solo un delito, sino un mercado: hay bienes o servicios, oferta, demanda, capital, trabajadores, intermediarios, rutas, compradores y mecanismos de protección. La diferencia es que la actividad principal, o una parte decisiva del circuito, opera al margen de la ley." },
        { p: "Se usa la palabra “economía” porque el fenómeno produce y distribuye dinero y responde a incentivos: si hay alta rentabilidad, compradores y bajo riesgo percibido, más actores intentan participar. Se usa “criminal” porque los ingresos proceden de conductas ilícitas o porque la cadena utiliza delitos para sostenerse: violencia para proteger rutas o cobrar cupos, corrupción, falsificación, trata, tráfico de insumos o lavado de activos." },
        {
          table: {
            head: ["Componente", "Pregunta para comprenderlo"],
            rows: [
              ["Producto o renta", "¿Qué bien o ingreso genera el negocio?"],
              ["Actores", "¿Quién financia, produce, transporta, compra y protege?"],
              ["Logística", "¿Qué equipos, insumos, rutas y servicios necesita?"],
              ["Mercado", "¿Quién compra y cómo se fija o paga el valor?"],
              ["Protección", "¿Cómo evade controles o asegura el territorio?"],
              ["Ganancias", "¿Cómo se usan, reinvierten u ocultan los ingresos?"],
            ],
          },
        },
        {
          table: {
            caption: "Delitos conexos",
            head: ["Concepto", "Qué describe", "Posible conexión con minería ilegal"],
            rows: [
              ["Lavado de activos", "Conversión o incorporación de recursos de origen ilícito para darles apariencia lícita.", "Compra y venta de oro, empresas o activos utilizados para ocultar el origen."],
              ["Extorsión", "Obtención de pagos o ventajas mediante amenaza o violencia.", "Cobro de cupos a operaciones, transportistas, comercios o trabajadores."],
              ["Secuestro", "Privación ilegítima de la libertad.", "Retención de trabajadores, control de bocaminas o exigencia de dinero."],
              ["Trata de personas", "Captación, traslado o acogida con fines de explotación.", "Falsas ofertas laborales, explotación sexual o laboral en enclaves."],
              ["Tráfico de armas y explosivos", "Tenencia, traslado o comercio ilícito de material controlado.", "Protección armada, toma de bocaminas y extracción."],
              ["Corrupción", "Uso indebido de una función pública para obtener ventajas.", "Facilitación, omisión de control o protección de cadenas ilegales."],
            ],
          },
        },
      ],
    },
    {
      id: "lavado",
      title: "Lavado de activos y trazabilidad del oro",
      blocks: [
        { p: "El lavado de activos es el proceso de disfrazar u ocultar el origen ilícito de dinero, bienes o ganancias, para que parezcan proceder de una actividad legal y puedan utilizarse sin revelar su verdadero origen. La SBS explica que puede comprender actos de conversión, transferencia, ocultamiento, tenencia y transporte de bienes de origen ilícito, y que es un delito autónomo." },
        { source: "Fuente conceptual: SBS, Nociones básicas del Sistema Nacional contra LA/FT." },
        { example: { title: "Ejemplo cotidiano", body: "Si una persona obtiene dinero de una actividad ilegal y compra bienes a nombre de otra persona, mezcla esos ingresos con ventas de un negocio o presenta documentos para hacer parecer legítimo el origen del oro, puede estar intentando ocultar la procedencia real de la ganancia. Es un ejemplo pedagógico: la responsabilidad penal requiere investigación y prueba." } },
        {
          table: {
            caption: "¿Cómo puede aparecer en la cadena del oro?",
            head: ["Momento", "Qué puede ocurrir", "Qué se intenta ocultar"],
            rows: [
              ["Origen", "El mineral procede de un lugar o actividad no declarada.", "Dónde, quién y bajo qué condiciones produjo el oro."],
              ["Acopio y mezcla", "Se reúne mineral de distintos vendedores o zonas.", "La relación entre el producto final y su fuente original."],
              ["Documentación", "Se presentan datos o sustentos que no reflejan la producción real.", "La diferencia entre lo declarado y lo efectivamente extraído o vendido."],
              ["Venta o exportación", "El oro circula con documentos aparentemente regulares.", "Que el producto provino de una actividad ilícita."],
              ["Uso de ganancias", "El dinero compra inmuebles, vehículos, empresas u otros activos.", "Que esos bienes fueron adquiridos con ganancias ilícitas."],
              ["Testaferros", "Bienes u operaciones se colocan a nombre de terceros.", "Quién controla realmente el dinero o el patrimonio."],
            ],
          },
        },
        {
          table: {
            caption: "Tres movimientos que ayudan a entenderlo",
            head: ["Movimiento", "Explicación sencilla"],
            rows: [
              ["Introducir o convertir", "Transformar dinero o bienes ilícitos en otros activos u operaciones."],
              ["Mover u ocultar", "Realizar transferencias, compras, ventas o cambios de titular para dificultar el seguimiento."],
              ["Usar o integrar", "Reincorporar las ganancias a la economía con apariencia de legalidad."],
            ],
          },
        },
        { callout: { tone: "info", title: "Importante", body: "Estos tres movimientos sirven para comprender el fenómeno, pero los casos reales no siempre siguen una secuencia ordenada. Una misma operación puede cumplir varias funciones." } },
        { h: "Operación inusual, operación sospechosa, UIF y sujetos obligados" },
        { p: "Una operación inusual se aparta del comportamiento económico esperado de una persona o empresa y requiere revisión. Una operación sospechosa es aquella que, después del análisis correspondiente, presenta indicios que justifican su reporte a la UIF. Un reporte no demuestra culpabilidad ni es una sentencia: forma parte de los mecanismos de detección y análisis." },
        { p: "La Unidad de Inteligencia Financiera recibe, analiza y transmite información para identificar posibles casos de lavado de activos y financiamiento del terrorismo. Los sujetos obligados son personas o empresas de determinados sectores que deben aplicar controles, conocer a sus clientes y reportar operaciones sospechosas. La SBS señala que las empresas mineras y las comercializadoras de metales preciosos deben implementar sistemas de prevención (boletín de abril de 2025)." },
        { h: "Dimensión del problema" },
        {
          stats: [
            { value: "US$ 6.258 millones", label: "involucrados en Informes de Inteligencia Financiera con posible delito precedente de minería ilegal, entre enero de 2015 y marzo de 2025. Según la SBS, fue el principal delito precedente por monto en esos informes.", source: "SBS" },
            { value: "5,31 kg", label: "barra de oro valorizada en más de US$ 600.000 incautada en marzo de 2026; según la Fiscalía provenía de minería ilegal en Puno y se destinaba a exportación a India. Dos personas y una empresa se encontraban bajo investigación.", source: "Ministerio Público, 17 mar. 2026" },
          ],
        },
        {
          table: {
            caption: "Riesgos de trazabilidad: cómo ingresa el oro ilegal a circuitos económicos",
            head: ["Etapa", "Riesgo de pérdida de trazabilidad", "Pregunta de control"],
            rows: [
              ["Extracción", "Ubicación o volumen no declarado.", "¿Dónde y cuánto se produjo?"],
              ["Acopio", "Mezcla de mineral de distintos orígenes.", "¿Quién vende y qué sustento presenta?"],
              ["Procesamiento", "Transformación que dificulta vincular origen y producto.", "¿La planta registra proveedor y volumen?"],
              ["Transporte", "Documentación que no coincide con carga o ruta.", "¿El traslado corresponde a una operación acreditada?"],
              ["Comercialización", "Empresa sin capacidad económica compatible.", "¿El perfil del vendedor coincide con las operaciones?"],
              ["Exportación", "Producto con papeles, pero origen ilícito no detectado.", "¿La cadena documental permite llegar a la fuente?"],
            ],
          },
        },
        { p: "El oro tiene alto valor, pequeño volumen y facilidad de transformación. Estas características dificultan identificar su origen cuando se mezcla, se procesa o se exporta con documentos que no reflejan la producción real. La UIF ha señalado como dificultad que productos de origen ilícito pueden salir del país con documentación aparentemente regular, y como señal de alerta el uso excesivo de efectivo para adquirir inmuebles y vehículos mediante testaferros (SBS-UIF, 31 de octubre de 2025)." },
      ],
    },
    {
      id: "seis-claves",
      title: "Claves para comprender una economía criminal interconectada",
      blocks: [
        { callout: { tone: "ok", title: "Idea articuladora", body: "La minería ilegal debe analizarse como una economía criminal interconectada. No es solamente una extracción sin autorización: alrededor del mineral pueden aparecer redes de financiación, abastecimiento, protección armada, comercialización, corrupción y lavado de activos." } },
        {
          cards: [
            { title: "Una actividad que impulsa otros delitos", body: "La minería ilegal puede actuar como una “locomotora” de otras actividades delictivas: su renta puede activar o sostener invasiones, extorsiones, sicariato, asaltos, tráfico de insumos, corrupción y lavado de activos. En un foro especializado de PERUMIN 37 se señaló que podían identificarse por lo menos 21 tipos penales asociados al fenómeno." },
            { title: "Una red criminal no es necesariamente una sola organización", body: "Una economía ilegal puede reunir actores especializados que financian, proveen insumos, extraen, transportan, acopian, compran, protegen rutas o facilitan la inserción del mineral y del dinero. Eso no significa que todos pertenezcan a una misma organización: la relación penal debe probarse caso por caso." },
            { title: "Control territorial con finalidad económica", body: "El control territorial puede constituir una ocupación sistemática con fines económicos, sostenida por armas, extracción de oro y circulación de dinero ilícito. Controlar una bocamina, una ruta o un centro de procesamiento significa controlar una parte del negocio." },
            { title: "Seguir el dinero y la logística", body: "La respuesta no debe concentrarse solo en capturar operadores visibles o aumentar presencia policial. Hay que reconstruir los flujos financieros, el abastecimiento de armas e insumos, el destino del oro y el uso de las ganancias, para atacar la capacidad de reproducción de la red." },
            { title: "Los pequeños mineros también pueden ser víctimas", body: "Es fundamental diferenciar minería artesanal y minería ilegal. Los pequeños mineros pueden ser los primeros afectados por el crimen organizado vinculado a la minería ilegal, porque cuentan con menos recursos para protegerse frente a extorsiones, invasiones o captura de sus operaciones (PERUMIN 37, 26 de septiembre de 2025)." },
          ],
        },
        {
          table: {
            caption: "Las cuatro preguntas de inteligencia",
            head: ["Pregunta", "Qué busca identificar"],
            rows: [
              ["¿Quiénes integran la red?", "Roles, vínculos y niveles de decisión, sin asumir que todos cumplen la misma función."],
              ["¿Cómo acceden a armas, explosivos e insumos?", "Proveedores, desvíos, rutas y mecanismos de abastecimiento."],
              ["¿A dónde va el oro?", "Acopio, procesamiento, transporte, compradores y eventual salida transfronteriza."],
              ["¿Qué ocurre con el dinero?", "Pagos, reinversión, adquisición de activos, testaferros y posibles operaciones de lavado."],
            ],
          },
        },
        {
          table: {
            caption: "Cadena criminal vinculada al oro",
            head: ["Eslabón", "Función económica", "Riesgos delictivos"],
            rows: [
              ["Financiación", "Capital para maquinaria, personal, explosivos e insumos.", "Lavado, usura, financiación de organización criminal."],
              ["Abastecimiento", "Compra y traslado de combustible, equipos y explosivos.", "Desvío de bienes fiscalizados y corrupción."],
              ["Extracción", "Apropiación y recuperación del mineral.", "Minería ilegal, invasión, explotación laboral."],
              ["Control armado", "Protección de bocaminas, campamentos y rutas.", "Extorsión, secuestro, homicidio, armas."],
              ["Procesamiento", "Concentración o transformación del mineral.", "Contaminación y pérdida de trazabilidad."],
              ["Transporte y acopio", "Movimiento y mezcla de material.", "Contrabando, falsedad documental, corrupción."],
              ["Comercialización", "Compra, venta o exportación.", "Lavado de activos y ocultamiento de origen."],
              ["Reinversión", "Adquisición de bienes o nuevas operaciones.", "Testaferros y expansión de la red."],
            ],
          },
        },
      ],
    },
    {
      id: "la-rinconada",
      title: "Caso de estudio: La Rinconada, Puno",
      blocks: [
        { h: "Minería y alta incidencia de trata" },
        { p: "El Poder Judicial informó que la Corte Superior de Justicia de Puno emitió 68 sentencias por trata de personas entre 2016 y 2021. La fuente señaló que la mayor incidencia provenía de La Rinconada-Ananea, que existían 28 procesos en trámite, que más del 90 % de las víctimas o agraviadas eran mujeres menores de edad y que la modalidad identificada era principalmente la explotación sexual." },
        { p: "El Ministerio del Interior identificó en 2021 a La Rinconada y La Pampa como zonas de alta incidencia debido a la existencia de minería informal e ilegal. Reportó 20 operativos en Puno y Madre de Dios y el rescate conjunto de 100 mujeres. Esta cifra es birregional y no corresponde exclusivamente a La Rinconada (Ministerio del Interior, 21 de abril de 2021)." },
        { h: "Secuestro y recuperación de una bocamina en 2026" },
        { p: "El 19 de agosto de 2026, la Policía rescató con vida a 12 trabajadores retenidos dentro de una bocamina en La Rinconada, presuntamente por integrantes de la organización “Los Primos”. Según el Ministerio del Interior, tres sujetos que vigilaban el acceso recibieron a la Policía con disparos." },
        {
          table: {
            head: ["Hecho verificado por la fuente", "Dato"],
            rows: [
              ["Personas rescatadas", "12 trabajadores."],
              ["Lugar", "Bocamina de una contrata en La Rinconada."],
              ["Material hallado", "54 municiones, 180 explosivos y 15 metros de mecha."],
              ["Situación jurídica", "Presunta participación de una organización; investigación comunicada al Ministerio Público."],
            ],
          },
        },
        { callout: { tone: "ok", title: "Lección", body: "La renta minera puede ser capturada sin tener propiedad legal sobre el yacimiento. El control de trabajadores, bocaminas, armas y explosivos puede convertirse en un mecanismo para apropiarse de la producción." } },
      ],
    },
    {
      id: "pataz",
      title: "Caso de estudio: Pataz, La Libertad",
      blocks: [
        { h: "Secuestro y asesinato de 13 trabajadores" },
        { p: "El 3 de mayo de 2025, TV Perú informó que 13 trabajadores que brindaban seguridad a la operación de un minero artesanal con contrato de explotación fueron secuestrados en Pataz. Cerca de 150 integrantes de la Policía y del Ejército participaron en la búsqueda. El 5 de mayo, el Gobierno confirmó el asesinato de los 13 trabajadores y el Ministerio del Ambiente anunció el despliegue de un grupo especial contra el crimen organizado." },
        { p: "El 29 de mayo de 2025, la Policía informó la captura de ocho integrantes de “Los Sicarios de Cuchillo” por su presunta implicación en el secuestro y asesinato. En el operativo se hallaron un arma, una cacerina, municiones, dinamita, emulsión explosiva y un equipo de comunicación (Ministerio del Interior)." },
        { h: "Explosivos y capacidad logística" },
        { p: "En otra intervención de mayo de 2025 en Pataz, el Comando Unificado incautó 2.058 unidades de emulsión explosiva, 2.219 municiones, 903 detonadores, mecha rápida, nitrato de amonio y ANFO; el Ministerio del Interior valorizó los explosivos en S/ 537.500. En julio de 2025, las operaciones Relámpago I y II generaron, según TV Perú, más de S/ 827.000 en pérdidas económicas para estructuras vinculadas a minería ilegal." },
        { h: "Persistencia durante 2026" },
        { p: "En junio de 2026, el Gobierno prorrogó el estado de emergencia en Pataz y mantuvo a las Fuerzas Armadas a cargo del orden interno con apoyo policial. La fuente oficial señaló la persistencia de minería ilegal, extorsión, sicariato, secuestro y tenencia ilegal de explosivos, e incorporó a SUNAT, SUCAMEC, SUTRAN, SUNAFIL, Ministerio Público y MINEM en tareas de control. El 9 de junio de 2026, TV Perú reportó dos intervenciones con 26 personas intervenidas por presunta vinculación con “La Nueva Alianza” y la incautación de fusiles, una pistola, municiones, cacerinas y chalecos." },
        { figure: "toolkit-pataz" },
        { callout: { tone: "ok", title: "Lección del caso Pataz", body: "La estructura no solo extrae mineral: la violencia se relaciona con el control de operaciones, explosivos, armas, bocaminas y rutas. El estado de emergencia puede contener amenazas, pero la respuesta sostenida requiere control económico, trazabilidad, justicia y presencia institucional." } },
      ],
    },
    {
      id: "trujillo",
      title: "Caso complementario: secuestro en Trujillo",
      blocks: [
        { callout: { tone: "warn", title: "Precisión indispensable", body: "El caso afectó a un empresario dedicado a la compra y venta de minerales. Las fuentes consultadas vinculan a los investigados con una organización criminal, pero no prueban por sí solas que el móvil específico del secuestro haya sido una operación de minería ilegal." } },
        { p: "El 30 de agosto de 2026, cuatro personas fueron asesinadas dentro de una camioneta en Trujillo y un empresario dedicado a la compra y venta de minerales fue secuestrado; las autoridades investigaron el uso de indumentaria similar a uniformes policiales (Radio Nacional). El 31 de agosto, el Ministerio del Interior informó que la Policía ubicó con vida al empresario y detuvo a cinco presuntos implicados que serían miembros de “Los Pulpos”. El 7 de septiembre, TV Perú informó que se investigaba un espacio subterráneo presuntamente utilizado durante el secuestro; su utilización exacta seguía bajo investigación." },
        {
          table: {
            caption: "Qué permite analizar",
            head: ["Dimensión", "Lectura técnica"],
            rows: [
              ["Proyección urbana", "Una red criminal puede actuar fuera del enclave minero y atacar actividades comerciales."],
              ["Suplantación", "El uso de indumentaria táctica busca reducir resistencia y simular autoridad."],
              ["Infraestructura", "La preparación de espacios para cautiverio sugiere planificación, sujeta a investigación."],
              ["Extorsión y secuestro", "La privación de libertad puede utilizarse para exigir pagos."],
              ["Cautela causal", "La ocupación de la víctima no demuestra por sí sola que el móvil sea minería ilegal."],
            ],
          },
        },
        {
          table: {
            caption: "Síntesis comparativa",
            head: ["Caso", "Qué muestra", "Dato principal", "Precaución"],
            rows: [
              ["La Rinconada", "Trata, secuestro, armas y control de bocamina.", "12 trabajadores rescatados y 180 explosivos hallados en agosto de 2026.", "La participación de una organización era presunta y seguía en investigación."],
              ["Pataz", "Disputa armada por operaciones y territorio.", "13 trabajadores asesinados en mayo de 2025.", "Distinguir responsables investigados de responsabilidad judicial firme."],
              ["Trujillo", "Proyección urbana de una red de secuestro.", "Empresario rescatado y cinco detenidos el 31 de agosto de 2026.", "No afirmar que el móvil probado fue minería ilegal."],
              ["Lavado de activos", "Inserción de rentas y oro en circuitos económicos.", "US$ 6.258 millones en IIF con posible precedente de minería ilegal, 2015–marzo de 2025.", "Un IIF no equivale a sentencia."],
            ],
          },
        },
        { callout: { tone: "ok", title: "Conclusión", body: "La minería ilegal puede convertirse en una economía criminal interconectada cuando coordina extracción, logística, violencia, comercialización y ocultamiento de ganancias. La prevención efectiva exige entender todo el sistema y no solo el punto de extracción." } },
      ],
    },
    {
      id: "respuesta",
      title: "Respuesta del Estado",
      blocks: [
        { p: "La respuesta exige coordinación porque ningún organismo controla por sí solo toda la cadena. Las competencias varían según el delito, el bien controlado y la etapa económica." },
        {
          table: {
            head: ["Institución", "Función relevante"],
            rows: [
              ["Ministerio Público", "Dirige la investigación del delito y formula requerimientos ante el Poder Judicial."],
              ["Policía Nacional", "Investiga, ejecuta operativos y restablece el orden dentro de sus competencias."],
              ["Poder Judicial", "Resuelve medidas y determina responsabilidad en los procesos sometidos a su competencia."],
              ["UIF-SBS", "Recibe, analiza y transmite información financiera para identificar posibles casos de lavado."],
              ["SUNAT y Aduanas", "Control tributario, comercial y aduanero dentro de sus competencias."],
              ["SUCAMEC", "Control de armas, municiones, explosivos y productos pirotécnicos de uso civil."],
              ["MINEM y gobiernos regionales", "Funciones sectoriales sobre actividad minera y formalización, según competencia."],
              ["MINAM, OEFA y SERNANP", "Política ambiental, fiscalización y protección de áreas naturales, según competencia."],
              ["SUNAFIL", "Fiscalización laboral dentro de su ámbito."],
            ],
          },
        },
        { callout: { tone: "info", title: "Política integral", body: "Los casos muestran que una respuesta limitada a destruir maquinaria deja intactos otros eslabones. El control debe abarcar dinero, explosivos, armas, transporte, comercialización, trabajo, protección de víctimas y sanción penal." } },
      ],
    },
  ],
  tools: {
    lead: "Tres herramientas prácticas para fortalecer criterio y comunicación, no para convertir a jóvenes en investigadores.",
    items: [
      {
        title: "Ficha de verificación de información",
        fields: [
          "¿Qué hecho se afirma?",
          "¿Quién lo publica y cuál es su competencia?",
          "¿Qué fecha y territorio cubre?",
          "¿Es un hecho confirmado, una investigación o una opinión?",
          "¿La cifra tiene unidad, periodo y ámbito?",
        ],
      },
      {
        title: "Protocolo de comunicación segura",
        fields: [
          "No publicar nombres, fotografías o ubicaciones sensibles sin autorización y sustento.",
          "No ingresar a bocaminas, campamentos o rutas para recopilar evidencia.",
          "No confrontar a presuntos operadores ni organizaciones.",
          "No presentar personas investigadas como condenadas.",
          "Conservar enlaces y fecha de consulta de las fuentes públicas.",
          "Usar canales institucionales y priorizar la protección de víctimas y denunciantes.",
        ],
      },
      {
        title: "Agenda juvenil de prevención",
        fields: [
          "Educación: alfabetización informativa sobre minería ilegal y crimen organizado.",
          "Datos abiertos: seguimiento de normas, operativos y sentencias con fuentes públicas.",
          "Comunicación: campañas que expliquen cadenas económicas sin estigmatizar territorios.",
          "Incidencia: propuestas universitarias y comunitarias sobre trazabilidad, prevención y alternativas.",
          "Redes: coordinación con universidades, organizaciones y entidades competentes.",
        ],
      },
    ],
  },
  keyMessages: [
    "La economía criminal aparece cuando la actividad ilícita articula funciones, genera rentas, se reproduce, protege sus operaciones y oculta sus ganancias.",
    "No todo actor de la cadena es criminal organizado: la responsabilidad penal es individual y la determinan las autoridades competentes.",
    "Para entender la red hay que seguir el dinero, la logística, el destino del oro y el uso de las ganancias.",
    "Los pequeños mineros también pueden ser víctimas de las economías criminales.",
    "Detenido, investigado, acusado y condenado no son categorías equivalentes.",
  ],
  facilitation: {
    tone: [
      "Utilizar lenguaje sobrio y evitar narrativas sensacionalistas.",
      "No normalizar ni recrear violencia con detalles innecesarios.",
      "Diferenciar minería informal, ilegal y crimen organizado.",
      "Atribuir cada cifra a su fuente, fecha y ámbito.",
      "No asumir que toda persona que trabaja o comercia en una zona minera integra una red criminal.",
      "Explicar que la responsabilidad penal es individual y debe ser determinada por autoridades competentes.",
    ],
    questions: [
      "¿Qué eslabón de la cadena resulta más difícil de controlar y por qué?",
      "¿Qué diferencias existen entre La Rinconada y Pataz?",
      "¿Por qué la trazabilidad del oro es relevante para combatir el lavado?",
      "¿Qué riesgos aparecen cuando una organización controla explosivos y rutas?",
      "¿Cómo informar sobre investigaciones en curso sin convertir hipótesis en acusaciones?",
    ],
  },
  sourceCriteria: [
    "Competencia institucional: quién publica y por qué conoce el caso.",
    "Fecha y vigencia: cuándo ocurrió el hecho y cuándo se publicó.",
    "Ámbito: localidad, provincia, región o país.",
    "Estatus jurídico: detenido, investigado, acusado, condenado o sentencia firme.",
    "Unidad: personas rescatadas, intervenidas, detenidas o condenadas no son categorías equivalentes.",
    "Trazabilidad: conservar enlace, fecha y fragmento utilizado.",
  ],
  updateNote:
    "Los procesos penales y las investigaciones cambian. Antes de cada réplica, verificar la situación procesal y evitar actualizar el texto con titulares que no provengan de fuentes oficiales o medios públicos claramente identificados.",
  sources: [
    {
      group: "Marco legal y crimen organizado",
      items: [
        { text: "Congreso de la República. Ley N.° 30077, Ley contra el Crimen Organizado.", url: "https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/218476-30077-2013" },
        { text: "Ministerio Público. Publicación de la Ley N.° 30077.", url: "https://www.gob.pe/institucion/mpfn/informes-publicaciones/1678031-ley-n-30077" },
        { text: "Poder Judicial. Entrada en vigor y delitos comprendidos por la Ley N.° 30077.", url: "https://www.pj.gob.pe/wps/wcm/connect/cortesuperiortacnapj/s_csj_de_tacna/as_inicio/as_imagen_prensa/as_noticias/csjt_n_ley_crimen_organizado_07072014" },
      ],
    },
    {
      group: "Lavado de activos y trazabilidad del oro",
      items: [
        { text: "SBS. Empresas mineras y comercializadoras de oro como sujetos obligados; cifras de IIF vinculados a minería ilegal.", url: "https://www.sbs.gob.pe/boletin/detalleboletin/idbulletin/2357" },
        { text: "SBS-UIF. Lavado de activos proveniente de delitos ambientales.", url: "https://www.sbs.gob.pe/noticia/detallenoticia/idnoticia/3882" },
        { text: "Ministerio Público. FEMA coordina acciones con la UIF para reforzar la lucha contra el lavado de activos vinculado a la minería ilegal.", url: "https://www.gob.pe/institucion/mpfn/noticias/1378154-fema-coordina-acciones-con-la-uif-para-reforzar-lucha-contra-el-lavado-de-activos-vinculado-a-la-mineria-ilegal" },
        { text: "Ministerio Público. Incautación de una barra de oro proveniente de minería ilegal en Puno.", url: "https://www.gob.pe/institucion/mpfn/noticias/1366877-fiscalia-contra-el-lavado-de-activos-incauta-barra-de-oro-valorizada-en-mas-de-usd-600-000-proveniente-de-la-mineria-ilegal-en-puno" },
      ],
    },
    {
      group: "La Rinconada y trata de personas",
      items: [
        { text: "Poder Judicial. Corte de Puno dictó 68 sentencias por trata de personas.", url: "https://www.pj.gob.pe/wps/wcm/connect/cortesuprema/s_cortes_suprema_home/as_inicio/as_enlaces_destacados/as_imagen_prensa/as_notas_noticias/2021/cs_n-corte-de-puno-dicto-68-sentencias-28062021" },
        { text: "Ministerio del Interior. Mininter fortalece la lucha contra la trata de personas en Madre de Dios y Puno." },
        { text: "Ministerio del Interior. PNP rescata a 12 personas secuestradas por la organización criminal “Los Primos” en mina de La Rinconada." },
      ],
    },
    {
      group: "Pataz",
      items: [
        { text: "TV Perú. Secuestro de 13 trabajadores en Pataz, 3 de mayo de 2025.", url: "https://tvperu.gob.pe/noticias/nacionales/pataz-minera-poderosa-confirma-el-secuestro-de-13-trabajadores-por-parte-de" },
        { text: "MINAM. Confirmación de los asesinatos y despliegue estatal, 5 de mayo de 2025.", url: "https://www.gob.pe/institucion/minam/noticias/1161748-ministro-del-ambiente-gobierno-no-parara-hasta-capturar-a-responsables-de-los-crimenes-en-pataz" },
        { text: "MININTER. Captura de ocho presuntos implicados e incautación de explosivos, 29 de mayo de 2025.", url: "https://www.gob.pe/institucion/mininter/noticias/1177728-pataz-pnp-captura-a-los-sicarios-de-cuchillo-implicados-en-asesinato-de-13-personas-en-socavon-minero" },
        { text: "TV Perú. Minería ilegal en Pataz: más de S/ 827 000 en pérdidas tras golpe de la operación Relámpago II, julio de 2025." },
        { text: "Ministerio de Defensa. Prórroga del estado de emergencia en Pataz y Loreto, junio de 2026." },
        { text: "TV Perú. Pataz: 26 detenidos y armamento incautado dejan dos operaciones contra la minería ilegal, junio de 2026." },
      ],
    },
    {
      group: "Trujillo",
      items: [
        { text: "Radio Nacional. Homicidio de cuatro personas y secuestro de empresario, 30 de agosto de 2026.", url: "https://www.radionacional.gob.pe/noticias/nacional/trujillo-falsos-policias-asesinan-a-cuatro-personas-y-habrian-secuestrado-a-empresario" },
        { text: "MININTER. Policía Nacional captura a implicados en crimen de Trujillo, 31 de agosto de 2026." },
        { text: "TV Perú. Inmueble investigado por posible uso durante el secuestro, 7 de septiembre de 2026.", url: "https://www.tvperu.gob.pe/noticias/nacionales/trujillo-hallan-bunker-donde-empresario-minero-habria-permanecido-secuestrado" },
      ],
    },
    {
      group: "Lecturas complementarias",
      items: [
        { text: "PERUMIN 37. “Minería ilegal: más de 20 delitos amenazan a comunidades y a la democracia”, 26 de septiembre de 2025.", url: "https://perumin.com/perumin37/public/es/noticia/mineria-ilegal-mas-de-20-delitos-amenazan-a-comunidades-y-a-la-democracia-advierte-especialista-en-perumin-37" },
        { text: "Minería 360°. “La minería ilegal es una locomotora de otros delitos”, julio de 2026.", url: "https://mazmediatv.com/nicolas-zevallos-la-mineria-ilegal-es-una-locomotora-de-otros-delitos/" },
      ],
    },
  ],
};
