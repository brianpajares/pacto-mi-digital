import { html } from "../lib/html.mjs";
import { pageHero, sectionHead, statCard, callout } from "../lib/components.mjs";
import { team } from "../content/team.mjs";
import { partners, institutional } from "../content/partners.mjs";
import { site } from "../content/site.mjs";

const initials = (name) =>
  name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

const body = html`
  ${pageHero({
    eyebrow: "Nosotros",
    title: "Cinco exbecarios Fulbright, dos regiones, un compromiso",
    lead:
      "PACTO-MI nació cuando un grupo de profesionales cajamarquinos formados en programas de intercambio de los Estados Unidos identificó la misma brecha desde ángulos distintos: la sociedad no tiene información confiable sobre lo que la minería ilegal realmente provoca.",
    meta: ["Ganadores globales AEIF 2025", "Cajamarca y Madre de Dios", "9 meses de ejecución"],
  })}

  <section class="section shell" aria-labelledby="origen">
    <div class="split-section">
      <div class="prose">
        ${sectionHead({ eyebrow: "Origen", title: "Cómo nace el proyecto", id: "origen" })}
        <p>
          El <strong>Alumni Engagement Innovation Fund</strong> es una iniciativa de la Embajada de los
          Estados Unidos dirigida a exbecarios de programas de intercambio educativo. Financia proyectos de
          responsabilidad social y empoderamiento territorial en el Perú.
        </p>
        <p>
          Cada año las propuestas atraviesan una evaluación en dos etapas, una nacional y otra global. En
          2025, el equipo presentó <em>${site.project}</em> y fue reconocido como ganador global del fondo.
        </p>
        <p>
          Así nace PACTO-MI: una red de acción juvenil contra la minería ilegal y el crimen organizado,
          concebida como plataforma de liderazgo y acción colectiva en Cajamarca y Madre de Dios.
        </p>
      </div>
      <div class="stat-grid cols-1">
        ${statCard("presupuesto")} ${statCard("duracion")} ${statCard("beneficiarios-directos")}
      </div>
    </div>
  </section>

  <section class="band" aria-labelledby="equipo">
    <div class="shell">
      ${sectionHead({
        eyebrow: "Equipo ejecutor",
        title: "Quiénes lo hacen",
        lead: "Los cinco integrantes son exbecarios Fulbright del Perú.",
        id: "equipo",
      })}
      <div class="team-grid">
        ${team.map(
          (p) => html`
            <article class="person">
              <span class="person-avatar" aria-hidden="true">${initials(p.name)}</span>
              <h3>${p.name}</h3>
              <p class="person-role">${p.role}</p>
              <p class="person-program">${p.program}</p>
              <p class="person-bio">${p.bio}</p>
            </article>
          `
        )}
      </div>
    </div>
  </section>

  <section class="section shell" aria-labelledby="aliados">
    ${sectionHead({
      eyebrow: "Aliados",
      title: "Con quiénes trabajamos",
      lead:
        "Aliados académicos, científicos, gremiales y empresariales que aportan credibilidad técnica, convocatoria y sostenibilidad al proyecto.",
      id: "aliados",
    })}
    <div class="partner-grid">
      ${partners.map(
        (p) => html`
          <article class="partner">
            <p class="partner-kind">${p.kind} · ${p.region}</p>
            <h3>${p.name}</h3>
            <p>${p.detail}</p>
          </article>
        `
      )}
    </div>
  </section>

  <section class="band band-dark" aria-labelledby="respaldo">
    <div class="shell">
      ${sectionHead({ eyebrow: "Respaldo institucional", title: "Financiamiento y programas", id: "respaldo" })}
      <ul class="org-list">
        ${institutional.map(
          (i) => html`
            <li>
              <strong>${i.name}</strong>
              <span>${i.detail}</span>
            </li>
          `
        )}
      </ul>
      ${callout({
        tone: "info",
        icon: "i",
        title: "Sobre el uso de logotipos",
        body:
          "Los nombres se muestran como referencia institucional. Las marcas gráficas de las entidades aliadas y financiadoras solo se publican con la autorización escrita correspondiente y respetando los lineamientos de co-branding del grant.",
      })}
    </div>
  </section>

  <section class="section shell narrow" aria-labelledby="contacto">
    ${sectionHead({ eyebrow: "Contacto", title: "Hablemos", id: "contacto", align: "center" })}
    <p class="center-text">
      Si representas a una organización juvenil, una universidad, una institución pública o una empresa que
      quiera sumarse al proyecto en Cajamarca o Madre de Dios, escríbenos.
    </p>
    <ul class="contact-list">
      <li><span>Correo</span><a href="mailto:${site.contact.email}">${site.contact.email}</a></li>
      <li><span>Teléfono</span><a href="tel:${site.contact.phoneHref}">${site.contact.phone}</a></li>
      <li><span>LinkedIn</span><a href="${site.contact.linkedin}" rel="noopener">PACTO-MI</a></li>
    </ul>
  </section>
`;

export default {
  path: "/nosotros",
  file: "nosotros/index.html",
  title: "Nosotros",
  description:
    "El equipo de cinco exbecarios Fulbright detrás de PACTO-MI, los aliados académicos, científicos y empresariales del proyecto, y el respaldo del Alumni Engagement Innovation Fund 2025.",
  breadcrumb: true,
  body,
};
