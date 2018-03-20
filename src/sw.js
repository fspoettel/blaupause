/* eslint-disable no-undef */
importScripts('workbox-v3.0.0/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: 'workbox-v3.0.0',
});

workbox.skipWaiting();
workbox.clientsClaim();

/*
 * Default handler for all other requests (html, json, xml)
 * If your page will be purely static, you could set this to cacheWhileRevalidate()
 */
workbox.routing.setDefaultHandler(workbox.strategies.networkFirst({
  cacheName: 'fallback',
}));

/*
 * Caches static files, responds from network first
 */
workbox.routing.registerRoute(
  /\.(?:css|js|svg)$/,
  workbox.strategies.networkFirst({
    cacheName: 'static-files',
  }),
  'GET',
);

/*
 * Caches google fonts
 */
workbox.routing.registerRoute(
  /https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
  'GET',
);

/*
 * Cache images
 */
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 2592000,
      }),
    ],
  }),
  'GET',
);
