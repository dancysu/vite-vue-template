<template>
  <div class="layout">
    <aside>侧边栏</aside>
    <section>
      <header>header</header>
      <main>main</main>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
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
  }

  section {
    width: calc(100% - $aside-max-width);
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      height: 60px;
      background: #ffd100;
    }

    main {
      width: 100%;
      height: calc(100% - 60px);
      background: #fff;
    }
  }
}
</style>
