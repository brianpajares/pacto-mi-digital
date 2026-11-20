/**
 * Una página por módulo del Toolkit técnico de formación: /aprende/<slug>.
 * El contenido sale de content/toolkit/modulo-N.mjs; esta plantilla solo lo ordena.
 */
import { html } from "../lib/html.mjs";
import { pageHero, callout, figure } from "../lib/components.mjs";
import { blocks, table, tools, sources, defList } from "../lib/toolkit.mjs";
import { modules, toolkit, MODULE_STATUS } from "../content/modules.mjs";
import { site } from "../content/site.mjs";

function modulePage(m, i) {
  const c = m.content;
  const prev = modules[i - 1];
  const next = modules[i + 1];
  const h = c.howTo || {};

  const toc = [
    ...c.sections.map((s) => [s.id, s.title]),
    c.tools && ["herramientas", "Herramientas para el taller"],
    c.glossary && ["glosario", "Glosario"],
    ["mensajes", "Mensajes clave"],
    c.facilitation && ["facilitacion", "Guía de facilitación"],
    ["fuentes", "Fuentes y bibliografía"],
  ].filter(Boolean);

  const body = html`
    ${pageHero({
      eyebrow: `Módulo ${m.n} de ${modules.length} · ${toolkit.title}`,
      title: m.title,
      lead: m.subtitle,
      meta: [`Versión técnica ${m.version}`, `${m.pdf.pages} páginas en PDF`, MODULE_STATUS[m.status].label],
    })}

    <div class="shell tk-layout">
      <aside class="tk-aside" aria-label="Material del módulo">
        ${figure(m.cover, { caption: false, className: "tk-cover" })}
        <a class="btn btn-primary tk-download" href="${m.pdf.href}" rel="noopener">
          Descargar PDF <span class="tk-meta">${m.pdf.size}</span>
        </a>
        <button class="btn btn-ghost tk-print" type="button" data-print>Imprimir fichas</button>
        <nav class="tk-toc" aria-label="En este módulo">
          <p class="tk-toc-title">En este módulo</p>
          <ol>
            ${toc.map(([id, label]) => html`<li><a href="#${id}">${label}</a></li>`)}
          </ol>
        </nav>
      </aside>

      <div class="tk-main">
        <section class="tk-section tk-intro" aria-labelledby="enfoque">
          <p class="eyebrow">Enfoque del documento</p>
          <h2 id="enfoque" class="sr-only">Enfoque del documento</h2>
          <p class="tk-lead">${m.summary}</p>
          ${h.lead ? html`<p>${h.lead}</p>` : ""}
          ${h.rule ? callout({ title: h.rule.title, body: h.rule.body, tone: h.rule.tone || "info", icon: h.rule.tone === "warn" ? "!" : "i" }) : ""}

          <h3 class="tk-h">Objetivos de aprendizaje</h3>
          <ul class="tk-list tk-objectives">
            ${m.objectives.map((o) => html`<li>${o}</li>`)}
          </ul>

          ${h.moments
            ? table({ caption: "Cómo utilizar este módulo", head: ["Momento", "Propósito", "Producto"], rows: h.moments })
            : ""}
          ${h.blocksTable
            ? table({ caption: "Ruta del módulo", head: h.blocksHead || ["Bloque", "Pregunta central"], rows: h.blocksTable })
            : ""}
          ${h.capacities ? table({ caption: "Capacidades que desarrollaremos", head: ["Capacidad", "Qué significa"], rows: h.capacities }) : ""}
          ${h.path ? blocks([{ flow: { title: "Ruta del módulo", steps: h.path } }]) : ""}
          ${c.route
            ? html`<h3 class="tk-h">Ruta del módulo</h3>
                <ol class="tk-steps">${c.route.map((r) => html`<li>${r}</li>`)}</ol>`
            : ""}
          ${c.sheet ? table({ caption: "Ficha técnica", head: ["Elemento", "Descripción"], rows: c.sheet }) : ""}
        </section>

        ${c.sections.map(
          (s) => html`
            <section class="tk-section" aria-labelledby="${s.id}">
              <h2 id="${s.id}">${s.title}</h2>
              ${blocks(s.blocks)}
            </section>
          `
        )}

        ${c.tools
          ? html`
              <section class="tk-section tk-tools-section" aria-labelledby="herramientas">
                <h2 id="herramientas">Herramientas para el taller</h2>
                <p>
                  ${c.tools.lead || "Fichas listas para completar en grupo."} Usa el botón
                  <strong>Imprimir fichas</strong> para llevarlas en papel o descarga el PDF del módulo.
                </p>
                ${tools(c.tools.items)}
              </section>
            `
          : ""}

        ${c.glossary
          ? html`
              <section class="tk-section" aria-labelledby="glosario">
                <h2 id="glosario">Glosario</h2>
                ${defList(c.glossary)}
              </section>
            `
          : ""}

        <section class="tk-section" aria-labelledby="mensajes">
          <h2 id="mensajes">Mensajes clave</h2>
          <ul class="tk-keys">
            ${c.keyMessages.map((k) => html`<li>${k}</li>`)}
          </ul>
        </section>

        ${c.facilitation
          ? html`
              <section class="tk-section" aria-labelledby="facilitacion">
                <h2 id="facilitacion">Guía breve para facilitación</h2>
                <details class="tk-details" open>
                  <summary>Criterios de tono</summary>
                  <ul class="tk-list">${c.facilitation.tone.map((t) => html`<li>${t}</li>`)}</ul>
                </details>
                ${c.facilitation.answers
                  ? html`<details class="tk-details">
                      <summary>Respuestas orientativas</summary>
                      ${table({ head: ["Tema", "Orientación"], rows: c.facilitation.answers })}
                    </details>`
                  : ""}
                ${c.facilitation.quality
                  ? html`<details class="tk-details">
                      <summary>Criterios de calidad de una conclusión</summary>
                      <ul class="tk-list">${c.facilitation.quality.map((t) => html`<li>${t}</li>`)}</ul>
                    </details>`
                  : ""}
                ${c.facilitation.questions
                  ? html`<details class="tk-details">
                      <summary>Preguntas de discusión</summary>
                      <ul class="tk-list">${c.facilitation.questions.map((t) => html`<li>${t}</li>`)}</ul>
                    </details>`
                  : ""}
              </section>
            `
          : ""}

        <section class="tk-section" aria-labelledby="fuentes">
          <h2 id="fuentes">Fuentes y bibliografía</h2>
          <p class="tk-source">
            Referencias tal como las cita el toolkit. Se enlazan solo las direcciones que el documento publica.
          </p>
          ${sources(c.sources)}
          ${c.sourceCriteria
            ? html`<h3 class="tk-h">Criterios para evaluar una fuente</h3>
                <ul class="tk-list">${c.sourceCriteria.map((t) => html`<li>${t}</li>`)}</ul>`
            : ""}
          ${c.updateNote ? callout({ title: "Nota de actualización", body: c.updateNote, tone: "info", icon: "i" }) : ""}
        </section>

        <nav class="tk-pager" aria-label="Otros módulos">
          ${prev
            ? html`<a class="tk-pager-link" href="${prev.path}" rel="prev"><span>← Módulo ${prev.n}</span>${prev.title}</a>`
            : html`<a class="tk-pager-link" href="/aprende"><span>← Academy</span>Todos los módulos</a>`}
          ${next
            ? html`<a class="tk-pager-link tk-pager-next" href="${next.path}" rel="next"><span>Módulo ${next.n} →</span>${next.title}</a>`
            : html`<a class="tk-pager-link tk-pager-next" href="/actua"><span>Siguiente paso →</span>Diseña tu plan en el Action Lab</a>`}
        </nav>
      </div>
    </div>
  `;

  return {
    path: m.path,
    file: `aprende/${m.slug}/index.html`,
    title: `Módulo ${m.n}: ${m.title}`,
    description: `${m.subtitle}. ${m.summary}`.slice(0, 300),
    breadcrumb: true,
    parent: { name: "PACTO-MI Academy", path: "/aprende" },
    schema: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      name: `Módulo ${m.n}: ${m.title}`,
      description: m.summary,
      learningResourceType: "Toolkit",
      educationalLevel: "Universitario y comunitario",
      inLanguage: "es-PE",
      teaches: m.objectives,
      position: m.n,
      isPartOf: { "@type": "Course", name: "PACTO-MI Academy", url: `${site.origin}/aprende` },
      provider: { "@type": "Organization", name: "PACTO-MI", url: site.origin },
      encoding: { "@type": "MediaObject", encodingFormat: "application/pdf", contentUrl: m.pdf.href },
    },
    body,
  };
}

export default modules.map(modulePage);
