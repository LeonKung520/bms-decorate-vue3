<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ mainStore['count'] }}</p>
    <p>doubleCount: {{ mainStore['doubleCount'] }}</p>
    <button @click="mainStore['increment']">increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

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

<style scoped></style>
