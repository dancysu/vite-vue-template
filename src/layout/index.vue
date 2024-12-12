<template>
  <div class="layout">
    <aside :class="{ fold: fold ? true : false }">
      <Logo :fold="fold" />
      <el-scrollbar class="scrollbar">
        <Menu :isCollapse="fold" />
      </el-scrollbar>
    </aside>
    <section>
      <header>
        <Tabbar />
      </header>
      <main>
        <router-view></router-view>
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
const { fold } = toRefs(settingStore)
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
    .scrollbar {
      width: 100%;
      height: calc(100% - $header-height);
    }
  }
  .fold {
    width: $aside-min-width;
  }
  section {
    width: 100%;
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
      width: 100%;
      height: calc(100% - $header-height);
      background: #fff;
    }
  }
}
</style>
