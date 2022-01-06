<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ mainStore['count'] }}</p>
    <p class='test-color'>doubleCount: {{ mainStore['doubleCount'] }}</p>
    <button @click="mainStore['increment']">increment</button>
    <button @click="mainStore['reset']">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

console.log('URL: ', import.meta.env.VITE_APP_WEB_URL)
const mainStore = useCounterStore()

// import { ref } from 'vue'
// import { defineStore } from 'pinia'
//
// export const useCounterStore = defineStore('main', () => {
//   const count = ref(0)
//   function increment() {
//     count.value++
//   }
//
//   return { count, increment }
// })
</script>

<style scoped lang='scss'>
.test-color {
  color: $test-color;
}
</style>
