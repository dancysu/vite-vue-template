import { ref } from 'vue'
import { defineStore } from 'pinia'

const useSettingStore = defineStore('counter', () => {
  const fold = ref(false)
  function changeIcon() {
    console.log('changeIcon')
    fold.value = !fold.value
  }

  return { fold, changeIcon }
})
export default useSettingStore
