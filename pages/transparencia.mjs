import { html, raw } from "../lib/html.mjs";
import { pageHero, sectionHead, badge, callout } from "../lib/components.mjs";
import { site } from "../content/site.mjs";

/** Estado real de cada módulo del PRD en esta versión desplegada. */
const featureStatus = [
  ["Portal público y narrativa institucional", "activo", "Páginas Inicio, Conoce, Nosotros y Eventos publicadas."],
  ["Knowledge Hub", "activo", "Catálogo con búsqueda, filtros y metadata editorial. Las descargas dependen del estado de cada recurso."],
  ["PACTO-MI Academy", "parcial", "Los seis módulos están publicados como estructura con objetivos. Falta el contenido audiovisual y las evaluaciones."],
  ["Expert Talks", "parcial", "Ciclo y ponentes publicados. Faltan fichas completas y grabaciones."],
  ["Action Lab", "activo", "El generador de Action Canvas funciona en el navegador, sin envío de datos."],
  ["Dashboard público de impacto", "activo", "Muestra metas y avance documentado, y declara los indicadores sin medición."],
  ["Fuentes y metodología", "activo", "Cada cifra publicada con su documento de origen."],
  ["Registro y autenticación", "pendiente", "Requiere backend con Supabase Auth, perfiles y consentimientos."],
  ["Directorio territorial", "pendiente", "Depende del registro y del consentimiento opt-in por participante."],
  ["Comunidad moderada", "pendiente", "Requiere autenticación, moderación y registro de auditoría."],
  ["Registro de réplicas", "pendiente", "Requiere almacenamiento de evidencia y validación M&E."],
  ["CMS administrativo", "pendiente", "El contenido se edita hoy en el repositorio, no mediante panel."],
  ["Analítica de producto", "pendiente", "Sin instrumentación. El sitio no usa cookies ni rastreadores."],
  ["Certificados", "pendiente", "Prioridad P2 en el backlog del PRD."],
];

const STATUS = {
  activo: { label: "Activo", tone: "ok" },
  parcial: { label: "Parcial", tone: "warn" },
  pendiente: { label: "Pendiente", tone: "idle" },
};

const counts = featureStatus.reduce((acc, [, s]) => ({ ...acc, [s]: (acc[s] || 0) + 1 }), {});

const body = html`
  ${pageHero({
    eyebrow: "Transparencia",
    title: "Qué funciona hoy y qué todavía no",
    lead:
      "Un sitio publicado con secciones vacías o botones que no hacen nada erosiona la confianza más que admitir el estado real. Esta página es el inventario honesto de la plataforma.",
    meta: [
      `${counts.activo} funciones activas`,
      `${counts.parcial} parciales`,
      `${counts.pendiente} pendientes`,
    ],
  })}

  <section class="section shell" aria-labelledby="estado">
    ${sectionHead({
      eyebrow: "Estado",
      title: "Inventario de funciones",
      lead: `Contrastado contra el alcance definido en el PRD ${site.prdVersion}.`,
      id: "estado",
    })}
    <div class="status-table-wrap">
      <table class="status-table">
        <caption class="sr-only">Estado de cada función de la plataforma</caption>
        <thead>
          <tr>
            <th scope="col">Función</th>
            <th scope="col">Estado</th>
            <th scope="col">Detalle</th>
          </tr>
        </thead>
        <tbody>
          ${featureStatus.map(
            ([name, status, detail]) => html`
              <tr>
                <th scope="row">${name}</th>
                <td>${badge(STATUS[status].label, STATUS[status].tone)}</td>
                <td>${detail}</td>
              </tr>
            `
          )}
        </tbody>
      </table>
    </div>
  </section>

  <section class="band" aria-labelledby="arquitectura">
    <div class="shell narrow prose">
      ${sectionHead({
        eyebrow: "Decisión técnica",
        title: "Por qué esta versión es un sitio estático",
        id: "arquitectura",
      })}
      <p>
        La plataforma completa descrita en el PRD necesita autenticación, base de datos con seguridad a
        nivel de fila, almacenamiento de evidencia y un panel administrativo. Construir todo eso antes de
        publicar habría dejado al proyecto sin presencia pública durante meses.
      </p>
      <p>
        La decisión fue publicar primero la capa que no requiere datos personales — narrativa, conocimiento,
        estructura formativa, transparencia de cifras — y hacerlo con una arquitectura que no acumula
        deuda: el sitio se genera desde módulos de contenido versionados, sin dependencias externas ni
        base de datos que asegurar.
      </p>
      <p>
        Eso también significa que <strong>hoy no hay superficie de ataque sobre datos de participantes</strong>,
        porque no hay datos de participantes. Las cuentas se habilitarán cuando el control de acceso esté
        implementado y probado, no antes.
      </p>
      ${callout({
        tone: "ok",
        icon: "✓",
        title: "Sin cookies ni rastreadores",
        body: raw(
          "Este sitio no instala cookies, no carga scripts ni tipografías de terceros y no envía datos de navegación a ningún servicio de analítica. Ninguna página hace una sola petición a un dominio externo, y el sitio no guarda nada en el almacenamiento local de tu navegador. El tema claro u oscuro sigue la preferencia de tu sistema, sin registrarla."
        ),
      })}
    </div>
  </section>

  <section class="section shell narrow prose" aria-labelledby="ruta">
    ${sectionHead({ eyebrow: "Hoja de ruta", title: "Qué sigue", id: "ruta" })}
    <ol class="roadmap">
      <li>
        <strong>Contenido formativo</strong>
        <span>Producir los materiales de los seis módulos y publicar las fichas completas de Expert Talks.</span>
      </li>
      <li>
        <strong>Cuentas y consentimientos</strong>
        <span>Autenticación, perfiles y las tres decisiones de consentimiento separadas.</span>
      </li>
      <li>
        <strong>Action Lab persistente</strong>
        <span>Guardar planes, revisarlos con facilitadores y exportarlos.</span>
      </li>
      <li>
        <strong>Réplicas y evidencia</strong>
        <span>Registro de actividades con validación M&E y archivos privados.</span>
      </li>
      <li>
        <strong>Directorio y comunidad</strong>
        <span>Solo después de que el control de acceso y la moderación estén probados.</span>
      </li>
      <li>
        <strong>CMS</strong>
        <span>Para que el equipo publique contenido sin depender de un desarrollador.</span>
      </li>
    </ol>
  </section>

  <section class="band band-dark" aria-labelledby="codigo">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Código abierto al escrutinio",
        title: "El sitio se puede auditar",
        id: "codigo",
        align: "center",
      })}
      <p class="center-text">
        El código fuente y la documentación técnica están disponibles en el repositorio del proyecto,
        incluyendo el PRD completo y las verificaciones automáticas que impiden publicar cifras sin fuente.
      </p>
      <p class="center-cta">
        <a class="btn btn-primary" href="${site.repo}" rel="noopener">Ver el repositorio</a>
        <a class="btn btn-ghost" href="/fuentes">Ver fuentes de datos</a>
      </p>
    </div>
  </section>
`;

export default {
  path: "/transparencia",
  file: "transparencia/index.html",
  title: "Transparencia",
  description:
    "Inventario honesto del estado de PACTO-MI Digital: qué funciones están activas, cuáles son parciales y cuáles siguen pendientes, con la hoja de ruta del proyecto.",
  breadcrumb: true,
  body,
};
