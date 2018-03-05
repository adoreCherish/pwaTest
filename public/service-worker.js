// // 缓存的名称
// var cacheName = 'hellow pwa'
// // console.log(self)
// // 进入service worker 的安装事件 
// self.addEventListener('install', event => {
//   // console.log(ENV)
//   // 安装阶段跳过等待，直接进入 active
//   event.waitUntil(self.skipWaiting())
//   // 但是建议只做一些轻量级和非常重要资源的缓存，减少安装失败的概率
//   // 使用指定的缓存名称来打开缓存
//   // event.waitUntil(caches.open(cacheName)
//   // // 把已知的资源添加到缓存中 
//   // .then(cache => cache.addAll(['./js/script.js'])))
// })
// // self.addEventListener('activate', event => event.waitUntil(
// //     Promise.all([
// //         // 更新客户端
// //         clients.claim(),
// //         // 清理旧版本
// //         caches.keys().then(cacheList => Promise.all(
// //             cacheList.map(cacheName => {
// //                 if (cacheName !== 'hellow pwa') {
// //                     caches.delete(cacheName)
// //                 }
// //             })
// //         ))
// //     ])
// // ))
// self.addEventListener('activate', function (event) {
//   // event.waitUntil(self.clients.claim())
//   console.log('activate~')
//   event.waitUntil(
//     Promise.all([
//       // 更新客户端
//       self.clients.claim(),
//       // 清理旧版本
//       caches.keys().then(function (cacheList) {
//         return Promise.all(
//           cacheList.map(function (cacheName) {
//               return caches.delete(cacheName)
//           })
//         )
//       })
//     ])
//   )
// })
// // 添加fetch事件的事件监听器
// self.addEventListener('fetch', function (event) {
//   console.log('fetch 事件生效了')
//   event.respondWith(
//     // 检查传入的请求 url 是否匹配当前缓存中存在的任何内容
//     // 检查缓存时想要忽略查询字符串 ignoreSearch ignoreMethod ignoreVary
//     caches.match(event.request, {
//       ignoreSearch: true
//     })
//     .then(function (response) {
//       // 如果有请求 且存在 就返回
//       if (response) {
//         console.log('response success' + response)
//         return response
//       }
//       // 否则 通过网络获取资源
//       // return fetch(event.request)
//       // 请求是一个流 只能消耗一次 所以需要克隆一次
//       var requestToCache = event.request.clone()
//       return fetch(requestToCache)
//       .then(function (response) {
//         if (!response || response.status !== 200) {
//           // 如果请求出错 直接返回错误
//           return response
//         }
//         // 响应是一个流 只能消耗一次 所以需要克隆一次
//         var responseToCache = response.clone()
//         caches.open(cacheName)
//         .then(function (cache) {
//           // 放入缓存中
//           cache.put(requestToCache, responseToCache)
//         })
//         return response
//       })
//     })
//   )
// })
// // /* eslint-disable max-len */
// // 
// // const applicationServerPublicKey = 'BMAlhB7p-rgnjc3kIy-SKjrx6i5wz97Gfy7c9kDGcIGwemqnP7MDDKtkxYEtffFrHOcTRhURhvC7awjrzrFAld0';

// // /* eslint-enable max-len */

// // function urlB64ToUint8Array(base64String) {
// //   const padding = '='.repeat((4 - base64String.length % 4) % 4);
// //   const base64 = (base64String + padding)
// //     .replace(/\-/g, '+')
// //     .replace(/_/g, '/');

// //   const rawData = window.atob(base64);
// //   const outputArray = new Uint8Array(rawData.length);

// //   for (let i = 0; i < rawData.length; ++i) {
// //     outputArray[i] = rawData.charCodeAt(i);
// //   }
// //   return outputArray;
// // }

// // self.addEventListener('push', function(event) {
// //   console.log('[Service Worker] Push Received.');
// //   console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

// //   const title = 'Push Codelab';
// //   const options = {
// //     body: 'Yay it works.',
// //     icon: 'images/homescreen-144.png',
// //     badge: 'images/homescreen.png'
// //   };

// //   event.waitUntil(self.registration.showNotification(title, options));
// // });

// // self.addEventListener('notificationclick', function(event) {
// //   console.log('[Service Worker] Notification click Received.');

// //   event.notification.close();

// //   event.waitUntil(
// //     clients.openWindow('https://developers.google.com/web/')
// //   );
// // });

// // self.addEventListener('pushsubscriptionchange', function(event) {
// //   console.log('[Service Worker]: \'pushsubscriptionchange\' event fired.');
// //   const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
// //   event.waitUntil(
// //     self.registration.pushManager.subscribe({
// //       userVisibleOnly: true,
// //       applicationServerKey: applicationServerKey
// //     })
// //     .then(function(newSubscription) {
// //       // TODO: Send to application server
// //       console.log('[Service Worker] New subscription: ', newSubscription);
// //     })
// //   );
// // });
