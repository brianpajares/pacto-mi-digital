# Cómo editar el contenido

Todo el contenido del sitio vive en `content/`. No hace falta tocar HTML.

## Publicar una cifra nueva

Las cifras están en `content/facts.mjs`. Cada una declara su documento de origen:

```js
{
  id: "replicas-registradas",
  label: "Actividades de réplica validadas",
  value: 12,                 // null si todavía no se ha medido
  kind: "real",              // "real" = ya ocurrió | "meta" = compromiso del grant
  source: "AEIF26",          // debe existir en SOURCES
  asOf: "2026-03",
  detail: "Validadas por el equipo de M&E.",
}
```

Reglas que el build hace cumplir (`npm run check`):

- `source` debe existir en `SOURCES`. Sin fuente no hay publicación.
- `asOf` es obligatorio: una cifra sin fecha no es auditable.
- Si el dato **no se ha medido**, usa `value: null`. El sitio mostrará
  *«sin dato registrado»*. **No lo sustituyas por `0` ni por una estimación.**
- Una **meta** comprometida ante el fondo nunca se presenta como un resultado.

Para mostrarla en una página, usa `statCard("replicas-registradas")`.

## Agregar un recurso al Knowledge Hub

En `content/resources.mjs`. El campo `availability` determina qué ve el visitante:

| Valor | Se muestra como | Requiere `href` |
|---|---|---|
| `publicado` | Botón «Abrir recurso» | Sí |
| `en-revision` | Aviso de que está en revisión | No |
| `planificado` | Aviso de que aún no se produjo | No |

Un recurso sin archivo **nunca** muestra un botón de descarga que falle. Ese es el
punto: la ficha explica el estado real en lugar de simular disponibilidad.

## Agregar un evento

En `content/events.mjs`. Si el evento ya ocurrió, `attendance` lleva la asistencia
efectivamente registrada; si no, se deja en `null` y el sitio dice que la cifra se
publicará después. `dateLabel` acepta «Fecha por confirmar».

## Agregar una página

1. Crea `pages/mi-pagina.mjs` exportando por defecto:

```js
export default {
  path: "/mi-pagina",
  file: "mi-pagina/index.html",
  title: "Título",
  description: "Descripción de al menos 40 caracteres para buscadores.",
  breadcrumb: true,   // agrega el JSON-LD de migas de pan
  body,               // resultado de la plantilla html``
};
```

2. Si debe aparecer en el menú, añádela a `nav` en `content/site.mjs`.
3. `npm run build`. El generador la descubre sola y la incluye en el sitemap.

## Escribir el texto

- **En español, con tildes.** El build falla si detecta palabras frecuentes sin tilde.
- Usa la plantilla `html\`\`` para todo el marcado: escapa las interpolaciones
  automáticamente. Si necesitas insertar HTML a propósito, envuélvelo en `raw()` — y
  asegúrate de que no provenga de una entrada de usuario.
- Tono educativo y orientado a soluciones. Sin alarmismo, sin señalar personas.
- Nunca publiques ubicaciones precisas, datos de contacto de participantes ni
  acusaciones contra personas identificadas.

## Antes de publicar

```bash
npm run build
```

Genera los iconos, renderiza `public/` y ejecuta las siete verificaciones. Si alguna
falla, el despliegue se detiene. Eso es intencional.
