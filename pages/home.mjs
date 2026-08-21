import { html, raw } from "../lib/html.mjs";
import { site, cycle } from "../content/site.mjs";
import { statCard, sectionHead, badge, callout } from "../lib/components.mjs";
import { modules } from "../content/modules.mjs";
import { events, EVENT_STATUS } from "../content/events.mjs";
import { cajamarcaOrgs, institutional } from "../content/partners.mjs";
import { factValue } from "../content/facts.mjs";

const nextEvent = events.find((e) => e.status === "en-planificacion");
const pastEvent = events.find((e) => e.status === "realizado");

const body = html`
  <section class="hero">
    <div class="shell hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">${site.projectEs}</p>
        <h1>Conocimiento que conecta.<br />Comunidad que actúa.<br />Impacto que se demuestra.</h1>
        <p class="lead">
          PACTO-MI Digital convierte los talleres, sesiones y materiales del proyecto en una plataforma
          permanente para aprender sobre minería ilegal, organizar acciones locales y demostrar resultados
          — sin exponer a quienes participan.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/aprende">Empieza a aprender</a>
          <a class="btn btn-ghost" href="/conoce">Conoce el problema</a>
        </div>
        <p class="hero-credential">
          ${badge("AEIF 2025", "ok")} Proyecto ganador global del Alumni Engagement Innovation Fund de la
          Embajada de los Estados Unidos · Cajamarca y Madre de Dios, Perú
        </p>
      </div>

      <aside class="hero-panel" aria-labelledby="ciclo-titulo">
        <h2 id="ciclo-titulo" class="panel-title">El ciclo PACTO-MI</h2>
        <ol class="cycle">
          ${cycle.map(
            (c, i) => html`
              <li>
                <span class="cycle-n" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
                <strong>${c.step}</strong>
                <span class="cycle-detail">${c.detail}</span>
              </li>
            `
          )}
        </ol>
      </aside>
    </div>
  </section>

  <section class="band band-dark" aria-labelledby="cifras-titulo">
    <div class="shell">
      <div class="band-head">
        <h2 id="cifras-titulo">El proyecto en cifras verificables</h2>
        <p>
          Cada número enlaza a su documento de origen. Lo que aún no se ha medido aparece como
          <em>sin dato registrado</em>, nunca como una estimación.
          <a href="/fuentes">Ver fuentes y metodología</a>
        </p>
      </div>
      <div class="stat-grid">
        ${statCard("participantes-cajamarca", { emphasis: true })} ${statCard("organizaciones")}
        ${statCard("beneficiarios-directos")} ${statCard("presupuesto")}
      </div>
    </div>
  </section>

  <section class="section shell" aria-labelledby="problema-titulo">
    ${sectionHead({
      eyebrow: "Por qué importa",
      title: "La minería ilegal no es solo un problema ambiental",
      lead: raw(
        "Devasta ecosistemas en sierra y selva, y al mismo tiempo alimenta una economía criminal ligada al narcotráfico, la trata de personas, el tráfico de armas y la corrupción. En Cajamarca y Madre de Dios eso se traduce en deforestación, contaminación por mercurio, violencia y trabajo forzoso."
      ),
      id: "problema-titulo",
    })}
    <div class="card-grid cols-3">
      <article class="card">
        <span class="card-n" aria-hidden="true">01</span>
        <h3>Daño ambiental</h3>
        <p>
          Deforestación y contaminación por mercurio que afectan suelos, ríos y salud comunitaria durante
          décadas después de la extracción.
        </p>
      </article>
      <article class="card">
        <span class="card-n" aria-hidden="true">02</span>
        <h3>Economía criminal</h3>
        <p>
          El oro ilegal se convierte en un vehículo de lavado que distorsiona los mercados formales y
          debilita las instituciones locales.
        </p>
      </article>
      <article class="card">
        <span class="card-n" aria-hidden="true">03</span>
        <h3>Brecha de información</h3>
        <p>
          Muchas comunidades creen que la minería informal solo genera empleo, y buena parte de la
          población universitaria desconoce el problema o permanece al margen.
        </p>
      </article>
    </div>
    <p class="section-cta">
      <a class="btn btn-ghost" href="/conoce">Profundiza en la sección Conoce</a>
    </p>
  </section>

  <section class="band" aria-labelledby="rutas-titulo">
    <div class="shell">
      ${sectionHead({
        eyebrow: "Cómo participar",
        title: "Tres rutas, un mismo objetivo",
        lead: "La plataforma está organizada según lo que necesitas hacer hoy.",
        id: "rutas-titulo",
      })}
      <div class="card-grid cols-3">
        <a class="card card-link" href="/aprende">
          <h3>Aprende</h3>
          <p>
            ${modules.length} módulos formativos sobre minería ilegal, crimen organizado, impactos,
            comunicación estratégica, política pública y planes de acción.
          </p>
          <span class="card-arrow" aria-hidden="true">→</span>
        </a>
        <a class="card card-link" href="/recursos">
          <h3>Consulta recursos</h3>
          <p>
            El Knowledge Hub reúne el toolkit, las guías y los materiales del proyecto, cada uno con
            fuente, versión, responsable y estado de revisión.
          </p>
          <span class="card-arrow" aria-hidden="true">→</span>
        </a>
        <a class="card card-link" href="/actua">
          <h3>Actúa</h3>
          <p>
            El Action Lab te guía para convertir lo aprendido en un plan local con objetivo, aliados,
            indicador y evidencia esperada.
          </p>
          <span class="card-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>

  <section class="section shell split-section" aria-labelledby="cajamarca-titulo">
    <div>
      ${sectionHead({
        eyebrow: "Tracción real",
        title: "Empezó con 220 personas en Cajamarca",
        id: "cajamarca-titulo",
      })}
      <p>
        El ${pastEvent.dateLabel}, ${pastEvent.attendance} personas participaron en el primer taller
        presencial del proyecto, en representación de ${cajamarcaOrgs.length} organizaciones juveniles y de
        voluntariado, además de estudiantes universitarios, ciudadanía independiente y representantes
        institucionales.
      </p>
      <p>${pastEvent.method}</p>
      <ul class="pill-list">
        ${cajamarcaOrgs.map((o) => html`<li>${o}</li>`)}
      </ul>
      <p class="section-cta">
        <a class="btn btn-ghost" href="/eventos">Ver todos los eventos</a>
      </p>
    </div>
    <aside class="event-next">
      <p class="eyebrow">Próxima etapa</p>
      <h3>${nextEvent.title}</h3>
      <p class="event-meta">
        ${badge(EVENT_STATUS[nextEvent.status].label, EVENT_STATUS[nextEvent.status].tone)}
        <span>${nextEvent.city}, ${nextEvent.region}</span>
      </p>
      <p>${nextEvent.summary}</p>
      <p class="event-date">${nextEvent.dateLabel}</p>
      <a class="btn btn-primary" href="/eventos#${nextEvent.id}">Detalles del evento</a>
    </aside>
  </section>

  <section class="band" aria-labelledby="privacidad-titulo">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Compromiso",
        title: "Una plataforma diseñada para no poner a nadie en riesgo",
        id: "privacidad-titulo",
        align: "center",
      })}
      ${callout({
        tone: "warn",
        icon: "◆",
        title: "Lo que PACTO-MI no hace",
        body: raw(
          "No recibe denuncias, no publica acusaciones contra personas identificadas, no muestra mapas de operaciones reportadas y no expone direcciones, teléfonos, correos ni coordenadas de sus participantes. El directorio territorial funciona solo con consentimiento explícito y revocable."
        ),
      })}
      <p class="center-cta">
        <a class="btn btn-ghost" href="/privacidad">Leer la política de privacidad y seguridad</a>
      </p>
    </div>
  </section>

  <section class="section shell" aria-labelledby="respaldo-titulo">
    ${sectionHead({
      eyebrow: "Respaldo institucional",
      title: "Quién está detrás",
      lead: `Un equipo de cinco exbecarios Fulbright cajamarquinos, con ${factValue("duracion")} de ejecución y aliados académicos, científicos, gremiales y empresariales.`,
      id: "respaldo-titulo",
    })}
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
    <p class="section-cta">
      <a class="btn btn-ghost" href="/nosotros">Conoce al equipo y a los aliados</a>
    </p>
  </section>
`;

export default {
  path: "/",
  file: "index.html",
  title: "Inicio",
  description: site.description,
  body,
};
