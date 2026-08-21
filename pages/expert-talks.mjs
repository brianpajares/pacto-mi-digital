import { html } from "../lib/html.mjs";
import { pageHero, sectionHead, badge, callout, statCard } from "../lib/components.mjs";
import { talks, TALK_STATUS, talkMetadata } from "../content/talks.mjs";

const body = html`
  ${pageHero({
    eyebrow: "Expert Talks",
    title: "Ciclo de conferencias con especialistas nacionales",
    lead:
      "Cuatro sesiones híbridas mensuales comprometidas en la propuesta AEIF 2025, con espacio de discusión abierta después de cada exposición.",
    meta: ["Modalidad híbrida", "Discusión abierta posterior", "Encuesta de evaluación"],
  })}

  <section class="section shell" aria-labelledby="sesiones">
    ${sectionHead({
      eyebrow: "Sesiones",
      title: "El ciclo",
      lead:
        "Publicamos el ponente confirmado de cada sesión. El título, la fecha exacta y el enlace de grabación se agregan cuando la ficha completa está aprobada — no se completan con suposiciones.",
      id: "sesiones",
    })}

    <div class="talk-grid">
      ${talks.map(
        (t) => html`
          <article class="talk">
            <div class="talk-top">
              <span class="talk-n" aria-hidden="true">Sesión ${String(t.n).padStart(2, "0")}</span>
              ${badge(TALK_STATUS[t.status].label, TALK_STATUS[t.status].tone)}
            </div>
            <h3>${t.speaker}</h3>
            <p class="talk-expertise">${t.expertise}</p>
            <dl class="talk-meta">
              <div><dt>Tema</dt><dd>${t.topic}</dd></div>
              <div><dt>Fecha</dt><dd>${t.date ?? "Por confirmar"}</dd></div>
              <div><dt>Materiales</dt><dd>${t.materials}</dd></div>
            </dl>
          </article>
        `
      )}
    </div>

    <div class="stat-grid cols-2">${statCard("expert-talks")} ${statCard("satisfaccion")}</div>
  </section>

  <section class="band" aria-labelledby="ficha">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Estándar editorial",
        title: "Qué necesita una sesión antes de publicarse",
        lead:
          "Una grabación suelta no es un recurso. Cada sesión se cataloga con la misma metadata mínima, para que pueda buscarse, citarse y reutilizarse años después.",
        id: "ficha",
      })}
      <ul class="check-list">
        ${talkMetadata.map((m) => html`<li>${m}</li>`)}
      </ul>
      ${callout({
        tone: "warn",
        icon: "◆",
        title: "Consentimiento de uso de imagen",
        body:
          "Ninguna grabación se publica sin el consentimiento explícito del ponente para el uso de su imagen y voz, registrado por separado de los términos generales de la plataforma.",
      })}
    </div>
  </section>
`;

export default {
  path: "/expert-talks",
  file: "expert-talks/index.html",
  title: "Expert Talks",
  description:
    "Ciclo de cuatro conferencias híbridas de PACTO-MI con especialistas nacionales sobre minería ilegal y crimen organizado en el Perú.",
  breadcrumb: true,
  body,
};
