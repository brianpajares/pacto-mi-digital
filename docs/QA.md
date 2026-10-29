# QA

## Verificaciones automáticas

`npm run build` ejecuta `scripts/check.mjs` sobre `public/`, es decir sobre exactamente
lo que se despliega. Cualquier fallo detiene la publicación.

| # | Verificación | Qué impide |
|---|---|---|
| 1 | Trazabilidad de cifras | Publicar un número sin fuente, vigencia o tipo válido |
| 2 | Sin datos fabricados | `Math.random()` o texto de relleno en el código |
| 3 | Ortografía del español | Publicar 30 palabras frecuentes sin tilde |
| 4 | Metadatos por página | Falta de `title`, `description`, canónico, Open Graph, JSON-LD válido, `lang`, `<main>`, enlace de salto o más de un `<h1>` |
| 5 | Accesibilidad básica | Imágenes sin `alt`, enlaces sin texto, campos sin etiqueta |
| 6 | Enlaces internos | Un `href` interno que no resuelve a un archivo generado |
| 7 | Artefactos de despliegue | Falta de iconos, manifest, service worker o sitemap |
| 8 | Presupuesto de peso | Despliegue de más de 5 MB, archivos de más de 800 KB, o ZIP, video y audio |

Las verificaciones se probaron introduciendo fallos deliberados (una palabra sin tilde,
un enlace inexistente y una cifra sin fuente) para confirmar que efectivamente detienen
el build.

## Verificado manualmente

- **Contraste WCAG 2.2 AA** en las 13 páginas, en tema claro y oscuro, componiendo
  correctamente degradados y capas con transparencia.
- **Sin peticiones externas**: ninguna de las 13 páginas contacta un dominio de terceros;
  no se instalan cookies ni se escribe en el almacenamiento local.
- **Action Lab**: validación de campos obligatorios, foco en el primer campo inválido,
  escapado de HTML en la salida, impresión y copiado al portapapeles.
- **Knowledge Hub**: búsqueda insensible a tildes («guia» encuentra «Guía»), filtros por
  tipo, estado vacío y contador en vivo.
- **Navegación móvil**: menú cerrado por defecto, apertura por toque, cierre con
  `Escape`, sin desbordamiento horizontal a 390 px.

## Pruebas pendientes para la versión con backend

- Seguridad a nivel de fila por rol.
- Consentimientos revocables y su rastro de auditoría.
- Exportaciones de M&E.
- Moderación y flujo de reportes.
- Recuperación de contraseña y segundo factor del personal.
- Restauración de respaldos.
- Carga durante una convocatoria de evento.
