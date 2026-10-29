import { html, raw } from "../lib/html.mjs";
import { pageHero, sectionHead, callout } from "../lib/components.mjs";

const body = html`
  ${pageHero({
    eyebrow: "Action Lab",
    title: "Convierte lo aprendido en un plan local",
    lead:
      "El Action Canvas es la herramienta con la que cada participante formula una acción concreta: qué problema aborda, con quién, en qué plazo y cómo sabrá si funcionó.",
    meta: ["9 campos", "Exportable", "Nada se envía a un servidor"],
  })}

  <section class="section shell" aria-labelledby="canvas">
    ${sectionHead({
      eyebrow: "Herramienta",
      title: "Genera tu Action Canvas",
      lead:
        "Completa los campos y obtendrás una ficha lista para imprimir o guardar. Puedes usarla como borrador antes de presentarla a un facilitador.",
      id: "canvas",
    })}

    <div class="lab">
      <form id="action-form" class="lab-form" novalidate>
        <div class="field-row">
          <label class="field">
            <span class="field-label">Región <em>*</em></span>
            <select name="region" required>
              <option value="">Selecciona una región</option>
              <option>Cajamarca</option>
              <option>Madre de Dios</option>
              <option>Otra región del Perú</option>
            </select>
          </label>
          <label class="field">
            <span class="field-label">Ámbito de la acción <em>*</em></span>
            <select name="scope" required>
              <option value="">Selecciona un ámbito</option>
              <option>Universidad o instituto</option>
              <option>Organización juvenil</option>
              <option>Comunidad o barrio</option>
              <option>Espacio digital</option>
            </select>
          </label>
        </div>

        <label class="field">
          <span class="field-label">Problema priorizado <em>*</em></span>
          <input
            name="problem"
            required
            maxlength="160"
            placeholder="Ej. estudiantes de mi facultad no distinguen minería informal de ilegal"
          />
          <span class="field-hint">Un solo problema, formulado en una frase.</span>
        </label>

        <label class="field">
          <span class="field-label">Objetivo de la acción <em>*</em></span>
          <textarea
            name="objective"
            required
            rows="3"
            maxlength="400"
            placeholder="Describe el cambio concreto que quieres lograr y en cuánto tiempo"
          ></textarea>
        </label>

        <div class="field-row">
          <label class="field">
            <span class="field-label">Aliados necesarios</span>
            <input name="allies" maxlength="160" placeholder="Ej. centro federado, docente del curso, ONG local" />
          </label>
          <label class="field">
            <span class="field-label">Plazo estimado</span>
            <input name="deadline" maxlength="80" placeholder="Ej. 8 semanas" />
          </label>
        </div>

        <label class="field">
          <span class="field-label">Indicador principal <em>*</em></span>
          <input
            name="indicator"
            required
            maxlength="160"
            placeholder="Ej. 40 estudiantes completan la sesión y aprueban el test posterior"
          />
          <span class="field-hint">Debe poder contarse. Si no se puede contar, no es un indicador.</span>
        </label>

        <label class="field">
          <span class="field-label">Evidencia esperada</span>
          <input name="evidence" maxlength="160" placeholder="Ej. lista de asistencia, fotografías con consentimiento, resultados del test" />
        </label>

        <label class="field">
          <span class="field-label">Riesgos y cuidados</span>
          <textarea
            name="risks"
            rows="2"
            maxlength="300"
            placeholder="Ej. evitar mencionar nombres o ubicaciones; coordinar con la autoridad universitaria"
          ></textarea>
        </label>

        <div class="lab-actions">
          <button class="btn btn-primary" type="submit">Generar canvas</button>
          <button class="btn btn-ghost" type="reset">Limpiar</button>
        </div>
        <p class="lab-privacy">
          Este formulario funciona íntegramente en tu navegador. Nada de lo que escribas se envía ni se
          almacena en un servidor de PACTO-MI.
        </p>
      </form>

      <output id="canvas-output" class="lab-output" aria-live="polite">
        <div class="lab-placeholder">
          <h3>Tu canvas aparecerá aquí</h3>
          <p>
            Completa los campos marcados con <em>*</em> y presiona <strong>Generar canvas</strong>. Podrás
            imprimirlo o guardarlo como PDF desde el diálogo de impresión.
          </p>
        </div>
      </output>
    </div>
  </section>

  <section class="band" aria-labelledby="replica">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Réplica",
        title: "Después del plan viene la réplica",
        lead:
          "Una réplica es cualquier actividad que un participante realiza por su cuenta usando los materiales del proyecto. Es la evidencia de que la formación sobrevive al taller.",
        id: "replica",
      })}
      <p>Para registrar una réplica se necesitan estos datos mínimos:</p>
      <ul class="check-list">
        <li>Tipo de actividad y fecha</li>
        <li>Región y lugar general — nunca coordenadas exactas</li>
        <li>Organización convocante</li>
        <li>Número de participantes alcanzados</li>
        <li>Material del toolkit utilizado</li>
        <li>Evidencia adjunta, con consentimiento de las personas que aparezcan</li>
        <li>Resultado observado</li>
      </ul>
      ${callout({
        tone: "info",
        icon: "i",
        title: "Estado de esta función",
        body: raw(
          'El registro de réplicas necesita autenticación, almacenamiento de evidencia y validación M&amp;E. Está documentado como prioridad P1 y aún no está habilitado. Mientras tanto, envía tu reporte al equipo y quedará en el registro manual del proyecto.'
        ),
      })}
    </div>
  </section>

  <section class="section shell narrow" aria-labelledby="seguridad-accion">
    ${sectionHead({
      eyebrow: "Antes de actuar",
      title: "Cuidados que no son opcionales",
      id: "seguridad-accion",
    })}
    <div class="card-grid cols-2">
      <article class="card card-warn">
        <h3>No investigues por tu cuenta</h3>
        <p>
          Documentar operaciones ilegales, fotografiar campamentos o identificar personas expone a riesgos
          reales. Ese trabajo corresponde a las autoridades competentes.
        </p>
      </article>
      <article class="card card-warn">
        <h3>No publiques ubicaciones</h3>
        <p>
          Ni de operaciones, ni de líderes, ni de reuniones comunitarias. Una coordenada compartida puede
          poner en riesgo a terceros.
        </p>
      </article>
      <article class="card card-warn">
        <h3>Cuida tu identidad digital</h3>
        <p>
          Revisa qué información tuya es pública antes de participar en debates sobre el tema. El Módulo 4
          trabaja prácticas concretas de seguridad digital.
        </p>
      </article>
      <article class="card card-warn">
        <h3>Coordina siempre</h3>
        <p>
          Una acción respaldada por una organización o una institución protege más que una acción
          individual, y suele tener mayor efecto.
        </p>
      </article>
    </div>
  </section>
`;

export default {
  path: "/actua",
  file: "actua/index.html",
  title: "Action Lab",
  description:
    "Genera tu Action Canvas: convierte lo aprendido sobre minería ilegal en un plan de acción local con objetivo, aliados, indicador y evidencia esperada.",
  breadcrumb: true,
  body,
};
