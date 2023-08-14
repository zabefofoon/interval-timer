<template>
  <button @click="play">click</button>
  <audio ref="audio" src="./assets/alarm.mp3"></audio>
</template>

<script setup lang="ts">
import alarm from './assets/alarm.mp3'
import {ref} from "vue"

const audio = ref<HTMLAudioElement>()

const playAudio = async () => {
  const audio = new Audio(alarm)
  await audio.play()
}

const play = async () => {

  await playAudio()

  try {
    await askPermission()
    const serviceWorker = await navigator.serviceWorker.ready;
    console.log('serviceWorker' in navigator)
    console.log('PushManager' in window)
    if ('serviceWorker' in navigator
        && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        const data = {action: 'scheduleNotification'};
        registration?.active?.postMessage(data);
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

const askPermission = () => new Promise((resolve, reject) => {
  const permissionResult = Notification.requestPermission(resolve)
  if (permissionResult) permissionResult.then(resolve, reject)
})
    .then((permissionResult) => {
      if (permissionResult !== 'granted')
        throw new Error('We weren\'t granted permission.')
    })
</script>

<style scoped>

</style>
