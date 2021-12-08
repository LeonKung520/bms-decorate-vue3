import { defineStore } from 'pinia'

export const useCounterStore = defineStore('main', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
