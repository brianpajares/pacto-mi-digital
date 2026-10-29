import { html } from "../lib/html.mjs";
import { nav } from "../content/site.mjs";

const body = html`
  <section class="section shell narrow error-page">
    <p class="eyebrow">Error 404</p>
    <h1>Esta página no existe</h1>
    <p class="lead">
      Puede que el enlace esté desactualizado o que la sección todavía no se haya publicado. Estas son las
      secciones disponibles:
    </p>
    <ul class="pill-list pill-list-lg">
      <li><a href="/">Inicio</a></li>
      ${nav.map((n) => html`<li><a href="${n.href}">${n.label}</a></li>`)}
      <li><a href="/transparencia">Transparencia</a></li>
      <li><a href="/fuentes">Fuentes</a></li>
      <li><a href="/privacidad">Privacidad</a></li>
    </ul>
  </section>
`;

export default {
  path: "/404",
  file: "404.html",
  title: "Página no encontrada",
  description: "La página solicitada no existe en PACTO-MI Digital.",
  noindex: true,
  body,
};
