
self.addEventListener('install', function(event) {

    function cacheAssets (cache) {
        return cache.addAll([
            '/',
            '/index.html',
            '/global.css',
            '/build/bundle.css',
            '/build/bundle.js',
            '/favicon.png'
        ]).then(() => console.log('assests cached'))
    }

    event.waitUntil(caches.open('ag-cache').then(cacheAssets))

})

self.addEventListener('fetch', function(event) {

    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)))

})