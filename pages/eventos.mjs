import { html } from "../lib/html.mjs";
import { pageHero, sectionHead, badge, callout } from "../lib/components.mjs";
import { events, EVENT_STATUS } from "../content/events.mjs";
import { cajamarcaOrgs, cajamarcaUniversities } from "../content/partners.mjs";
import { site } from "../content/site.mjs";

const body = html`
  ${pageHero({
    eyebrow: "Eventos",
    title: "Talleres presenciales y sesiones del proyecto",
    lead:
      "Cada evento se publica con su fecha, su convocatoria y, cuando ya ocurrió, con la asistencia efectivamente registrada.",
    meta: ["Cajamarca y Madre de Dios", "Metodología participativa", "Convocatoria abierta"],
  })}

  <section class="section shell" aria-labelledby="agenda">
    ${sectionHead({ eyebrow: "Agenda", title: "Eventos del proyecto", id: "agenda" })}

    <div class="event-list">
      ${events.map(
        (e) => html`
          <article class="event" id="${e.id}">
            <div class="event-date-block">
              <span class="event-date-label">${e.dateLabel}</span>
              ${badge(EVENT_STATUS[e.status].label, EVENT_STATUS[e.status].tone)}
            </div>
            <div class="event-body">
              <h3>${e.title}</h3>
              <p class="event-place">${e.city}, ${e.region}</p>
              <p>${e.summary}</p>
              <p class="event-method"><strong>Metodología:</strong> ${e.method}</p>
              ${e.attendance
                ? html`<p class="event-attendance">
                    <strong>${e.attendance}</strong> participantes registrados
                  </p>`
                : html`<p class="event-attendance event-attendance-pending">
                    Asistencia por registrar · la cifra se publica después del evento
                  </p>`}
            </div>
          </article>
        `
      )}
    </div>
  </section>

  <section class="band" aria-labelledby="quienes">
    <div class="shell">
      ${sectionHead({
        eyebrow: "Taller de Cajamarca",
        title: "Quiénes estuvieron",
        lead:
          "Once organizaciones juveniles y de voluntariado, junto con estudiantes de tres casas de estudio, además de ciudadanía independiente y representantes de instituciones públicas y privadas.",
        id: "quienes",
      })}
      <div class="split-lists">
        <div>
          <h3>Organizaciones juveniles y de voluntariado</h3>
          <ul class="pill-list">
            ${cajamarcaOrgs.map((o) => html`<li>${o}</li>`)}
          </ul>
        </div>
        <div>
          <h3>Casas de estudio</h3>
          <ul class="pill-list">
            ${cajamarcaUniversities.map((u) => html`<li>${u}</li>`)}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section shell narrow" aria-labelledby="participar">
    ${sectionHead({
      eyebrow: "Participar",
      title: "Cómo sumarse a la siguiente sesión",
      id: "participar",
      align: "center",
    })}
    <p class="center-text">
      La convocatoria se difunde a través de las universidades y organizaciones aliadas de cada región.
      Si representas a una organización que quiera participar o coorganizar, escríbenos.
    </p>
    ${callout({
      tone: "info",
      icon: "i",
      title: "Sobre el registro de asistentes",
      body:
        "El registro a eventos recoge únicamente lo necesario para organizar la sesión y emitir constancia. El consentimiento para uso de fotografías se solicita por separado y puede negarse sin perder el acceso al evento.",
    })}
    <p class="center-cta">
      <a class="btn btn-primary" href="mailto:${site.contact.email}?subject=Participaci%C3%B3n%20en%20eventos%20PACTO-MI">
        Escribir al equipo
      </a>
    </p>
  </section>
`;

export default {
  path: "/eventos",
  file: "eventos/index.html",
  title: "Eventos",
  description:
    "Talleres presenciales de PACTO-MI en Cajamarca y Madre de Dios: fechas, convocatoria, metodología participativa y asistencia registrada.",
  breadcrumb: true,
  schema: {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Taller presencial PACTO-MI Cajamarca",
    startDate: "2025-11-19",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Cajamarca, Perú",
      address: { "@type": "PostalAddress", addressRegion: "Cajamarca", addressCountry: "PE" },
    },
    organizer: { "@type": "Organization", name: "PACTO-MI", url: "https://pacto-mi-digital.vercel.app" },
    description:
      "Primer taller presencial del proyecto Youth Action Network Against Illegal Mining and Organized Crime.",
  },
  body,
};
