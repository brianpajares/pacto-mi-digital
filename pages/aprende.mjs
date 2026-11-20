import { html } from "../lib/html.mjs";
import { pageHero, sectionHead, badge, callout, statCard } from "../lib/components.mjs";
import { modules, toolkit, MODULE_STATUS } from "../content/modules.mjs";
import { image } from "../content/media.mjs";
import { site } from "../content/site.mjs";

const firstVersion = modules[0].version;
const lastVersion = modules[modules.length - 1].version;

const body = html`
  ${pageHero({
    eyebrow: "PACTO-MI Academy",
    title: "Seis módulos para pasar de entender a actuar",
    lead:
      "El programa formativo del proyecto, publicado completo: los seis módulos del Toolkit técnico de formación, con conceptos, casos, ejercicios, fichas de trabajo y fuentes, listos para estudiar o replicar en tu comunidad.",
    meta: [`${modules.length} módulos publicados`, `${toolkit.pages} páginas de toolkit`, "Cajamarca y Madre de Dios"],
  })}

  <section class="section shell" aria-labelledby="toolkit">
    <div class="tk-hub">
      <div>
        ${sectionHead({
          eyebrow: toolkit.title,
          title: toolkit.subtitle,
          id: "toolkit",
        })}
        ${toolkit.intro.map((t) => html`<p>${t}</p>`)}
        <p class="tk-closing">${toolkit.closing}</p>
        <p class="center-cta tk-hub-cta">
          <a class="btn btn-primary" href="${modules[0].path}">Empezar por el Módulo 1</a>
          <a class="btn btn-ghost" href="${toolkit.full.href}" rel="noopener">
            Descargar el toolkit completo (PDF, ${toolkit.full.size})
          </a>
        </p>
      </div>
      <aside class="card tk-hub-card" aria-labelledby="como-usar">
        <h3 id="como-usar">Cómo se usa cada módulo</h3>
        <ol class="tk-steps">
          <li><strong>Comprender:</strong> conceptos, normativa y cifras con fuente.</li>
          <li><strong>Analizar:</strong> factores, actores y estudios de caso.</li>
          <li><strong>Deliberar:</strong> contrastar evidencia y vacíos de información.</li>
          <li><strong>Actuar:</strong> alertas y acciones preventivas seguras.</li>
        </ol>
        <p class="tk-source">
          Versión técnica actualizada entre ${firstVersion} y ${lastVersion}. Presencial, virtual o híbrido.
        </p>
      </aside>
    </div>
  </section>

  <section class="band" aria-labelledby="ruta">
    <div class="shell">
      ${sectionHead({
        eyebrow: "La ruta",
        title: "Los seis módulos",
        lead:
          "Una progresión deliberada: distinguir, comprender la red, leer el territorio, comunicar con rigor, actuar con reglas y, al final, dar el primer paso propio.",
        id: "ruta",
      })}

      <ol class="module-list">
        ${modules.map(
          (m) => html`
            <li class="module module-tk" id="modulo-${m.slug}">
              <div class="module-cover">
                <img src="/assets/img/${m.cover}.webp" width="480" height="679" alt="${image(m.cover).alt}" loading="lazy" decoding="async" />
              </div>
              <div class="module-body">
                <div class="module-head">
                  <span class="module-n">Módulo ${m.n}</span>
                  ${badge(MODULE_STATUS[m.status].label, MODULE_STATUS[m.status].tone)}
                </div>
                <h3><a href="${m.path}">${m.title}</a></h3>
                <p class="module-sub">${m.subtitle}</p>
                <p class="module-summary">${m.summary}</p>
                <p class="module-format"><span class="sr-only">Incluye: </span>${m.format}</p>
                <details class="module-details">
                  <summary>Objetivos de aprendizaje</summary>
                  <ul>
                    ${m.objectives.map((o) => html`<li>${o}</li>`)}
                  </ul>
                </details>
                <p class="module-actions">
                  <a class="btn btn-primary" href="${m.path}">Abrir el módulo</a>
                  <a class="btn btn-ghost" href="${m.pdf.href}" rel="noopener">PDF · ${m.pdf.pages} págs. · ${m.pdf.size}</a>
                </p>
              </div>
            </li>
          `
        )}
      </ol>

      ${callout({
        tone: "info",
        icon: "i",
        title: "Sobre las descargas",
        body:
          "Cada módulo se lee completo en esta web. Los PDF se conservan en el repositorio público del proyecto en GitHub para que la plataforma siga siendo liviana; el enlace descarga el archivo directamente. Las cifras del toolkit indican siempre territorio, periodo y fuente: antes de cada réplica, verifica su vigencia.",
      })}
    </div>
  </section>

  <section class="section" aria-labelledby="evaluacion">
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
    "Los seis módulos del Toolkit técnico de formación de PACTO-MI: gobernanza territorial, crimen organizado, consecuencias, comunicación estratégica, prevención comunitaria y plan de acción.",
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
