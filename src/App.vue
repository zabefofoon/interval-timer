<template>
  <button @click="play">click</button>
</template>

<script setup lang="ts">
import alarm from './assets/alarm.wav'

const play = async () => {
  try {
    await askPermission()
    const serviceWorker = await navigator.serviceWorker.ready;
    const audioContext = new AudioContext();
    const response = await fetch(alarm);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);

    source.start();

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        const data = { action: 'scheduleNotification' };
        registration.active.postMessage(data);
      } catch (error) {
        console.error('Error communicating with service worker:', error);
      }
    }

    /*setTimeout(() => {
      serviceWorker.showNotification('title', {
        actions: [
          {
            title: 'action1',
            action: 'toTab'
          },
          {
            title: 'action2',
            action: 'close'
          }
        ]
      })
    }, 3000)*/
  } catch (error) {
    console.error('Error while playing audio:', error);
  }
}

const askPermission = () => {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      resolve(result);
    })

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  })
      .then(function (permissionResult) {
        if (permissionResult !== 'granted') {
          throw new Error('We weren\'t granted permission.')
        }
      })
}
</script>

<style scoped>

</style>
