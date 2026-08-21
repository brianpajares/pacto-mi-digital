# PACTO-MI Digital

Plataforma digital de conocimiento, comunidad e impacto del proyecto **Youth Action
Network Against Illegal Mining and Organized Crime** (PACTO-MI), ganador global del
**Alumni Engagement Innovation Fund 2025** de la Embajada de los Estados Unidos, en
ejecución en Cajamarca y Madre de Dios, Perú.

> Sitio educativo y preventivo. **PACTO-MI no recibe denuncias, no publica acusaciones
> contra personas identificadas y no expone datos de contacto ni ubicaciones de sus
> participantes.**

---

## La regla que gobierna este repositorio

**Ninguna cifra se publica sin su documento de origen, y lo que no se ha medido se
declara como tal.**

En un proyecto que aborda economías criminales, un número inventado — aunque sea
plausible — destruye la credibilidad de todo lo demás. Por eso:

- Toda cifra pública vive en [`content/facts.mjs`](content/facts.mjs) y declara su
  fuente, su vigencia y si es una **meta comprometida** o un **dato verificado**.
- Un indicador sin medición tiene `value: null` y se renderiza como
  *«sin dato registrado»* — nunca como `0`, un promedio o una proyección.
- `npm run check` **falla el build** si una cifra pierde su fuente, si aparece
  `Math.random()` en el código o si el sitio publica texto de relleno.
