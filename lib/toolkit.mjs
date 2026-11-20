/**
 * Renderizado del Toolkit técnico de formación.
 *
 * Cada módulo se describe como datos (content/toolkit/modulo-N.mjs) y aquí se
 * convierte en HTML. Los bloques admitidos son deliberadamente pocos para que
 * el contenido se edite sin tocar plantillas:
 *
 *   { p }            párrafo            { h }          subtítulo
 *   { list }         viñetas            { steps }      pasos numerados
 *   { table }        tabla con caption  { callout }    aviso destacado
 *   { example }      ejemplo o caso     { source }     línea de fuente
 *   { figure }       imagen del catálogo{ timeline }   línea de tiempo
 *   { flow }         secuencia en fichas{ cards }      tarjetas
 *   { stats }        cifras con fuente  { exercise }   actividad del taller
 *   { pairs }        experimento de titulares (Módulo 4)
 *   { link }         enlace oficial     { acronym }    método PACTO
 *   { channels }     canales institucionales           { pledge } compromiso
 */
import { html, raw } from "./html.mjs";
import { callout, figure, defList } from "./components.mjs";

const ICON = { info: "i", warn: "!", ok: "✓" };

/** Enlace externo seguro. */
const ext = (href, label) => html`<a href="${href}" rel="noopener" target="_blank">${label}<span class="sr-only"> (abre en otra pestaña)</span></a>`;

export function table({ caption, head, rows }) {
  return html`
    <div class="tk-table-wrap">
      <table class="tk-table">
        ${caption ? html`<caption>${caption}</caption>` : ""}
        <thead>
          <tr>${head.map((h) => html`<th scope="col">${h}</th>`)}</tr>
        </thead>
        <tbody>
          ${rows.map(
            ([first, ...rest]) =>
              html`<tr><th scope="row">${first}</th>${rest.map((c, i) => html`<td data-label="${head[i + 1]}">${c}</td>`)}</tr>`
          )}
        </tbody>
      </table>
    </div>
  `;
}

