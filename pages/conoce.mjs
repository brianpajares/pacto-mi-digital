import { html, raw } from "../lib/html.mjs";
import { pageHero, sectionHead, callout, defList } from "../lib/components.mjs";
import { SOURCES } from "../content/facts.mjs";

const body = html`
  ${pageHero({
    eyebrow: "Conoce",
    title: "Qué es la minería ilegal y por qué nos concierne",
    lead:
      "Información rigurosa, sin sensacionalismo y sin señalar a personas. El objetivo es que puedas explicar el problema con precisión y decidir cómo actuar.",
    meta: [
      "Contenido educativo",
      "Fuentes documentadas",
      "Actualizado en agosto de 2026",
    ],
  })}

  <section class="section shell narrow prose" aria-labelledby="definiciones">
    ${sectionHead({
      eyebrow: "Punto de partida",
      title: "Formal, informal e ilegal no son sinónimos",
      id: "definiciones",
    })}
    <p>
      Confundir estos tres términos es el error más común y el más costoso. Una parte importante del debate
      público sobre minería en el Perú se vuelve improductiva porque las personas discuten sobre categorías
      distintas creyendo que hablan de lo mismo.
    </p>
    ${defList([
      [
        "Minería formal",
        "Opera con título, autorizaciones ambientales vigentes, registro tributario y cumplimiento laboral verificable. Está sujeta a fiscalización.",
      ],
      [
        "Minería informal",
        "Actividad que se desarrolla en zonas no prohibidas y cuyos titulares están en proceso de formalización. Es una situación transitoria, no un estado permanente.",
      ],
      [
        "Minería ilegal",
        "Opera en zonas prohibidas, sin autorización alguna, o utiliza maquinaria y métodos vedados. Es la que concentra el daño ambiental severo y los vínculos con economías criminales.",
      ],
    ])}
    ${callout({
      tone: "info",
      icon: "i",
      title: "Por qué PACTO-MI insiste en la distinción",
      body: raw(
        "Tratar toda la minería de pequeña escala como criminal empuja hacia la clandestinidad a quienes sí quieren formalizarse. Tratar toda actividad ilegal como <em>informalidad</em> normaliza el daño. La formación del proyecto trabaja precisamente sobre ese matiz."
      ),
    })}
  </section>

  <section class="band" aria-labelledby="impactos">
    <div class="shell">
      ${sectionHead({
        eyebrow: "Impactos",
        title: "Cuatro dimensiones que se refuerzan entre sí",
        lead:
          "El daño de la minería ilegal no se explica por una sola vía. Estas dimensiones se alimentan mutuamente, y por eso una respuesta puramente policial o puramente ambiental resulta insuficiente.",
        id: "impactos",
      })}
      <div class="card-grid cols-2">
        <article class="card">
          <h3>Ambiental</h3>
          <p>
            Deforestación de bosque primario, contaminación de ríos y suelos por mercurio, pérdida de
            biodiversidad y alteración de cauces. En la Amazonía el pasivo persiste durante décadas después
            de que la actividad cesa.
          </p>
        </article>
        <article class="card">
          <h3>Social y de salud</h3>
          <p>
            Exposición al mercurio en poblaciones que consumen pescado de ríos afectados, violencia
            asociada al control territorial, trabajo forzoso y trata de personas en campamentos.
          </p>
        </article>
        <article class="card">
          <h3>Económico</h3>
          <p>
            Competencia desleal con operaciones formales, evasión tributaria, distorsión de precios de la
            tierra y del trabajo local, y dependencia de una economía sin encadenamientos duraderos.
          </p>
        </article>
        <article class="card">
          <h3>Gobernanza</h3>
          <p>
            Presión sobre autoridades locales, captura de espacios de decisión, debilitamiento de la
            fiscalización y erosión de la confianza entre comunidades e instituciones.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section class="section shell narrow prose" aria-labelledby="crimen">
    ${sectionHead({
      eyebrow: "El vínculo criminal",
      title: "Por qué el oro ilegal interesa al crimen organizado",
      id: "crimen",
    })}
    <p>
      El oro tiene tres propiedades que lo vuelven atractivo para una organización criminal: conserva valor,
      es difícil de rastrear una vez fundido y puede ingresar a la cadena formal a través de intermediarios.
      Eso convierte la extracción ilegal en un mecanismo de lavado, no solo en una actividad extractiva.
    </p>
    <p>
      La propuesta con la que PACTO-MI ganó el AEIF 2025 documenta esta conexión con el narcotráfico, la
      trata de personas, el tráfico de armas y la corrupción, y señala su impacto más allá de las fronteras
      peruanas. El Módulo 2 de la Academy desarrolla estos mecanismos en detalle.
    </p>
    ${callout({
      tone: "warn",
      icon: "◆",
      title: "Cómo tratamos este tema",
      body: raw(
        "Explicamos mecanismos, no personas. La plataforma no publica nombres de presuntos responsables, ubicaciones de operaciones ni material que pueda poner en riesgo a participantes o a terceros. Si necesitas reportar un hecho, hazlo ante las autoridades competentes: PACTO-MI no es un canal de denuncia."
      ),
    })}
  </section>

  <section class="band" aria-labelledby="territorios">
    <div class="shell">
      ${sectionHead({
        eyebrow: "Territorios",
        title: "Cajamarca y Madre de Dios",
        lead:
          "Dos contextos muy distintos que exigen abordajes distintos. El proyecto trabaja en ambos precisamente para no producir un discurso único.",
        id: "territorios",
      })}
      <div class="card-grid cols-2">
        <article class="card card-territory">
          <h3>Cajamarca</h3>
          <p class="card-kicker">Sierra norte · primera cohorte del proyecto</p>
          <p>
            Región con larga trayectoria minera formal y una historia densa de conflictividad
            socioambiental. El desafío principal es la calidad del debate público: separar la discusión
            sobre minería formal de la expansión de la actividad ilegal.
          </p>
          <p>
            Aquí se realizó el primer taller presencial del proyecto, con universidades y organizaciones
            juveniles locales.
          </p>
        </article>
        <article class="card card-territory">
          <h3>Madre de Dios</h3>
          <p class="card-kicker">Amazonía sur · segunda etapa</p>
          <p>
            Región donde la minería aluvial ilegal ha producido la deforestación y la contaminación por
            mercurio más documentadas del país, con presencia de campamentos y economías asociadas.
          </p>
          <p>
            La segunda etapa del proyecto replica la experiencia de Cajamarca adaptándola al contexto
            amazónico, con aliados científicos locales.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section class="section shell narrow prose" aria-labelledby="mitos">
    ${sectionHead({ eyebrow: "Mitos y realidades", title: "Cuatro ideas que conviene revisar", id: "mitos" })}
    <div class="myth-list">
      <article class="myth">
        <p class="myth-claim">“La minería ilegal da trabajo, por eso la gente la defiende”</p>
        <p>
          Genera ingresos inmediatos, sí, pero en condiciones de alta precariedad y sin encadenamientos que
          sobrevivan al agotamiento del depósito. El costo ambiental y sanitario recae sobre la misma
          población, y suele aparecer años después.
        </p>
      </article>
      <article class="myth">
        <p class="myth-claim">“Formalizar es solo un trámite”</p>
        <p>
          La formalización exige derecho sobre el terreno, instrumento de gestión ambiental y capacidad
          técnica. Sin acompañamiento efectivo, el proceso se estanca y la actividad continúa sin control.
        </p>
      </article>
      <article class="myth">
        <p class="myth-claim">“Es un problema de la selva, no del resto del país”</p>
        <p>
          El oro extraído circula por cadenas de comercialización nacionales e internacionales. El daño se
          concentra en el territorio, pero el beneficio y el lavado se distribuyen mucho más lejos.
        </p>
      </article>
      <article class="myth">
        <p class="myth-claim">“Como ciudadano no puedo hacer nada”</p>
        <p>
          Existen vías legítimas: vigilancia comunitaria, incidencia ante autoridades, comunicación
          informada y articulación entre organizaciones. El Módulo 5 y el Action Lab trabajan exactamente
          sobre esto.
        </p>
      </article>
    </div>
  </section>

  <section class="band band-dark" aria-labelledby="fuentes-conoce">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Transparencia",
        title: "De dónde sale lo que lees aquí",
        id: "fuentes-conoce",
        align: "center",
      })}
      <ul class="source-list">
        ${Object.values(SOURCES).map(
          (s) => html`
            <li>
              <strong>${s.label}</strong>
              <span>${s.note}</span>
            </li>
          `
        )}
      </ul>
      <p class="center-cta">
        <a class="btn btn-ghost" href="/fuentes">Ver la metodología completa</a>
      </p>
    </div>
  </section>
`;

export default {
  path: "/conoce",
  file: "conoce/index.html",
  title: "Conoce el problema",
  description:
    "Qué distingue la minería formal, informal e ilegal; sus impactos ambientales, sociales, económicos y de gobernanza; y por qué el oro ilegal interesa al crimen organizado.",
  breadcrumb: true,
  body,
};
