const VERSION = "v1"
self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fech', event => {
    const request = event.request;
    //get 
    if (request.method !== 'GET') {
        return;
    }

    // buscar en cache

    event.responWith(cacheResponse(request));
})

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/js/index.js',
        '/assets/js/classMain.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/plugins/AutoTab.js',
        '/assets/css/index.css',
        '/assets/video/hora.mp4',
    ]);
}

async function cacheResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request)
    return response || fetch(request);
}