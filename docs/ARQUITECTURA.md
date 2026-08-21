# Arquitectura técnica

## Estado actual: sitio estático generado

La versión publicada es un sitio estático generado por un script propio de unas 200
líneas sobre la biblioteca estándar de Node. No hay dependencias de producción, base de
datos ni servidor de aplicación.

```
content/*.mjs  →  pages/*.mjs  →  lib/layout.mjs  →  public/**/*.html
```

- **`content/`** son datos puros: no contienen marcado ni lógica de presentación.
- **`pages/`** compone esos datos en el cuerpo de cada página y declara sus metadatos.
- **`lib/layout.mjs`** envuelve el cuerpo en el documento completo, con cabecera, pie,
  metadatos Open Graph y datos estructurados JSON-LD.
- **`scripts/build.mjs`** recorre `pages/`, escribe `public/` y emite sitemap, robots y
  manifest a partir de la configuración del sitio.
- **`scripts/check.mjs`** valida el resultado. Si falla, no hay despliegue.

### Por qué esta decisión

La plataforma completa del PRD requiere autenticación, Postgres con seguridad a nivel de
fila, almacenamiento de evidencia y un CMS. Construir todo eso antes de publicar habría
dejado al proyecto sin presencia pública durante meses, justo en la etapa en que
necesita convocar a la cohorte de Madre de Dios.

Publicar primero la capa que no maneja datos personales tiene dos ventajas concretas:

1. **No hay superficie de ataque sobre participantes**, porque no hay datos de
   participantes. En un proyecto sobre crimen organizado, eso no es un detalle menor.
2. **No se acumula deuda técnica.** El contenido ya vive separado de la presentación, en
   módulos versionados que se convierten en filas de base de datos sin reescribir la
   narrativa.

## Arquitectura objetivo con backend

Cuando el registro de miembros sea necesario:

| Capa | Elección | Motivo |
|---|---|---|
| Frontend / full-stack | Next.js + TypeScript | App Router, renderizado en servidor y ecosistema conocido |
| Hosting | Vercel | Continuidad con el despliegue actual |
| Base de datos | Supabase Postgres | Seguridad a nivel de fila nativa |
| Autenticación | Supabase Auth | Email y OAuth, con segundo factor para el equipo |
| Archivos | Supabase Storage | URLs firmadas para evidencia privada |
| Video | YouTube o Vimeo | No almacenar video pesado en la plataforma |
| Correo | Resend o Brevo | Confirmaciones y recordatorios |
| Errores | Sentry | Estabilidad en producción |
| Analítica | GA4 más `analytics_events` propia | Indicadores M&E bajo control del proyecto |

La elección definitiva debe validarse en el discovery técnico y según la disponibilidad
del equipo que operará la plataforma después del grant.

### Entidades del modelo de datos

`users` · `profiles` · `consents` · `regions` · `organizations` · `resources` ·
`courses` · `modules` · `lessons` · `quizzes` · `progress` · `events` ·
`registrations` · `attendance` · `action_plans` · `replication_activities` ·
`evidence` · `community_groups` · `posts` · `comments` · `surveys` ·
`analytics_events` · `audit_logs`

### Reglas de seguridad desde el primer día

- Seguridad a nivel de fila activa en todas las tablas, sin excepciones temporales.
- Mínimo privilegio por rol; la clave de servicio nunca llega al cliente.
- Consentimiento de directorio explícito, revocable y almacenado con versión y fecha.
- Segundo factor obligatorio para administradores, moderadores y responsables de M&E.
- URLs firmadas de vigencia limitada para toda evidencia privada.
- Registro de auditoría de ediciones, moderación, exportaciones y cambios de rol.

## Orden de migración

1. Migrar la UI estática a Next.js App Router conservando `content/` como semilla.
2. Crear el esquema en Supabase con seguridad a nivel de fila desde la primera migración.
3. Implementar autenticación, perfiles y las tres decisiones de consentimiento.
4. Persistir recursos, cursos y eventos; el Knowledge Hub pasa a leer de la base.
5. Construir el CMS y los roles del equipo.
6. Conectar el Action Lab y el registro de réplicas, con almacenamiento de evidencia.
7. Instrumentar analítica y los indicadores M&E.
8. Endurecer seguridad, probar restauración de respaldos y preparar la aceptación.

El directorio territorial y los espacios de comunidad son los **últimos** de la lista,
deliberadamente: son las funciones que más exponen a los participantes y solo deben
habilitarse con el control de acceso y la moderación ya probados.
