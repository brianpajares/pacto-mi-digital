import { html, raw } from "../lib/html.mjs";
import { pageHero, sectionHead, badge, callout } from "../lib/components.mjs";
import { resources, resourceTypes, AVAILABILITY } from "../content/resources.mjs";

const body = html`
  ${pageHero({
    eyebrow: "Knowledge Hub",
    title: "Biblioteca viva del proyecto",
    lead:
      "Todo recurso publicado declara su fuente, versión, responsable editorial y estado de revisión. Si algo aún no está listo, la ficha lo dice en lugar de ofrecer una descarga que falla.",
    meta: [`${resources.length} fichas catalogadas`, "Versionado editorial", "Descarga sin registro"],
  })}

  <section class="section shell" aria-labelledby="catalogo">
    <div class="hub-head">
      ${sectionHead({ eyebrow: "Catálogo", title: "Busca y filtra", id: "catalogo" })}
      <div class="hub-controls">
        <label class="search-box">
          <span class="sr-only">Buscar recursos</span>
          <input
            id="resource-search"
            type="search"
            placeholder="toolkit, plan de acción, PRD…"
            autocomplete="off"
          />
        </label>
        <div class="filters" role="group" aria-label="Filtrar por tipo de recurso">
          ${resourceTypes.map(
            (t, i) => html`
              <button
                class="chip"
                type="button"
                data-filter="${t}"
                aria-pressed="${i === 0 ? "true" : "false"}"
              >
                ${t}
              </button>
            `
          )}
        </div>
      </div>
    </div>

    <p class="hub-count" id="resource-count" role="status">
      Mostrando ${resources.length} de ${resources.length} recursos.
    </p>

    <div class="resource-grid" id="resource-grid">
      ${resources.map(
        (r) => html`
          <article
            class="resource"
            data-type="${r.type}"
            data-search="${[r.title, r.summary, r.region, r.type, ...r.tags].join(" ").toLowerCase()}"
          >
            <div class="resource-top">
              <span class="tag">${r.type}</span>
              ${badge(AVAILABILITY[r.availability].label, AVAILABILITY[r.availability].tone)}
            </div>
            <h3>${r.title}</h3>
            <p class="resource-summary">${r.summary}</p>
            <dl class="resource-meta">
              <div><dt>Región</dt><dd>${r.region}</dd></div>
              <div><dt>Versión</dt><dd>${r.version}</dd></div>
              <div><dt>Responsable</dt><dd>${r.owner}</dd></div>
              <div><dt>Revisión</dt><dd>${r.reviewer}</dd></div>
            </dl>
            <ul class="tag-list">
              ${r.tags.map((t) => html`<li>${t}</li>`)}
            </ul>
            <div class="resource-action">
              ${r.href
                ? html`<a class="btn btn-primary btn-sm" href="${r.href}">Abrir recurso</a>`
                : html`<p class="resource-pending">
                    No disponible todavía · ${AVAILABILITY[r.availability].label.toLowerCase()} por
                    ${r.reviewer.toLowerCase()}
                  </p>`}
            </div>
          </article>
        `
      )}
    </div>

    <p class="hub-empty" id="resource-empty" hidden>
      Ningún recurso coincide con esa búsqueda. Prueba con otro término o quita los filtros.
    </p>
  </section>

  <section class="band" aria-labelledby="gobierno">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Gobierno editorial",
        title: "Cómo llega un recurso hasta aquí",
        lead:
          "Ningún archivo pasa directamente del Drive de trabajo al sitio público. Este es el flujo que debe recorrer.",
        id: "gobierno",
      })}
      <ol class="flow">
        <li><strong>Borrador</strong><span>El responsable produce la pieza y registra su fuente.</span></li>
        <li><strong>Revisión técnica</strong><span>Un especialista temático valida la exactitud del contenido.</span></li>
        <li><strong>Revisión de comunicación</strong><span>Se ajusta el tono: educativo, sin alarmismo ni señalamientos.</span></li>
        <li><strong>Aprobado</strong><span>Queda con versión, fecha de revisión y licencia declarada.</span></li>
        <li><strong>Publicado</strong><span>Recién entonces aparece en el Knowledge Hub.</span></li>
        <li><strong>Archivado</strong><span>Se retira cuando caduca, conservando la trazabilidad.</span></li>
      </ol>
      ${callout({
        tone: "info",
        icon: "i",
        title: "Drive de trabajo, sitio de publicación",
        body: raw(
          "El equipo trabaja los materiales en Google Drive, pero la aplicación no sincroniza archivos automáticamente desde ahí. Solo los activos aprobados y versionados se publican, para evitar exponer borradores o material sensible por accidente."
        ),
      })}
    </div>
  </section>
`;

export default {
  path: "/recursos",
  file: "recursos/index.html",
  title: "Knowledge Hub",
  description:
    "Biblioteca de recursos de PACTO-MI: toolkit, guías, módulos formativos y documentación del proyecto, cada uno con fuente, versión, responsable y estado de revisión.",
  breadcrumb: true,
  body,
};
