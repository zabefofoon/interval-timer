// src/service-worker.js
self.addEventListener('install', event => {
  console.log(event)
  // 설치 로직
});

self.addEventListener('fetch', event => {
  console.log(event)
  // 캐싱 및 네트워크 로직
});

self.addEventListener('push', event => {
  const options = {
    body: '알림 내용',
    icon: '알림 아이콘 URL',
  };

  event.waitUntil(
      self.registration.showNotification('알림 제목', options)
  );
})

self.addEventListener('message', event => {
  if (event.data && event.data.action === 'scheduleNotification') {
    setTimeout(() => {
      const options = {
        body: '3초가 지났습니다!',
        icon: '알림 아이콘 URL',
      };

      self.registration.showNotification('알림 제목', options);
    }, 3000);
  }
})