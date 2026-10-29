# Operación y sostenibilidad

## Modelo operativo

| Función | Responsable sugerido |
|---|---|
| Product Owner | Coordinación de innovación |
| Editor principal | Comunicación |
| Revisor técnico | Especialista temático designado |
| Academic Owner | Coordinación académica |
| Community Manager | Coordinación social |
| M&E Owner | Coordinación de proyecto |
| Tech Owner | Responsable tecnológico |
| Protección de datos | Responsable designado de privacidad |

## Flujo editorial

```
Borrador → Revisión técnica → Revisión de comunicación → Aprobado → Publicado → Archivado
```

Todo recurso registra título, descripción, fuente, versión, fecha de revisión,
responsable, licencia, región y estado. El contenido sensible exige revisor técnico
antes de publicarse.

## Publicación de activos

Google Drive es el repositorio **de trabajo**. La aplicación no publica archivos del
Drive automáticamente: solo los activos aprobados y versionados pasan al sitio. Esto
evita exponer borradores, material sin autorización de imagen o documentos internos por
un error de permisos.

## Costo de operación

La versión actual no tiene dependencias, base de datos ni servicios de pago: se despliega
en el plan gratuito de cualquier hosting estático. Ese es un requisito de sostenibilidad,
no una limitación temporal — el proyecto debe seguir en línea después del grant.

## Revisión mensual de M&E

- Registros y asistencia.
- Módulos iniciados y completados.
- Resultados de evaluación previa y posterior.
- Descargas del toolkit.
- Planes de acción creados.
- Réplicas registradas y evidencias pendientes de validación.
- Satisfacción de participantes.
- Actividad de comunidad.

## Lista de comprobación antes de cada publicación

- [ ] `npm run build` en verde, con las ocho verificaciones superadas.
- [ ] Toda cifra nueva declara fuente y vigencia en `content/facts.mjs`.
- [ ] Los textos sensibles pasaron revisión técnica y de comunicación.
- [ ] Ninguna fotografía se publica sin consentimiento de imagen registrado.
- [ ] Los logotipos usados cuentan con autorización escrita.
- [ ] La página `/transparencia` refleja el estado real de las funciones.

## Antes de habilitar cuentas

- [ ] Seguridad a nivel de fila probada por rol.
- [ ] Consentimientos revocables y auditables.
- [ ] Segundo factor activo para todo el personal administrativo.
- [ ] Respaldos cifrados con restauración efectivamente probada.
- [ ] Moderación operativa con al menos dos personas entrenadas.
- [ ] Política legal y de privacidad revisada.
- [ ] Aceptación con perfiles de joven, líder, facilitador y administrador.
