import { html } from "../lib/html.mjs";
import { pageHero, sectionHead, badge, callout, statCard } from "../lib/components.mjs";
import { cycle, sessions, SESSION_STATUS, talkMetadata, talkCount } from "../content/talks.mjs";

const body = html`
  ${pageHero({
    eyebrow: "Expert Talks",
    title: "Ciclo de ponencias virtuales con especialistas",
    lead:
      "Cuatro sesiones virtuales entre marzo y mayo de 2026, con especialistas en derecho ambiental, criminología, ingeniería ambiental, liderazgo y gobernanza. Cada sesión cerró con preguntas del público.",
    meta: [`${sessions.length} sesiones`, `${talkCount} ponencias`, "Modalidad virtual"],
  })}

  <section class="section shell" aria-labelledby="sesiones">
    ${sectionHead({
      eyebrow: "Las sesiones",
      title: cycle.subtitle,
      lead:
        "Las fechas, los ponentes y los títulos provienen de las agendas y los flyers oficiales de cada sesión. Un cargo se publica solo si figura en el flyer; los que no figuran se omiten en lugar de suponerse.",
      id: "sesiones",
    })}

    <div class="session-list">
      ${sessions.map(
        (s) => html`
          <article class="session" id="sesion-${s.n}">
            <header class="session-head">
              <p class="session-n">Sesión ${String(s.n).padStart(2, "0")}</p>
              <p class="session-when">${s.dateLabel} · ${s.time}</p>
              ${badge(SESSION_STATUS[s.status].label, SESSION_STATUS[s.status].tone)}
            </header>
            <h3>${s.title}</h3>
            <p class="session-objective">${s.objective}</p>

            <ul class="speaker-list">
              ${s.speakers.map(
                (p) => html`
                  <li class="speaker">
                    <p class="speaker-name">${p.name}</p>
                    ${p.role ? html`<p class="speaker-role">${p.role}</p>` : ""}
                    ${p.talk ? html`<p class="speaker-talk">${p.talk}</p>` : ""}
                    ${p.topics.length
                      ? html`<ul class="speaker-topics">
                          ${p.topics.map((t) => html`<li>${t}</li>`)}
                        </ul>`
                      : ""}
                  </li>
                `
              )}
            </ul>
          </article>
        `
      )}
    </div>

    ${s4Note()}

    <div class="stat-grid cols-3">
      ${statCard("sesiones-virtuales")} ${statCard("ponencias")} ${statCard("satisfaccion")}
    </div>
  </section>

  <section class="band" aria-labelledby="ficha">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Estándar editorial",
        title: "Qué falta para publicar la ficha completa de cada sesión",
        lead:
          "Una agenda no es todavía un recurso reutilizable. Para que cada sesión pueda buscarse, citarse y consultarse años después, se completa con esta metadata mínima.",
        id: "ficha",
      })}
      <ul class="check-list">
        ${talkMetadata.map((m) => html`<li>${m}</li>`)}
      </ul>
      ${callout({
        tone: "warn",
        icon: "◆",
        title: "Grabaciones y consentimiento de imagen",
        body:
          "Todavía no hay grabaciones publicadas. Ninguna se publicará sin el consentimiento explícito del ponente para el uso de su imagen y voz, registrado por separado de los términos generales de la plataforma.",
      })}
    </div>
  </section>
`;

/** Aviso sobre el dato que las fuentes no permiten confirmar. */
function s4Note() {
  return callout({
    tone: "info",
    icon: "i",
    title: "Sobre la fecha de la cuarta sesión",
    body:
      "La agenda de la cuarta sesión indica el 30 de mayo, pero su flyer anuncia el viernes 15 de mayo. Mientras el equipo confirma cuál fue la fecha, se publica solo el mes.",
  });
}

export default {
  path: "/expert-talks",
  file: "expert-talks/index.html",
  title: "Expert Talks",
  description:
    "Ciclo de cuatro sesiones virtuales de PACTO-MI en 2026, con 12 ponencias de especialistas sobre minería ilegal, crimen organizado, impactos ambientales, gobernanza y liderazgo juvenil.",
  breadcrumb: true,
  body,
};