function block(b) {
  if (b.p) return html`<p>${b.p}</p>`;
  if (b.h) return html`<h3 class="tk-h">${b.h}</h3>`;
  if (b.list) return html`<ul class="tk-list">${b.list.map((i) => html`<li>${i}</li>`)}</ul>`;
  if (b.steps) return html`<ol class="tk-steps">${b.steps.map((i) => html`<li>${i}</li>`)}</ol>`;
  if (b.table) return table(b.table);
  if (b.callout) {
    const tone = b.callout.tone || "info";
    return callout({ title: b.callout.title, body: b.callout.body, tone, icon: ICON[tone] });
  }
  if (b.example)
    return html`<aside class="tk-example"><p class="tk-example-title">${b.example.title}</p><p>${b.example.body}</p></aside>`;
  if (b.source) return html`<p class="tk-source">${b.source}</p>`;
  if (b.figure) return figure(b.figure, { zoom: true, className: "tk-figure" });
  if (b.timeline)
    return html`
      <ol class="tk-timeline">
        ${b.timeline.map(
          ([when, title, body]) => html`<li><p class="tk-when">${when}</p><h3>${title}</h3><p>${body}</p></li>`
        )}
      </ol>
    `;
  if (b.flow)
    return html`
      <div class="tk-flow">
        <p class="tk-flow-title">${b.flow.title}</p>
        <ol>${b.flow.steps.map((s) => html`<li>${s}</li>`)}</ol>
      </div>
    `;
  if (b.cards)
    return html`
      <div class="card-grid ${b.cards.length > 2 ? "cols-3" : "cols-2"} tk-cards">
        ${b.cards.map((c) => html`<article class="card"><h3>${c.title}</h3><p>${c.body}</p></article>`)}
      </div>
    `;
  if (b.stats)
    return html`
      <div class="tk-stats">
        ${b.stats.map(
          (s) => html`<article class="tk-stat"><p class="tk-stat-value">${s.value}</p><p>${s.label}</p><p class="tk-source">Fuente: ${s.source}</p></article>`
        )}
      </div>
    `;
  if (b.exercise)
    return html`
      <aside class="tk-exercise">
        <p class="tk-exercise-title">
          <span class="tk-tag">Actividad</span> ${b.exercise.title}
          ${b.exercise.time ? html`<span class="tk-time">${b.exercise.time}</span>` : ""}
        </p>
        <p>${b.exercise.body}</p>
      </aside>
    `;
  if (b.pairs)
    return html`
      <div class="tk-pairs">
        ${b.pairs.map(
          (pair) => html`
            <article class="tk-pair">
              <h3>${pair.label}</h3>
              <div class="tk-pair-grid">
                <blockquote><span class="tk-tag">Versión A</span><p>${pair.a}</p></blockquote>
                <blockquote><span class="tk-tag">Versión B</span><p>${pair.b}</p></blockquote>
              </div>
              <details class="tk-reveal">
                <summary>¿Cuál compartirías? Ver la explicación</summary>
                <dl>
                  <div><dt>Versión A</dt><dd>${pair.aNote}</dd></div>
                  <div><dt>Versión B</dt><dd>${pair.bNote}</dd></div>
                  <div><dt>¿Qué cambió?</dt><dd>${pair.changed}</dd></div>
                </dl>
              </details>
            </article>
          `
        )}
      </div>
    `;
  if (b.link) return html`<p class="tk-link">${ext(b.link.url, b.link.label)}</p>`;
  if (b.acronym)
    return html`
      <ol class="tk-acronym">
        ${b.acronym.map(
          ([letter, word, body]) => html`<li><span class="tk-letter" aria-hidden="true">${letter}</span><div><h3>${word}</h3><p>${body}</p></div></li>`
        )}
      </ol>
    `;
  if (b.channels)
    return html`
      <div class="tk-channels">
        ${b.channels.map(
          (c) => html`
            <article class="tk-channel">
              <h3>${c.name}</h3>
              <p>${c.use}</p>
              ${c.contact.length
                ? html`<dl>
                    ${c.contact.map(
                      ([k, label, href]) => html`<div><dt>${k}</dt><dd>${href.startsWith("http") ? ext(href, label) : html`<a href="${href}">${label}</a>`}</dd></div>`
                    )}
                  </dl>`
                : ""}
            </article>
          `
        )}
      </div>
    `;
  if (b.pledge) return html`<blockquote class="tk-pledge"><p class="tk-pledge-title">Mi PACTO</p><p>${b.pledge}</p></blockquote>`;
  throw new Error(`Bloque de toolkit desconocido: ${JSON.stringify(Object.keys(b))}`);
}

export const blocks = (list) => list.map(block);

/** Fichas de trabajo imprimibles: cada campo deja una línea para escribir. */
export function tools(items) {
  return html`
    <div class="tk-tools">
      ${items.map(
        (t) => html`
          <article class="tk-tool">
            <h3>${t.title}</h3>
            ${t.intro ? html`<p class="tk-tool-intro">${t.intro}</p>` : ""}
            ${raw(t.ordered ? "<ol>" : "<ul>")}
              ${t.fields.map((f) => html`<li><span>${f}</span><span class="tk-line" aria-hidden="true"></span></li>`)}
            ${raw(t.ordered ? "</ol>" : "</ul>")}
          </article>
        `
      )}
    </div>
  `;
}

/** Fuentes del módulo, con enlace solo cuando el toolkit publica la URL. */
export function sources(groups) {
  return groups.map(
    (g) => html`
      <div class="tk-source-group">
        <h3>${g.group}</h3>
        <ol>
          ${g.items.map((i) => html`<li>${i.url ? ext(i.url, i.text) : i.text}</li>`)}
        </ol>
      </div>
    `
  );
}

export { defList, ext };