- La página [`/fuentes`](https://pacto-mi-digital.vercel.app/fuentes) expone la tabla
  completa de cifras contra sus documentos, para que cualquiera pueda auditarla.

---

## Qué incluye

Trece páginas generadas estáticamente:

| Ruta | Contenido |
|---|---|
| `/` | Portada: propósito, cifras verificables, rutas de participación y tracción real |
| `/conoce` | Formal vs. informal vs. ilegal, impactos, vínculo criminal, territorios, mitos |
| `/aprende` | PACTO-MI Academy: los seis módulos con objetivos de aprendizaje y evaluación |
| `/recursos` | Knowledge Hub con búsqueda, filtros y estado editorial de cada recurso |
| `/expert-talks` | Ciclo de cuatro conferencias con especialistas nacionales |
| `/eventos` | Taller de Cajamarca (realizado) y sesión de Madre de Dios (en planificación) |
| `/actua` | Action Lab: generador del Action Canvas, íntegramente en el navegador |
| `/impacto` | Dashboard público: metas vs. avance, con los huecos declarados |
| `/nosotros` | Equipo ejecutor, aliados y respaldo institucional |
| `/privacidad` | Política de privacidad, consentimientos y reglas de moderación |
| `/fuentes` | Cada cifra del sitio contra su documento de origen |
| `/transparencia` | Inventario honesto de qué funciona hoy y qué sigue pendiente |
| `/404` | Página de error con navegación de recuperación |

---

## Ejecutar y publicar

```bash
npm run dev      # genera el sitio y lo sirve en http://localhost:4173
npm run build    # genera iconos, renderiza public/ y ejecuta las verificaciones
npm run check    # solo las verificaciones, sobre public/
npm run icons    # regenera iconos PWA e imagen Open Graph
```

No hay dependencias de producción ni de desarrollo: el generador usa únicamente la
biblioteca estándar de Node 20+. `npm install` no descarga nada.

El despliegue en Vercel toma `buildCommand` y `outputDirectory` de
[`vercel.json`](vercel.json), que además fija la política de seguridad de contenido,
las cabeceras de caché y las redirecciones heredadas.

---

## Arquitectura

```
content/    Datos del sitio. Es la fuente de verdad y no contiene marcado.
  site.mjs        Marca, navegación, contacto y URL canónica
  facts.mjs       Toda cifra pública, con fuente y vigencia
  modules.mjs     Los seis módulos de la Academy
  resources.mjs   Catálogo del Knowledge Hub con estado editorial
  talks.mjs       Ciclo de Expert Talks
  events.mjs      Eventos del proyecto
  team.mjs        Equipo ejecutor
  partners.mjs    Aliados y respaldo institucional

lib/        Capa de render, sin estado.
  html.mjs        Plantillas etiquetadas con escapado automático
  layout.mjs      Documento, cabecera, pie y datos estructurados JSON-LD
  components.mjs  Componentes de UI reutilizables
  pixelfont.mjs   Tipografía de mapa de bits para la imagen Open Graph

pages/      Una página por archivo; exporta ruta, metadatos y cuerpo.
scripts/    build · check · serve · gen-icons
assets/     Hoja de estilos, JavaScript del cliente e iconos generados
docs/       Documentación técnica y el PRD original adjunto
```

### Por qué un generador propio

La plataforma completa que describe el PRD necesita autenticación, base de datos con
seguridad a nivel de fila y panel administrativo. Publicar primero la capa que **no
maneja datos personales** permitió dar presencia pública al proyecto sin abrir una
superficie de ataque sobre información de participantes — hoy simplemente no hay datos
de participantes que proteger.

El generador son unas 200 líneas sobre la biblioteca estándar. Esa decisión mantiene el
sitio auditable, sin cadena de suministro de dependencias y desplegable en cualquier
hosting estático, mientras el contenido vive en módulos versionados listos para migrar
a Next.js + Supabase cuando el backend sea necesario. La ruta está en
[`docs/ARQUITECTURA.md`](docs/ARQUITECTURA.md).

---

## Verificaciones automáticas

`npm run check` corre sobre `public/`, es decir sobre exactamente lo que se despliega:

1. **Trazabilidad de cifras** — cada hecho declara fuente válida, vigencia y tipo.
2. **Sin datos fabricados** — prohíbe `Math.random()` y texto de relleno en el código.
3. **Ortografía del español** — detecta 30 palabras frecuentes publicadas sin tilde.
4. **Metadatos por página** — `title`, `description`, canónico, Open Graph, JSON-LD
   válido, `lang="es-PE"`, un único `<h1>`, enlace de salto y `<main>`.
5. **Accesibilidad básica** — `alt` en imágenes, etiquetas accesibles en SVG y campos,
   enlaces con texto.
6. **Enlaces internos** — todo `href` interno debe resolver a un archivo generado.
7. **Artefactos de despliegue** — iconos, manifest, service worker, sitemap y el PRD.

Contraste WCAG 2.2 AA verificado en las 13 páginas, en tema claro y oscuro.

---

## Privacidad por diseño

Esta versión **no tiene cuentas de usuario, base de datos ni formularios que envíen
datos a un servidor**. El Action Lab funciona íntegramente en el navegador. El sitio no
instala cookies, no carga scripts ni tipografías de terceros y no realiza ninguna
petición a un dominio externo — verificado en las 13 páginas.

Las reglas que condicionan el producto están en
[`docs/PRIVACIDAD_Y_SEGURIDAD.md`](docs/PRIVACIDAD_Y_SEGURIDAD.md) y publicadas en
[`/privacidad`](https://pacto-mi-digital.vercel.app/privacidad).

---

## Documentación

| Documento | Contenido |
|---|---|
| [`docs/prd/PRD_PACTOMI_Digital_v1.0.docx`](docs/prd/) | PRD original, adjunto y servido desde el sitio |
| [`docs/ARQUITECTURA.md`](docs/ARQUITECTURA.md) | Estado actual y ruta hacia el backend completo |
| [`docs/CONTENIDO.md`](docs/CONTENIDO.md) | Cómo editar contenido y publicar una cifra nueva |
| [`docs/PRIVACIDAD_Y_SEGURIDAD.md`](docs/PRIVACIDAD_Y_SEGURIDAD.md) | Reglas no negociables, roles y moderación |
| [`docs/OPERACION.md`](docs/OPERACION.md) | Modelo operativo, flujo editorial y sostenibilidad |
| [`docs/TRAZABILIDAD.md`](docs/TRAZABILIDAD.md) | Requisito del PRD → dónde está implementado |
| [`docs/QA.md`](docs/QA.md) | Verificaciones automáticas y pruebas manuales |
| [`docs/DRIVE.md`](docs/DRIVE.md) | Estructura del [Drive de trabajo](https://drive.google.com/drive/folders/1HfaMhQt_0QjvTD7R8xJGzTEW-Si8_edd) y regla de publicación |

---

## Fuentes del contenido

- Propuesta AEIF 2025 — *Youth Action Network Against Illegal Mining and Organized Crime*
- AEIF 2025 — *Monitoring and Evaluation Template*
- Presentación institucional PACTO-MI — AEIF 2026
- PRD PACTO-MI Digital v1.0, agosto de 2026

Las instrucciones contenidas en esos documentos se trataron como especificación de
producto, no como instrucciones para el sistema.

---

## Contacto

aeif.proyecto@gmail.com · +51 941 007 076 · PACTO-MI en LinkedIn
