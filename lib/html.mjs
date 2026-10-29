/** Utilidades mínimas de plantillas. Sin dependencias externas. */

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

/** Escapa texto para insertarlo en HTML. */
export function esc(value) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

/** Marca una cadena como HTML ya seguro (no se vuelve a escapar). */
export class Raw {
  constructor(value) {
    this.value = value;
  }
  toString() {
    return this.value;
  }
}

export const raw = (value) => new Raw(value);

/**
 * Plantilla etiquetada: escapa cada interpolación salvo las marcadas con raw().
 * Los arrays se concatenan, lo que permite `${items.map(...)}`.
 */
export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i += 1) {
    out += serialize(values[i]) + strings[i + 1];
  }
  return new Raw(out);
}

function serialize(value) {
  if (value === null || value === undefined || value === false) return "";
  if (value instanceof Raw) return value.value;
  if (Array.isArray(value)) return value.map(serialize).join("");
  return esc(value);
}

/** Construye una lista de clases a partir de valores condicionales. */
export function cls(...parts) {
  return parts.filter(Boolean).join(" ");
}

/** Convierte un objeto en atributos HTML, omitiendo valores nulos y false. */
export function attrs(map) {
  const out = Object.entries(map)
    .filter(([, v]) => v !== null && v !== undefined && v !== false)
    .map(([k, v]) => (v === true ? esc(k) : `${esc(k)}="${esc(v)}"`))
    .join(" ");
  return raw(out);
}

/** Serializa datos como bloque JSON-LD. */
export function jsonLd(data) {
  const json = JSON.stringify(data, null, 2).replace(/</g, "\\u003c");
  return raw(`<script type="application/ld+json">${json}</script>`);
}
