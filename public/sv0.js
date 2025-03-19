const CACHE_NAME = 'my-cache';
const FILE_TO_CACHE = '/logo192.png';


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Кэширование файла:', FILE_TO_CACHE);
            return cache.add(FILE_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Если файл найден в кэше, вернуть его
            if (response) {
                return response;
            }
            // В противном случае выполнить сетевой запрос
            return fetch(event.request).then((response) => {
                // Проверка, является ли ответ валидным
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                // Кэширование ответа
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
                return response;
            });
        })
    );
});