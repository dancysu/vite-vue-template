<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <el-icon class="icon" @click="changeIcon">
        <component :is="fold ? 'Fold' : 'Expand'"></component>
      </el-icon>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabbar_right">
      <el-button icon="Refresh" circle />
      <el-button icon="FullScreen" circle />
      <el-button icon="Setting" circle />
      <el-avatar
        :size="32"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
      <el-dropdown>
        <span>
          admin<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
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
const { fold, changeIcon } = toRefs(settingStore)
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  &_left {
    display: flex;
    align-items: center;
    height: 100%;
    .icon {
      margin: 0 20px;
    }
  }
  &_right {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
