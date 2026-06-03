const CACHE_NAME = "wildlife-oracle-v13";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./assets/wildlife-oracle-hero.png",
  "./assets/wildlife-oracle-species.png",
  "./assets/parks/yellowstone.svg",
  "./assets/parks/everglades.svg",
  "./assets/parks/olympic.svg",
  "./assets/parks/saguaro.svg",
  "./assets/species/gray-wolf.svg",
  "./assets/species/bison.svg",
  "./assets/species/grizzly.svg",
  "./assets/species/trumpeter-swan.svg",
  "./assets/species/american-alligator.svg",
  "./assets/species/manatee.svg",
  "./assets/species/roseate-spoonbill.svg",
  "./assets/species/florida-panther.svg",
  "./assets/species/roosevelt-elk.svg",
  "./assets/species/harbor-seal.svg",
  "./assets/species/bald-eagle.svg",
  "./assets/species/marmot.svg",
  "./assets/species/gila-woodpecker.svg",
  "./assets/species/javelina.svg",
  "./assets/species/lesser-long-nosed-bat.svg",
  "./assets/species/desert-bighorn.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const requestUrl = new URL(event.request.url);
        if (requestUrl.origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match("./index.html"))
      )
    )
  );
});
