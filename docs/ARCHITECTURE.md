# Arquitectura Tecnica Recomendada

## Estado actual

La entrega actual es una PWA estatica con HTML, CSS y JavaScript. Esto permite publicar una primera experiencia en produccion rapidamente y validar narrativa, estructura, flujos y look & feel.

## Arquitectura de produccion completa

- **Frontend/full-stack:** Next.js + TypeScript.
- **Hosting:** Vercel.
- **Base de datos:** Supabase Postgres.
- **Auth:** Supabase Auth con email/OAuth.
- **Storage:** Supabase Storage para archivos aprobados, no Drive directo.
- **CMS:** panel admin sobre tablas editoriales.
- **Video:** YouTube o Vimeo embebido.
- **Email:** Resend o Brevo.
- **Errores:** Sentry.
- **Analitica:** GA4 + `analytics_events` propia.

## Entidades clave

- `users`
- `profiles`
- `consents`
- `regions`
- `organizations`
- `resources`
- `courses`
- `modules`
- `lessons`
- `quizzes`
- `progress`
- `events`
- `registrations`
- `attendance`
- `action_plans`
- `replication_activities`
- `evidence`
- `community_groups`
- `posts`
- `comments`
- `surveys`
- `analytics_events`
- `audit_logs`

## Seguridad de datos

- Row Level Security desde el dia uno.
- Minimo privilegio por rol.
- Opt-in explicito para directorio.
- MFA obligatorio para administradores, moderadores y M&E.
- URLs firmadas para evidencia privada.
- Auditoria de acciones administrativas.

## Estrategia de evolucion

1. Migrar UI estatica a Next.js App Router.
2. Crear esquema Supabase con RLS.
3. Implementar auth y perfiles.
4. Persistir recursos, cursos y eventos.
5. Implementar CMS y roles staff.
6. Conectar Action Lab y replicas.
7. Instrumentar analitica y M&E.
8. Endurecer seguridad y preparar UAT.
