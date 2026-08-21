const resources = [
  {
    title: "Toolkit digital PACTO-MI",
    type: "Toolkit",
    region: "Nacional",
    summary: "Guia base para talleres, replicas y acciones de advocacy juvenil.",
    source: "AEIF / PACTO-MI",
    version: "v1.0",
    tags: ["toolkit", "replica", "accion"]
  },
  {
    title: "Mineria ilegal: impactos y rutas de prevencion",
    type: "Infografia",
    region: "Cajamarca",
    summary: "Resumen visual para explicar impactos ambientales, sociales y economicos.",
    source: "Equipo editorial",
    version: "revision tecnica",
    tags: ["impactos", "conoce"]
  },
  {
    title: "Expert Talk: crimen organizado y territorio",
    type: "Video",
    region: "Madre de Dios",
    summary: "Sesion catalogada con ponente, fecha, preguntas clave y materiales relacionados.",
    source: "Expert Talks 2026",
    version: "grabacion",
    tags: ["video", "expert-talk"]
  },
  {
    title: "Guia de plan de accion local",
    type: "Guia",
    region: "Nacional",
    summary: "Plantilla practica para objetivos, actores, indicadores, riesgos y evidencias.",
    source: "Action Lab",
    version: "v1.0",
    tags: ["action-lab", "canvas"]
  },
  {
    title: "Mitos y realidades sobre formalizacion",
    type: "Infografia",
    region: "Cajamarca",
    summary: "Contenido educativo para diferenciar conceptos sin exponer casos sensibles.",
    source: "Revision tematica pendiente",
    version: "borrador",
    tags: ["formalizacion", "faq"]
  },
  {
    title: "Ficha de registro de replica",
    type: "Guia",
    region: "Nacional",
    summary: "Campos minimos para reportar actividad, alcance, evidencia y validacion M&E.",
    source: "M&E",
    version: "v1.0",
    tags: ["replica", "indicadores"]
  }
];

const modules = [
  ["Introduccion a la mineria ilegal en el Peru", "Video corto, mapa conceptual, caso y quiz de base.", 76],
  ["Vinculos con crimen organizado", "Storytelling guiado, esquema de relaciones y reflexion segura.", 52],
  ["Consecuencias ambientales y socioeconomicas", "Infografias, datos, caso territorial y actividad aplicada.", 61],
  ["Comunicacion estrategica y advocacy digital", "Plantillas, simulacion de campana y publicacion modelo.", 45],
  ["Politica publica y mecanismos legales", "Guia navegable, glosario y caso practico.", 38],
  ["Planes de accion local", "Wizard, pitch, rubrica, evidencia y seguimiento.", 68]
];

const impactData = {
  Todas: [
    ["Miembros capacitados", 220, 300],
    ["Organizaciones juveniles", 11, 20],
    ["Planes de accion", 74, 270],
    ["Recursos descargados", 418, 700]
  ],
  Cajamarca: [
    ["Miembros capacitados", 220, 225],
    ["Organizaciones juveniles", 11, 14],
    ["Planes de accion", 66, 200],
    ["Recursos descargados", 286, 450]
  ],
  "Madre de Dios": [
    ["Miembros capacitados", 0, 75],
    ["Organizaciones juveniles", 0, 6],
    ["Planes de accion", 8, 70],
    ["Recursos descargados", 132, 250]
  ]
};

const header = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const resourceGrid = document.querySelector("#resource-grid");
const resourceSearch = document.querySelector("#resource-search");
const moduleList = document.querySelector("#module-list");
const regionSelect = document.querySelector("#region-select");
const dashboard = document.querySelector("#impact-dashboard");
const actionForm = document.querySelector("#action-form");
const canvasOutput = document.querySelector("#canvas-output");

window.addEventListener("scroll", () => {
  header.dataset.elevated = window.scrollY > 8 ? "true" : "false";
});

navToggle.addEventListener("click", () => {
  const open = nav.dataset.open !== "true";
  nav.dataset.open = String(open);
  navToggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.dataset.open = "false";
    navToggle.setAttribute("aria-expanded", "false");
  }
});

function renderResources(filter = "Todos", query = "") {
  const normalized = query.trim().toLowerCase();
  const filtered = resources.filter((resource) => {
    const matchesType = filter === "Todos" || resource.type === filter;
    const searchable = `${resource.title} ${resource.summary} ${resource.region} ${resource.tags.join(" ")}`.toLowerCase();
    return matchesType && (!normalized || searchable.includes(normalized));
  });

  resourceGrid.innerHTML = filtered.map((resource) => `
    <article class="resource-card">
      <div class="tag-row">
        <span class="tag">${resource.type}</span>
        <span class="tag">${resource.region}</span>
      </div>
      <div>
        <h3>${resource.title}</h3>
        <p>${resource.summary}</p>
      </div>
      <div class="resource-meta">Fuente: ${resource.source} · ${resource.version}</div>
    </article>
  `).join("") || `<p>No hay recursos para ese filtro.</p>`;
}

document.querySelectorAll(".chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    renderResources(button.dataset.filter, resourceSearch.value);
  });
});

resourceSearch.addEventListener("input", () => {
  const active = document.querySelector(".chip.active")?.dataset.filter || "Todos";
  renderResources(active, resourceSearch.value);
});

function renderModules() {
  moduleList.innerHTML = modules.map(([title, description, progress], index) => `
    <article class="module-card">
      <span class="module-number">${index + 1}</span>
      <div>
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="progress-track" aria-label="Progreso demo ${progress}%"><span style="width:${progress}%"></span></div>
      </div>
    </article>
  `).join("");
}

function renderDashboard(region = "Todas") {
  dashboard.innerHTML = impactData[region].map(([label, value, target]) => {
    const pct = Math.min(100, Math.round((value / target) * 100));
    return `
      <article class="dashboard-card">
        <strong>${value}</strong>
        <span>${label}</span>
        <div class="bar" aria-label="${pct}% de la meta"><span style="width:${pct}%"></span></div>
      </article>
    `;
  }).join("");
}

regionSelect.addEventListener("change", () => renderDashboard(regionSelect.value));

actionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(actionForm);
  const region = data.get("region");
  const problem = data.get("problem");
  const objective = data.get("objective");
  const indicator = data.get("indicator");
  canvasOutput.dataset.visible = "true";
  canvasOutput.innerHTML = `
    <strong>Action Canvas generado</strong>
    <p><b>Region:</b> ${region}</p>
    <p><b>Problema:</b> ${problem}</p>
    <p><b>Objetivo:</b> ${objective}</p>
    <p><b>Indicador:</b> ${indicator}</p>
    <p><b>Siguiente paso:</b> asignar aliados, fecha, evidencia esperada y revision de facilitador.</p>
  `;
});

function animateCounters() {
  document.querySelectorAll("[data-count]").forEach((node) => {
    const target = Number(node.dataset.count);
    const duration = 900;
    const started = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - started) / duration);
      node.textContent = Math.round(target * progress);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

renderResources();
renderModules();
renderDashboard();
animateCounters();
