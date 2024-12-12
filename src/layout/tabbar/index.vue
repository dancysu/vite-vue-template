<template>
  <div class="tabbar">
    <div class="tabbar__left">
      <el-icon class="icon" @click="toggleFold">
        <component :is="isFold ? 'Fold' : 'Expand'"></component>
      </el-icon>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabbar__right">
      <el-button icon="Refresh" circle />
      <el-button icon="FullScreen" circle />
      <el-button icon="Setting" circle />
      <el-dropdown placement="bottom" style="margin: 0 12px">
        <el-avatar
          :size="32"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import useSettingStore from '@/store/setting.ts'

const settingStore = useSettingStore()
// 使用 toRefs 来保持响应性
const { isFold, toggleFold } = toRefs(settingStore)
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  &__left {
    display: flex;
    align-items: center;
    height: 100%;
    .icon {
      margin: 0 20px;
    }
  }
  &__right {
    height: 100%;
    display: flex;
    align-items: center;
    .user {
      display: flex;
      align-items: center;
    }
  }
}
</style>
