<template>
  <div class="layout">
    <aside :class="{ fold: isFold }">
      <Logo />
      <el-scrollbar class="scrollbar">
        <Menu :isCollapse="isFold" />
      </el-scrollbar>
    </aside>
    <section>
      <header>
        <Tabbar />
      </header>
      <main>
        <router-view />
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Tabbar from './tabbar/index.vue'
import useSettingStore from '@/store/setting.ts'
const settingStore = useSettingStore()
// 使用 toRefs 来保持响应性
const { isFold } = toRefs(settingStore)
</script>
<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;

  aside {
    width: $aside-max-width;
    height: 100%;
    background: #242424;
    transition: width 0.3s ease-in-out;

    &.fold {
      width: $aside-min-width;
    }
    .scrollbar {
      width: 100%;
      height: calc(100% - $header-height);
    }
  }

  section {
    flex: 1;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      height: $header-height;
      background: #ffd100;
    }

    main {
      flex: 1;
      background: #fff;
    }
  }
}
</style>
