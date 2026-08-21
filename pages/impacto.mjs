import { html, raw } from "../lib/html.mjs";
import { pageHero, sectionHead, statCard, progressBar, callout } from "../lib/components.mjs";
import { progress, facts } from "../content/facts.mjs";

const unmeasured = facts.filter((f) => f.value === null);

const body = html`
  ${pageHero({
    eyebrow: "Impacto y M&E",
    title: "Dashboard público",
    lead:
      "Solo cifras agregadas, nunca datos personales. Lo que todavía no se ha medido aparece como un hueco explícito, porque un número inventado en un proyecto sobre crimen organizado destruye exactamente la confianza que buscamos construir.",
    meta: ["Datos agregados", "Cada cifra con fuente", "Actualizado en agosto de 2026"],
  })}

  <section class="section shell" aria-labelledby="metas">
    ${sectionHead({
      eyebrow: "Metas vs. avance",
      title: "Compromisos del grant y su estado",
      lead:
        "Las metas provienen de la matriz de monitoreo y evaluación de la propuesta AEIF 2025. El avance solo se muestra cuando existe un registro documentado.",
      id: "metas",
    })}
    <div class="progress-list">
      ${progress.map((p) => progressBar({ label: p.label, metaId: p.meta, realId: p.real }))}
    </div>
  </section>

  <section class="band band-dark" aria-labelledby="verificado">
    <div class="shell">
      ${sectionHead({
        eyebrow: "Verificado",
        title: "Lo que ya ocurrió",
        lead: "Resultados documentados en los informes del proyecto.",
        id: "verificado",
      })}
      <div class="stat-grid">
        ${statCard("participantes-cajamarca", { emphasis: true })} ${statCard("organizaciones")}
        ${statCard("regiones")} ${statCard("duracion")}
      </div>
    </div>
  </section>

  <section class="section shell" aria-labelledby="compromisos">
    ${sectionHead({
      eyebrow: "Compromisos",
      title: "Lo que el proyecto se comprometió a lograr",
      id: "compromisos",
    })}
    <div class="stat-grid">
      ${statCard("beneficiarios-directos")} ${statCard("beneficiarios-indirectos")}
      ${statCard("estudiantes")} ${statCard("lideres")} ${statCard("expert-talks")}
      ${statCard("toolkits")} ${statCard("planes-accionables")} ${statCard("satisfaccion")}
    </div>
  </section>

  <section class="band" aria-labelledby="pendiente">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Honestidad de datos",
        title: `${unmeasured.length} indicadores sin medición todavía`,
        lead:
          "Estos indicadores requieren funciones que aún no están habilitadas en la plataforma. Publicamos el hueco en lugar de rellenarlo.",
        id: "pendiente",
      })}
      <ul class="gap-list">
        ${unmeasured.map(
          (f) => html`
            <li>
              <strong>${f.label}</strong>
              <span>${f.detail}</span>
            </li>
          `
        )}
      </ul>
      ${callout({
        tone: "warn",
        icon: "◆",
        title: "Por qué esto importa",
        body: raw(
          "Un dashboard con números plausibles pero inventados es indistinguible de uno real hasta que alguien lo audita — y para entonces el daño reputacional ya ocurrió. Este sitio prefiere mostrar menos y sostener cada cifra."
        ),
      })}
    </div>
  </section>

  <section class="section shell" aria-labelledby="dimensiones">
    ${sectionHead({
      eyebrow: "Marco M&E",
      title: "Qué mide el proyecto",
      lead: "Las nueve dimensiones que la plataforma captura de forma nativa cuando el backend esté operativo.",
      id: "dimensiones",
    })}
    <div class="card-grid cols-3">
      ${[
        ["Participación", "Registros, asistencia, usuarios activos, región y organización."],
        ["Aprendizaje", "Evaluación previa y posterior, quizzes, módulos completados y mejora porcentual."],
        ["Calidad de acción", "Planes creados, rúbrica aplicada, estado y revisión."],
        ["Toolkit", "Descargas, entregas y uso posterior reportado."],
        ["Eventos", "Inscritos, asistencia efectiva, satisfacción y relevancia."],
        ["Comunidad", "Usuarios activos, publicaciones, interacciones y grupos."],
        ["Replicación", "Actividades, personas alcanzadas, regiones y evidencias."],
        ["Comunicación", "Alcance, clics, sesiones y referidos."],
        ["Impacto", "Historias validadas, organizaciones movilizadas y cobertura territorial."],
      ].map(
        ([title, detail]) => html`
          <article class="card card-compact">
            <h3>${title}</h3>
            <p>${detail}</p>
          </article>
        `
      )}
    </div>
  </section>
`;

export default {
  path: "/impacto",
  file: "impacto/index.html",
  title: "Impacto y M&E",
  description:
    "Dashboard público de PACTO-MI: metas comprometidas ante el AEIF 2025, avance documentado e indicadores todavía sin medición, cada cifra con su fuente.",
  breadcrumb: true,
  body,
};
