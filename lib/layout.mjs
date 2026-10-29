import { html, raw, esc, jsonLd } from "./html.mjs";
import { site, nav, footerNav } from "../content/site.mjs";

const YEAR = 2026;

/** Marca gráfica en línea, para no depender de una petición extra. */
const brandMark = html`
  <svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
    <path d="M20 2 5 7v14c0 8.5 6.2 14.6 15 17 8.8-2.4 15-8.5 15-17V7L20 2Z" fill="currentColor" />
    <path d="M12.5 19.5 18 25l10-11" fill="none" stroke="#F0C86B" stroke-width="3.2"
      stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;

function header(current) {
  return html`
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <header class="site-header" data-elevated="false">
      <div class="shell header-inner">
        <a class="brand" href="/" ${current === "/" ? raw('aria-current="page"') : raw("")}>
          ${brandMark}
          <span class="brand-text">
            <strong>PACTO-MI</strong>
            <small>Digital</small>
          </span>
        </a>

        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-principal">
          <span class="nav-toggle-bars" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="sr-only">Abrir menú de navegación</span>
        </button>

        <nav id="nav-principal" class="nav" aria-label="Navegación principal">
          <ul>
            ${nav.map(
              (item) => html`
                <li>
                  <a href="${item.href}" ${current === item.href ? raw('aria-current="page"') : raw("")}>
                    ${item.label}
                  </a>
                </li>
              `
            )}
          </ul>
          <a class="btn btn-primary nav-cta" href="/actua#canvas">Crea tu plan</a>
        </nav>
      </div>
    </header>
  `;
}

function footer() {
  return html`
    <footer class="site-footer">
      <div class="shell footer-top">
        <div class="footer-brand">
          ${brandMark}
          <p class="footer-descriptor">PACTO-MI · ${site.descriptor}</p>
          <p class="footer-claim">${site.claim}</p>
          <p class="footer-note">
            Proyecto ganador del Alumni Engagement Innovation Fund 2025 de la Embajada de los Estados Unidos.
            Ejecutado en Cajamarca y Madre de Dios, Perú.
          </p>
          <ul class="footer-contact">
            <li><a href="mailto:${site.contact.email}">${site.contact.email}</a></li>
            <li><a href="tel:${site.contact.phoneHref}">${site.contact.phone}</a></li>
            <li><a href="${site.contact.linkedin}" rel="noopener">PACTO-MI en LinkedIn</a></li>
          </ul>
        </div>
        <div class="footer-links">
          ${footerNav.map(
            (group) => html`
              <nav aria-label="${group.title}">
                <h2>${group.title}</h2>
                <ul>
                  ${group.links.map((l) => html`<li><a href="${l.href}">${l.label}</a></li>`)}
                </ul>
              </nav>
            `
          )}
        </div>
      </div>
      <div class="shell footer-bottom">
        <p>© ${YEAR} PACTO-MI · ${site.projectEs}</p>
        <p class="footer-disclaimer">
          Contenido educativo y preventivo. PACTO-MI no recibe denuncias ni publica acusaciones contra
          personas identificadas.
        </p>
      </div>
    </footer>
  `;
}

function structuredData(page) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: [site.project, site.descriptor],
    url: site.origin,
    slogan: site.claim,
    description: site.description,
    email: site.contact.email,
    telephone: site.contact.phoneHref,
    sameAs: [site.contact.linkedin],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Cajamarca, Perú" },
      { "@type": "AdministrativeArea", name: "Madre de Dios, Perú" },
    ],
    funding: {
      "@type": "Grant",
      name: "Alumni Engagement Innovation Fund 2025",
      funder: { "@type": "Organization", name: "U.S. Embassy in Peru" },
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.origin,
    inLanguage: "es-PE",
  };

  const blocks = [organization, website];
  if (page.breadcrumb) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.origin + "/" },
        { "@type": "ListItem", position: 2, name: page.title, item: site.origin + page.path },
      ],
    });
  }
  if (page.schema) blocks.push(page.schema);
  return blocks.map(jsonLd);
}

/**
 * Envuelve el cuerpo de una página en el documento completo.
 * @param {{path:string,title:string,description:string,body:any,breadcrumb?:boolean,schema?:object,bodyClass?:string}} page
 */
export function layout(page) {
  const canonical = site.origin + (page.path === "/" ? "/" : page.path);
  const fullTitle = page.path === "/" ? `${site.name} · ${site.tagline}` : `${page.title} · ${site.name}`;

  return `<!doctype html>
<html lang="es-PE">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(page.description)}" />
<link rel="canonical" href="${esc(canonical)}" />
<meta name="robots" content="index, follow, max-image-preview:large" />

<meta property="og:site_name" content="${esc(site.name)}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_PE" />
<meta property="og:title" content="${esc(fullTitle)}" />
<meta property="og:description" content="${esc(page.description)}" />
<meta property="og:url" content="${esc(canonical)}" />
<meta property="og:image" content="${esc(site.origin)}/assets/icons/og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="PACTO-MI Digital — ${esc(site.claim)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(fullTitle)}" />
<meta name="twitter:description" content="${esc(page.description)}" />
<meta name="twitter:image" content="${esc(site.origin)}/assets/icons/og.png" />

<meta name="theme-color" content="${esc(site.themeColor)}" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#1B1210" media="(prefers-color-scheme: dark)" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/assets/icons/icon-192.png" />
<link rel="manifest" href="/manifest.webmanifest" />
<link rel="stylesheet" href="/assets/styles.css" />
${String(raw(structuredData(page).map(String).join("\n")))}
</head>
<body${page.bodyClass ? ` class="${esc(page.bodyClass)}"` : ""}>
${String(header(page.path))}
<main id="contenido">
${String(page.body)}
</main>
${String(footer())}
<script src="/assets/app.js" defer></script>
</body>
</html>
`;
}
