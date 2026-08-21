import { html } from "../lib/html.mjs";
import { pageHero, sectionHead, badge, callout, statCard } from "../lib/components.mjs";
import { modules, MODULE_STATUS } from "../content/modules.mjs";
import { site } from "../content/site.mjs";

const body = html`
  ${pageHero({
    eyebrow: "PACTO-MI Academy",
    title: "Seis módulos para pasar de entender a actuar",
    lead:
      "El programa formativo del proyecto, convertido en rutas digitales. Cada módulo termina en una acción concreta y en evidencia que puede medirse.",
    meta: ["6 módulos", "Evaluación previa y posterior", "Cierra en un plan de acción"],
  })}

  <section class="section shell" aria-labelledby="ruta">
    ${sectionHead({
      eyebrow: "La ruta",
      title: "Cómo está construido el programa",
      lead:
        "Los módulos siguen una progresión deliberada: primero comprender el fenómeno, luego sus consecuencias, después las herramientas de respuesta, y al final el plan propio.",
      id: "ruta",
    })}

    <ol class="module-list">
      ${modules.map(
        (m) => html`
          <li class="module" id="modulo-${m.slug}">
            <div class="module-index" aria-hidden="true">${String(m.n).padStart(2, "0")}</div>
            <div class="module-body">
              <div class="module-head">
                <h3>${m.title}</h3>
                ${badge(MODULE_STATUS[m.status].label, MODULE_STATUS[m.status].tone)}
              </div>
              <p class="module-summary">${m.summary}</p>
              <p class="module-format"><span class="sr-only">Formato: </span>${m.format}</p>
              <details class="module-details">
                <summary>Objetivos de aprendizaje</summary>
                <ul>
                  ${m.objectives.map((o) => html`<li>${o}</li>`)}
                </ul>
              </details>
            </div>
          </li>
        `
      )}
    </ol>

    ${callout({
      tone: "info",
      icon: "i",
      title: "Estado del contenido",
      body:
        "Las etiquetas describen el estado editorial real de cada módulo, no un avance personal. La plataforma no muestra barras de progreso de usuario hasta que exista registro con autenticación: un porcentaje sin dato detrás sería una cifra inventada.",
    })}
  </section>

  <section class="band" aria-labelledby="evaluacion">
    <div class="shell">
      ${sectionHead({
        eyebrow: "Evaluación",
        title: "Qué se mide y para qué",
        lead:
          "La matriz de monitoreo del proyecto compromete indicadores concretos. La plataforma los captura de forma nativa para que el reporte no dependa de hojas de cálculo dispersas.",
        id: "evaluacion",
      })}
      <div class="card-grid cols-2">
        <article class="card">
          <h3>Evaluación previa y posterior</h3>
          <p>
            Cada participante responde un test antes y después del módulo. La diferencia entre ambos es el
            indicador de aprendizaje, no la asistencia.
          </p>
        </article>
        <article class="card">
          <h3>Actividad aplicada</h3>
          <p>
            Los módulos cierran con una actividad que produce un entregable revisable: un análisis, un
            mensaje de campaña o un borrador de plan.
          </p>
        </article>
        <article class="card">
          <h3>Rúbrica del plan final</h3>
          <p>
            El Módulo 6 se evalúa con una rúbrica compartida, de modo que la calidad de los planes sea
            comparable entre cohortes y regiones.
          </p>
        </article>
        <article class="card">
          <h3>Satisfacción y relevancia</h3>
          <p>
            Encuesta posterior a cada sesión. La meta comprometida en la matriz M&E es de 90 % de
            participantes satisfechos.
          </p>
        </article>
      </div>
      <div class="stat-grid cols-3">
        ${statCard("estudiantes")} ${statCard("lideres")} ${statCard("planes-accionables")}
      </div>
    </div>
  </section>

  <section class="section shell narrow" aria-labelledby="acceso">
    ${sectionHead({
      eyebrow: "Acceso",
      title: "Cómo inscribirse",
      id: "acceso",
      align: "center",
    })}
    <p class="center-text">
      La cohorte formativa se convoca a través de las universidades y organizaciones aliadas del proyecto en
      Cajamarca y Madre de Dios. Mientras el registro con autenticación no esté habilitado, la vía de
      contacto es directa con el equipo.
    </p>
    <p class="center-cta">
      <a class="btn btn-primary" href="mailto:${site.contact.email}?subject=Inscripci%C3%B3n%20PACTO-MI%20Academy">
        Escribir al equipo
      </a>
      <a class="btn btn-ghost" href="/eventos">Ver próximas sesiones</a>
    </p>
  </section>
`;

export default {
  path: "/aprende",
  file: "aprende/index.html",
  title: "PACTO-MI Academy",
  description:
    "Los seis módulos formativos de PACTO-MI: minería ilegal en el Perú, vínculos con el crimen organizado, consecuencias, advocacy digital, política pública y planes de acción local.",
  breadcrumb: true,
  schema: {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "PACTO-MI Academy",
    description:
      "Programa formativo de seis módulos sobre minería ilegal, crimen organizado y acción ciudadana en el Perú.",
    provider: { "@type": "Organization", name: "PACTO-MI", url: "https://pacto-mi-digital.vercel.app" },
    inLanguage: "es-PE",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      location: { "@type": "Place", name: "Cajamarca y Madre de Dios, Perú" },
    },
  },
  body,
};
