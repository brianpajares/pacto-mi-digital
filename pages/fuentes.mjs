import { html, raw } from "../lib/html.mjs";
import { pageHero, sectionHead, callout } from "../lib/components.mjs";
import { SOURCES, facts, factValue } from "../content/facts.mjs";

const grouped = Object.values(SOURCES).map((s) => ({
  source: s,
  items: facts.filter((f) => f.source === s.id),
}));

const body = html`
  ${pageHero({
    eyebrow: "Fuentes y metodología",
    title: "Cada cifra de este sitio, con su documento de origen",
    lead:
      "Esta página existe para que cualquier persona pueda auditar lo que publicamos. Si un número aparece en el sitio, aparece también aquí con la fuente que lo respalda.",
    meta: [`${facts.length} cifras catalogadas`, `${Object.keys(SOURCES).length} documentos fuente`],
  })}

  <section class="section shell narrow prose" aria-labelledby="regla">
    ${sectionHead({ eyebrow: "La regla", title: "Nada inventado se presenta como real", id: "regla" })}
    <p>Tres compromisos gobiernan el contenido cuantitativo de la plataforma:</p>
    <ol class="numbered">
      <li>
        <strong>Ninguna cifra se publica sin fuente.</strong> El proceso de construcción del sitio falla si
        un indicador pierde su documento de origen, de modo que el error no puede llegar a producción sin
        que alguien lo note.
      </li>
      <li>
        <strong>Lo no medido se declara como tal.</strong> Un indicador sin registro muestra
        <em>“sin dato registrado”</em>. Nunca se sustituye por un cero, un promedio ni una proyección.
      </li>
      <li>
        <strong>Meta y resultado no se mezclan.</strong> Un compromiso asumido ante el fondo es una meta;
        un resultado ocurrido es un dato verificado. El sitio los distingue visualmente en todas partes.
      </li>
    </ol>
    ${callout({
      tone: "info",
      icon: "i",
      title: "Por qué somos tan estrictos",
      body: raw(
        "Un proyecto que denuncia economías ilegales no puede permitirse cifras infladas. La primera persona que audite un número inventado tendrá razón al dudar de todo lo demás — incluida la parte que sí es cierta."
      ),
    })}
  </section>

  <section class="band" aria-labelledby="documentos">
    <div class="shell">
      ${sectionHead({
        eyebrow: "Documentos",
        title: "Fuentes primarias",
        lead: "Todos son documentos del propio proyecto, presentados al fondo o derivados de su ejecución.",
        id: "documentos",
      })}
      ${grouped.map(
        (g) => html`
          <article class="source-block">
            <h3>${g.source.label}</h3>
            <p class="source-note">${g.source.note}</p>
            <table class="fact-table">
              <caption class="sr-only">Cifras respaldadas por ${g.source.label}</caption>
              <thead>
                <tr>
                  <th scope="col">Indicador</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Vigencia</th>
                </tr>
              </thead>
              <tbody>
                ${g.items.map(
                  (f) => html`
                    <tr ${f.value === null ? raw('class="row-empty"') : raw("")}>
                      <th scope="row">${f.label}</th>
                      <td>${factValue(f.id)}</td>
                      <td>${f.kind === "meta" ? "Meta comprometida" : "Dato verificado"}</td>
                      <td>${f.asOf}</td>
                    </tr>
                  `
                )}
              </tbody>
            </table>
          </article>
        `
      )}
    </div>
  </section>

  <section class="section shell narrow prose" aria-labelledby="cualitativo">
    ${sectionHead({
      eyebrow: "Contenido cualitativo",
      title: "Cómo tratamos lo que no es un número",
      id: "cualitativo",
    })}
    <p>
      Las descripciones de impactos ambientales, sociales, económicos y de gobernanza que aparecen en la
      sección <a href="/conoce">Conoce</a> son material educativo elaborado por el equipo a partir de la
      propuesta del proyecto y del trabajo de sus aliados académicos y científicos.
    </p>
    <p>
      Ese contenido no cita todavía fuentes bibliográficas externas artículo por artículo. Mientras la
      revisión técnica no las incorpore, se presenta como material formativo del proyecto y no como
      resultado de investigación propia. Cuando un módulo formativo se publique, incluirá su bibliografía.
    </p>
    <p>
      Los nombres de personas, organizaciones aliadas y cifras de asistencia provienen de la propuesta
      ganadora del AEIF 2025 y de la presentación institucional AEIF 2026.
    </p>
  </section>

  <section class="band band-dark" aria-labelledby="correccion">
    <div class="shell narrow">
      ${sectionHead({
        eyebrow: "Corrección",
        title: "¿Encontraste un error?",
        id: "correccion",
        align: "center",
      })}
      <p class="center-text">
        Si detectas una cifra mal atribuida, un dato desactualizado o una afirmación sin respaldo,
        escríbenos. Corregir rápido es parte del compromiso.
      </p>
      <p class="center-cta">
        <a class="btn btn-primary" href="mailto:aeif.proyecto@gmail.com?subject=Correcci%C3%B3n%20de%20dato%20-%20PACTO-MI%20Digital">
          Reportar una corrección
        </a>
      </p>
    </div>
  </section>
`;

export default {
  path: "/fuentes",
  file: "fuentes/index.html",
  title: "Fuentes y metodología",
  description:
    "Todas las cifras publicadas por PACTO-MI Digital con su documento de origen, y las reglas que impiden publicar datos sin respaldo.",
  breadcrumb: true,
  body,
};
