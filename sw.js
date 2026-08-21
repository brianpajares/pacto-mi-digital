/**
 * Service worker de PACTO-MI Digital.
 *
 * Estrategia deliberadamente conservadora: las páginas se piden siempre a la
 * red primero, para que una corrección de contenido llegue de inmediato. La
 * caché solo actúa como respaldo cuando no hay conexión — el PRD exige
 * tolerancia a conexiones móviles variables, no contenido congelado.
 */
const VERSION = "pacto-mi-v1";
const SHELL = [
  "/",
  "/assets/styles.css",
  "/assets/app.js",
  "/favicon.svg",
  "/assets/icons/icon-192.png",
  "/404.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Documentos: red primero, caché como respaldo sin conexión.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((hit) => hit || caches.match("/404.html")))
    );
    return;
  }

  // Estáticos versionados: caché primero.
  event.respondWith(
    caches.match(request).then(
      (hit) =>
        hit ||
        fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
    )
  );
});
