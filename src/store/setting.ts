import { ref } from 'vue'
import { defineStore } from 'pinia'

const useSettingStore = defineStore('setting', () => {
  const isFold = ref(false)
  function toggleFold() {
    isFold.value = !isFold.value
  }

  return { isFold, toggleFold }
})

export default useSettingStore
