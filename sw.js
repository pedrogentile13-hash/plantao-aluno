// Service Worker para PWA
const CACHE_NAME = 'plantao-aluno-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/pages/login.html',
  '/pages/cadastro.html',
  '/pages/dashboard.html',
  '/pages/resumos.html',
  '/pages/videoaulas.html',
  '/pages/simulados.html',
  '/pages/admin.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/database.js',
  '/js/resumos.js',
  '/js/videoaulas.js',
  '/js/simulados.js',
  '/js/admin.js'
];

// Install event - cachear arquivos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - limpar caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - estratégia Network First, fallback para Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Se a resposta é válida, clonar e adicionar ao cache
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Se network falhar, tentar buscar do cache
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // Se não estiver no cache, retornar página offline
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Sync event - para sincronização em background
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // Implementar lógica de sincronização de dados quando online
  console.log('Sincronizando dados...');
}

// Push notification event
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nova notificação do Plantão Aluno',
    icon: '/assets/images/icon-192x192.png',
    badge: '/assets/images/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Abrir',
        icon: '/assets/images/icon-96x96.png'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: '/assets/images/icon-96x96.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Plantão Aluno', options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
