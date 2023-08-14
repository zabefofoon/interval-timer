// src/service-worker.js
self.addEventListener('install', event => {
  console.log(event)
  // 설치 로직
});

self.addEventListener('fetch', event => {
  console.log(event)
  // 캐싱 및 네트워크 로직
});