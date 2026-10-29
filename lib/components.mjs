import { html, raw, cls } from "./html.mjs";
import { fact, factValue, SOURCES } from "../content/facts.mjs";
import { image } from "../content/media.mjs";

/** Encabezado de sección con antetítulo, título y bajada opcional. */
export function sectionHead({ eyebrow, title, lead, id, align = "start" }) {
  return html`
    <div class="section-head" data-align="${align}">
      ${eyebrow ? html`<p class="eyebrow">${eyebrow}</p>` : ""}
      <h2 ${id ? raw(`id="${id}"`) : raw("")}>${title}</h2>
      ${lead ? html`<p class="lead">${lead}</p>` : ""}
    </div>
  `;
}

/** Etiqueta de estado con tono semántico. */
export function badge(label, tone = "idle") {
  return html`<span class="badge" data-tone="${tone}">${label}</span>`;
}

/**
 * Tarjeta de indicador. Toma el id de un hecho y muestra su valor junto con la
 * fuente. Si el hecho no tiene valor medido, lo dice explícitamente.
 */
export function statCard(id, { emphasis = false } = {}) {
  const f = fact(id);
  const unmeasured = f.value === null;
  return html`
    <article class="${cls("stat", emphasis && "stat-lg", unmeasured && "stat-empty")}">
      <p class="stat-value">${factValue(id)}</p>
      <h3 class="stat-label">${f.label}</h3>
      ${f.detail ? html`<p class="stat-detail">${f.detail}</p>` : ""}
      <p class="stat-source">
        ${badge(f.kind === "meta" ? "Meta comprometida" : "Dato verificado", f.kind === "meta" ? "idle" : "ok")}
        <span>Fuente: ${SOURCES[f.source].label}</span>
      </p>
    </article>
  `;
}

/** Barra de avance meta vs. real, honesta cuando no hay medición. */
export function progressBar({ label, metaId, realId }) {
  const meta = fact(metaId);
  const real = realId ? fact(realId) : null;
  const measured = real && real.value !== null;
  const pct = measured && meta.value ? Math.min(100, Math.round((real.value / meta.value) * 100)) : 0;

  return html`
    <article class="progress-row">
      <div class="progress-head">
        <h3>${label}</h3>
        <p class="progress-figure">
          ${measured
            ? html`<strong>${real.value.toLocaleString("es-PE")}</strong> de ${factValue(metaId)}`
            : html`<em>Sin medición registrada</em> · meta ${factValue(metaId)}`}
        </p>
      </div>
      <div
        class="progress-track"
        role="img"
        aria-label="${measured ? `${pct} % de la meta` : "Sin medición registrada"}"
      >
        <span style="width:${measured ? pct : 0}%"></span>
      </div>
      <p class="progress-note">
        ${measured
          ? html`Avance documentado en ${SOURCES[real.source].label}.`
          : html`Esta cifra se publicará cuando exista el registro correspondiente. No se estima.`}
      </p>
    </article>
  `;
}

/** Aviso destacado. `tone`: info | warn | ok. */
export function callout({ title, body, tone = "info", icon = "!" }) {
  return html`
    <aside class="callout" data-tone="${tone}">
      <span class="callout-icon" aria-hidden="true">${icon}</span>
      <div>
        ${title ? html`<h3>${title}</h3>` : ""}
        <p>${body}</p>
      </div>
    </aside>
  `;
}

/** Bloque hero reutilizable para páginas internas. */
export function pageHero({ eyebrow, title, lead, meta }) {
  return html`
    <section class="page-hero">
      <div class="shell">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        ${lead ? html`<p class="lead">${lead}</p>` : ""}
        ${meta && meta.length
          ? html`<ul class="hero-meta">
              ${meta.map((m) => html`<li>${m}</li>`)}
            </ul>`
          : ""}
      </div>
    </section>
  `;
}

/** Lista de definición con dos columnas. */
export function defList(items) {
  return html`
    <dl class="def-list">
      ${items.map(([term, desc]) => html`<div><dt>${term}</dt><dd>${desc}</dd></div>`)}
    </dl>
  `;
}

/**
 * Imagen con pie. Declara ancho y alto reales para evitar saltos de diseño y
 * carga diferida por defecto; pasa `eager: true` solo para la imagen visible
 * al abrir la página.
 */
export function figure(key, { eager = false, caption = true, className = "", zoom = false } = {}) {
  const m = image(key);
  const picture = html`<img
    src="${m.src}"
    width="${m.w}"
    height="${m.h}"
    alt="${m.alt}"
    loading="${eager ? "eager" : "lazy"}"
    decoding="async"
  />`;
  return html`
    <figure class="${cls("figure", className)}">
      ${zoom
        ? html`<a class="figure-zoom" href="${m.src}" target="_blank" rel="noopener" aria-label="Abrir en tamaño completo: ${m.caption || m.alt}">${picture}</a>`
        : picture}
      ${caption && m.caption ? html`<figcaption>${m.caption}</figcaption>` : ""}
    </figure>
  `;
}

/** Galería en columnas, sin recortar ninguna imagen. */
export function gallery(keys) {
  return html`<div class="gallery">${keys.map((k) => figure(k))}</div>`;
}
