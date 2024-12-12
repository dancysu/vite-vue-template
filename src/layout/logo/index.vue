<template>
  <div class="logo">
    <img v-if="!setting.logoHidden" :src="setting.logo" alt="logo" />
    <h1
      v-if="!props.fold"
      class="title"
      :style="{ opacity: props.fold ? 0 : 1 }"
    >
      {{ setting.title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting.ts'

const props = defineProps(['fold'])
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $header-height;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
    color: #fff;
  }
  .title {
    transition: all 0.3s ease;
  }
}
</style>
