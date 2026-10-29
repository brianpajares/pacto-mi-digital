import { html, raw } from "../lib/html.mjs";
import { pageHero, sectionHead, callout } from "../lib/components.mjs";
import { site } from "../content/site.mjs";

const body = html`
  ${pageHero({
    eyebrow: "Privacidad y seguridad",
    title: "Proteger a quien participa es un requisito de producto",
    lead:
      "PACTO-MI trabaja sobre minería ilegal y crimen organizado. En ese contexto, exponer a un participante no es un incidente de privacidad: es un riesgo físico. Estas reglas condicionan el diseño de la plataforma.",
    meta: ["Privacidad por defecto", "Minimización de datos", "Consentimiento revocable"],
  })}

  <section class="section shell narrow prose" aria-labelledby="reglas">
    ${sectionHead({ eyebrow: "Reglas", title: "Lo que la plataforma nunca hace", id: "reglas" })}
    <ul class="rule-list">
      <li>No publica direcciones, teléfonos, correos ni coordenadas de participantes.</li>
      <li>No muestra la ubicación exacta de líderes: como máximo la región o provincia.</li>
      <li>No habilita un mapa público de denuncias ni de operaciones reportadas por usuarios.</li>
      <li>No publica acusaciones contra personas identificadas ni nombres de presuntos responsables.</li>
      <li>No incluye a nadie en el directorio territorial sin consentimiento explícito y revocable.</li>
      <li>No usa fotografías de participantes sin consentimiento de imagen registrado por separado.</li>
      <li>No sincroniza archivos automáticamente desde el Drive de trabajo hacia el sitio público.</li>
    </ul>

    ${callout({
      tone: "warn",
      icon: "◆",
      title: "PACTO-MI no es un canal de denuncia",
      body: raw(
        "Si necesitas reportar un hecho delictivo, acude a las autoridades competentes. Esta plataforma es educativa y preventiva; no recibe, tramita ni deriva denuncias, y no puede garantizar la protección de quien envíe información sensible por sus formularios."
      ),
    })}
  </section>

  <section class="band" aria-labelledby="datos">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Datos",
        title: "Qué se recoge y qué no",
        lead: "El principio es la minimización: si un dato no es necesario para prestar el servicio, no se pide.",
        id: "datos",
      })}
      <div class="card-grid cols-2">
        <article class="card card-ok">
          <h3>Se recoge</h3>
          <ul>
            <li>Correo electrónico, para verificar la cuenta.</li>
            <li>Región general e intereses, para orientar contenidos.</li>
            <li>Organización, cuando la persona decide declararla.</li>
            <li>Progreso formativo y respuestas de evaluación.</li>
            <li>Consentimientos, con fecha y versión de la política aceptada.</li>
          </ul>
        </article>
        <article class="card card-warn">
          <h3>No se recoge</h3>
          <ul>
            <li>Dirección domiciliaria o coordenadas.</li>
            <li>Documento de identidad.</li>
            <li>Datos sensibles: salud, afiliación política o religiosa.</li>
            <li>Ubicación en tiempo real.</li>
            <li>Información sobre terceros no consentida.</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="section shell narrow prose" aria-labelledby="consentimientos">
    ${sectionHead({
      eyebrow: "Consentimientos",
      title: "Tres decisiones independientes",
      lead:
        "Aceptar los términos no implica aceptar aparecer en un directorio ni autorizar el uso de tu fotografía. Son decisiones separadas, y cada una puede revocarse sin perder el acceso a la plataforma.",
      id: "consentimientos",
    })}
    <ol class="consent-list">
      <li>
        <strong>Términos y política de privacidad</strong>
        <span>Necesario para crear una cuenta. Define qué datos se tratan y con qué finalidad.</span>
      </li>
      <li>
        <strong>Visibilidad en el directorio territorial</strong>
        <span>
          Opcional y desactivado por defecto. Al activarlo se muestra nombre, región general, organización
          e intereses — nunca datos de contacto directo.
        </span>
      </li>
      <li>
        <strong>Uso de imagen y fotografía</strong>
        <span>
          Opcional. Autoriza que fotografías o grabaciones en las que apareces se usen en materiales
          públicos del proyecto.
        </span>
      </li>
    </ol>
  </section>

  <section class="band" aria-labelledby="tecnica">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Medidas técnicas",
        title: "Cómo se protege la información",
        id: "tecnica",
      })}
      <div class="card-grid cols-2">
        <article class="card card-compact">
          <h3>Control de acceso</h3>
          <p>Roles con mínimo privilegio y seguridad a nivel de fila en la base de datos para perfiles, evidencia y módulos privados.</p>
        </article>
        <article class="card card-compact">
          <h3>Autenticación reforzada</h3>
          <p>Segundo factor obligatorio para administradores, moderadores y responsables de M&E.</p>
        </article>
        <article class="card card-compact">
          <h3>Auditoría</h3>
          <p>Registro de ediciones, acciones de moderación, exportaciones de datos y cambios de rol.</p>
        </article>
        <article class="card card-compact">
          <h3>Archivos privados</h3>
          <p>La evidencia se sirve mediante enlaces firmados de vigencia limitada, nunca por URL pública.</p>
        </article>
        <article class="card card-compact">
          <h3>Copias de seguridad</h3>
          <p>Respaldos cifrados con procedimiento de recuperación probado, no solo configurado.</p>
        </article>
        <article class="card card-compact">
          <h3>Retención</h3>
          <p>Plazos definidos para evidencia y un procedimiento de eliminación de cuenta a solicitud.</p>
        </article>
      </div>
      ${callout({
        tone: "info",
        icon: "i",
        title: "Estado actual",
        body: raw(
          'Esta versión del sitio es estática y no tiene cuentas de usuario, base de datos ni formularios que envíen información a un servidor. El Action Lab funciona íntegramente en tu navegador. Las medidas descritas arriba corresponden a la arquitectura definida para la versión con backend. Consulta el <a href="/transparencia">estado de la plataforma</a> para ver qué está y qué no está habilitado.'
        ),
      })}
    </div>
  </section>

  <section class="section shell narrow prose" aria-labelledby="moderacion">
    ${sectionHead({ eyebrow: "Comunidad", title: "Reglas de moderación", id: "moderacion" })}
    <p>Cuando los espacios de comunidad se habiliten, estará prohibido publicar:</p>
    <ul class="rule-list">
      <li>Datos personales de terceros sin su consentimiento (<em>doxxing</em>).</li>
      <li>Amenazas de cualquier tipo.</li>
      <li>Acusaciones contra personas identificadas sin sustento documental.</li>
      <li>Ubicaciones sensibles: operaciones, campamentos, domicilios o reuniones comunitarias.</li>
      <li>Material que ponga en riesgo la seguridad de participantes o de sus comunidades.</li>
    </ul>
    <p>
      Toda publicación puede reportarse. El equipo de moderación puede ocultar contenido, restringir cuentas
      y dejar constancia de la acción en el registro de auditoría.
    </p>
  </section>

  <section class="section shell narrow" aria-labelledby="derechos">
    ${sectionHead({ eyebrow: "Tus derechos", title: "Cómo ejercerlos", id: "derechos", align: "center" })}
    <p class="center-text">
      Puedes solicitar acceso, rectificación, eliminación de tus datos o la revocación de cualquier
      consentimiento escribiendo al equipo. La solicitud se atiende sin exigir justificación.
    </p>
    <p class="center-cta">
      <a class="btn btn-primary" href="mailto:${site.contact.email}?subject=Solicitud%20sobre%20mis%20datos%20-%20PACTO-MI">
        Escribir a ${site.contact.email}
      </a>
    </p>
  </section>
`;

export default {
  path: "/privacidad",
  file: "privacidad/index.html",
  title: "Privacidad y seguridad",
  description:
    "Política de privacidad y seguridad de PACTO-MI Digital: minimización de datos, consentimientos separados y revocables, reglas de moderación y protección de participantes.",
  breadcrumb: true,
  body,
};
