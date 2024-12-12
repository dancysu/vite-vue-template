<template>
  <div class="logo">
    <div class="logo__image">
      <img v-if="!setting.logoHidden" :src="setting.logo" alt="logo" />
    </div>
    <h1 class="logo__title">
      {{ setting.title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import setting from '@/config.ts'
</script>

<style lang="scss" scoped>
.logo {
  width: $aside-max-width;
  height: $header-height;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &__image {
    min-width: 64px;
    display: flex;
    justify-content: center;
  }

  &__title {
    flex: 1;
    font-size: 24px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
