/**
 * PACTO-MI Digital — interacciones del sitio.
 * Todo se ejecuta en el navegador: no hay peticiones a servidores ni
 * seguimiento de ningún tipo.
 */
(() => {
  "use strict";

  /* ------------------------------------------------------------ cabecera */

  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.dataset.elevated = window.scrollY > 8 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {
    const setOpen = (open) => {
      nav.dataset.open = String(open);
      navToggle.setAttribute("aria-expanded", String(open));
    };

    navToggle.addEventListener("click", () => {
      setOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        navToggle.focus();
      }
    });

    // Al volver a escritorio, el menú desplegable deja de aplicar.
    const desktop = window.matchMedia("(min-width: 1041px)");
    desktop.addEventListener("change", (e) => {
      if (e.matches) setOpen(false);
    });
  }

  /* -------------------------------------------------- filtros del hub ---- */

  const grid = document.querySelector("#resource-grid");
  if (grid) {
    const cards = Array.from(grid.querySelectorAll(".resource"));
    const search = document.querySelector("#resource-search");
    const chips = Array.from(document.querySelectorAll(".chip"));
    const counter = document.querySelector("#resource-count");
    const empty = document.querySelector("#resource-empty");

    // Normaliza para que "guia" encuentre "guía".
    const fold = (value) =>
      value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let activeType = "Todos";

    const apply = () => {
      const query = fold(search ? search.value.trim() : "");
      let visible = 0;

      for (const card of cards) {
        const matchesType = activeType === "Todos" || card.dataset.type === activeType;
        const matchesQuery = !query || fold(card.dataset.search).includes(query);
        const show = matchesType && matchesQuery;
        card.hidden = !show;
        if (show) visible += 1;
      }

      if (counter) {
        counter.textContent =
          visible === cards.length
            ? `Mostrando ${cards.length} de ${cards.length} recursos.`
            : `Mostrando ${visible} de ${cards.length} recursos.`;
      }
      if (empty) empty.hidden = visible !== 0;
    };

    for (const chip of chips) {
      chip.addEventListener("click", () => {
        activeType = chip.dataset.filter;
        for (const other of chips) {
          other.setAttribute("aria-pressed", String(other === chip));
        }
        apply();
      });
    }

    if (search) search.addEventListener("input", apply);
  }

  /* ------------------------------------------------------- action lab ---- */

  const form = document.querySelector("#action-form");
  const output = document.querySelector("#canvas-output");

  if (form && output) {
    const LABELS = {
      region: "Región",
      scope: "Ámbito",
      problem: "Problema priorizado",
      objective: "Objetivo de la acción",
      allies: "Aliados necesarios",
      deadline: "Plazo estimado",
      indicator: "Indicador principal",
      evidence: "Evidencia esperada",
      risks: "Riesgos y cuidados",
    };
    const ORDER = Object.keys(LABELS);

    const clearError = (field) => {
      field.removeAttribute("aria-invalid");
      const existing = field.parentElement.querySelector(".field-error");
      if (existing) existing.remove();
    };

    const showError = (field, message) => {
      clearError(field);
      field.setAttribute("aria-invalid", "true");
      const note = document.createElement("p");
      note.className = "field-error";
      note.textContent = message;
      field.parentElement.appendChild(note);
    };

    for (const field of form.querySelectorAll("[required]")) {
      field.addEventListener("input", () => {
        if (field.value.trim()) clearError(field);
      });
    }

    form.addEventListener("reset", () => {
      for (const field of form.querySelectorAll("[required]")) clearError(field);
      output.dataset.filled = "false";
      output.innerHTML = `
        <div class="lab-placeholder">
          <h3>Tu canvas aparecerá aquí</h3>
          <p>Completa los campos marcados con <em>*</em> y presiona <strong>Generar canvas</strong>.</p>
        </div>`;
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let firstInvalid = null;
      for (const field of form.querySelectorAll("[required]")) {
        if (field.value.trim()) {
          clearError(field);
        } else {
          showError(field, "Este campo es necesario para generar el canvas.");
          if (!firstInvalid) firstInvalid = field;
        }
      }
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const data = new FormData(form);
      const rows = ORDER.map((key) => [LABELS[key], (data.get(key) || "").toString().trim()]).filter(
        ([, value]) => value
      );

      const today = new Date().toLocaleDateString("es-PE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const escapeHtml = (value) =>
        value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

      output.dataset.filled = "true";
      output.innerHTML = `
        <div class="canvas-title">
          <h3>Action Canvas</h3>
          <span class="badge" data-tone="ok">Borrador</span>
        </div>
        <p class="canvas-meta">Generado el ${escapeHtml(today)} · PACTO-MI Action Lab</p>
        <dl class="canvas-fields">
          ${rows
            .map(
              ([label, value]) =>
                `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`
            )
            .join("")}
        </dl>
        <div class="canvas-actions">
          <button class="btn btn-primary btn-sm" type="button" data-action="print">Imprimir o guardar PDF</button>
          <button class="btn btn-ghost btn-sm" type="button" data-action="copy">Copiar como texto</button>
        </div>
        <p class="lab-privacy">
          Siguiente paso: comparte este borrador con un facilitador para revisarlo antes de ejecutarlo.
        </p>`;

      output.scrollIntoView({ behavior: "smooth", block: "nearest" });

      const printBtn = output.querySelector('[data-action="print"]');
      if (printBtn) printBtn.addEventListener("click", () => window.print());

      const copyBtn = output.querySelector('[data-action="copy"]');
      if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
          const text = [`ACTION CANVAS — PACTO-MI (${today})`, ""]
            .concat(rows.map(([label, value]) => `${label}: ${value}`))
            .join("\n");
          try {
            await navigator.clipboard.writeText(text);
            copyBtn.textContent = "Copiado";
          } catch {
            copyBtn.textContent = "No se pudo copiar";
          }
          setTimeout(() => {
            copyBtn.textContent = "Copiar como texto";
          }, 2000);
        });
      }
    });
  }
})();

/* --------------------------------------------- registro del service worker */
if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* Sin service worker el sitio sigue funcionando con normalidad. */
    });
  });
}
