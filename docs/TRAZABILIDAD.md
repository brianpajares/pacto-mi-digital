# Trazabilidad: PRD → implementación

Contrastado contra el PRD PACTO-MI Digital v1.0 (agosto de 2026). El estado publicado
para el visitante está en [`/transparencia`](https://pacto-mi-digital.vercel.app/transparencia);
esta tabla es su equivalente técnico.

| Requisito del PRD | Dónde está | Estado |
|---|---|---|
| §8.1 Portal público / landing | `pages/home.mjs` | Implementado |
| §8.2 Pestaña «Conoce» | `pages/conoce.mjs` | Implementado |
| §8.3 Knowledge Hub | `pages/recursos.mjs`, `content/resources.mjs` | Implementado; las descargas dependen del estado editorial de cada recurso |
| §8.4 PACTO-MI Academy | `pages/aprende.mjs`, `content/modules.mjs` | Estructura y objetivos publicados; falta contenido audiovisual y evaluaciones |
| §8.5 Expert Talks | `pages/expert-talks.mjs`, `content/talks.mjs` | Cuatro sesiones y 12 ponencias publicadas desde agendas y flyers; grabaciones y fichas completas pendientes |
| §8.6 Red de líderes | `pages/privacidad.mjs` (política) | Pendiente: requiere autenticación y consentimiento opt-in |
| §8.7 Comunidad moderada | `docs/PRIVACIDAD_Y_SEGURIDAD.md` | Pendiente: requiere moderación y auditoría |
| §8.8 Action Lab | `pages/actua.mjs`, `assets/app.js` | Implementado en cliente; sin persistencia |
| §8.9 Registro de réplicas | `pages/actua.mjs` (campos y flujo) | Pendiente: requiere almacenamiento de evidencia |
| §8.10 Impacto y M&E | `pages/impacto.mjs`, `content/facts.mjs` | Dashboard público implementado; panel privado pendiente |
| §8.11 Eventos | `pages/eventos.mjs`, `content/events.mjs` | Listado implementado; inscripción y check-in pendientes |
| §8.12 Nosotros / aliados | `pages/nosotros.mjs` | Implementado |
| §8.13 Admin / CMS | — | Pendiente: el contenido se edita en el repositorio |
| §15 Modelo de datos | `docs/ARQUITECTURA.md` | Especificado, no implementado |
| §17 Privacidad y protección | `pages/privacidad.mjs`, `vercel.json` | Implementado en diseño y cabeceras |
| §21 Analítica de producto | — | Pendiente por decisión: sin rastreadores en esta versión |
| §23 SEO, accesibilidad, rendimiento | `lib/layout.mjs`, `scripts/check.mjs` | Implementado y verificado automáticamente |
| §23 PWA instalable | `manifest.webmanifest`, `sw.js` | Implementado |
| §25 Gobierno de contenidos | `pages/recursos.mjs`, `docs/OPERACION.md` | Documentado y publicado |
| §36 Estructura de Drive | `docs/DRIVE.md` | Implementado en el Drive del proyecto |

## Decisiones que se apartan del PRD, y por qué

**1. Se publicó un sitio estático antes que la plataforma completa.**
El PRD contempla 15–18 semanas para la versión completa. Publicar primero la capa sin
datos personales dio presencia pública inmediata sin abrir superficie de ataque sobre
información de participantes.

**2. No se instrumentó analítica de producto.**
El PRD (§21) define eventos para GA4. Se decidió no incluir rastreadores mientras el
sitio no tenga cuentas: permite afirmar con verdad que no hay seguimiento, lo que en
este proyecto vale más que las métricas de navegación. Los eventos siguen especificados
para la versión con backend.

**3. Se añadieron dos páginas que el PRD no contempla: `/fuentes` y `/transparencia`.**
El PRD exige que todo contenido tenga fuente y fecha (§10, §18), pero no lo convierte en
una superficie pública. En un proyecto que denuncia economías ilegales, poder auditar
cada cifra desde el propio sitio es un argumento de credibilidad, no un detalle interno.

**4. Los indicadores sin medición se publican como huecos explícitos.**
El PRD define un dashboard público de KPIs. Se optó por mostrar «sin dato registrado» en
lugar de cualquier cifra provisional: una vez que un número inventado se detecta, toda la
demás información queda bajo sospecha.

**5. Los logotipos de aliados y patrocinadores se muestran solo como nombre.**
El PRD (§26) lista los activos disponibles. Hasta contar con la autorización escrita de
uso de marca para cada entidad, se publica únicamente el nombre.
