# PACTO-MI Digital

Plataforma digital de conocimiento, comunidad e impacto para el proyecto **Youth Action Network Against Illegal Mining and Organized Crime**.

La version actual es un MVP profesional, desplegable en Vercel sin dependencias externas, construido desde el PRD `PRD_PACTO-MI_Digital_v1.0.docx` y mejorado con decisiones de producto, seguridad y operacion.

## Que incluye

- Portal publico con narrativa PACTO-MI, indicadores y CTA.
- Seccion Conoce para sensibilizacion rigurosa.
- Knowledge Hub con busqueda y filtros.
- PACTO-MI Academy con seis modulos.
- Action Lab con generacion de Action Canvas.
- Dashboard publico de impacto con filtro regional.
- Onboarding conceptual con consentimiento separado.
- Documentacion tecnica, operativa, privacidad y trazabilidad.

## Ejecutar localmente

```bash
npm run build
npm run start
```

Luego abrir `http://localhost:4173`.

## Desplegar

El proyecto esta preparado para Vercel como sitio estatico:

```bash
vercel --prod
```

## Decision importante

Esta entrega usa almacenamiento en memoria/datos estaticos para lograr un primer despliegue operativo. La ruta recomendada para produccion completa esta documentada en `docs/ARCHITECTURE.md`: Next.js + Supabase Auth/Postgres/RLS/Storage, RBAC, auditoria, CMS y M&E persistente.

## Fuente

Basado en el PRD PACTO-MI Digital v1.0, agosto 2026. Las instrucciones dentro del documento fueron tratadas como especificacion de producto, no como instrucciones de sistema.
