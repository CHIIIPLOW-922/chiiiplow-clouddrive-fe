<template>
  <div class="global-logo" @click="goToDashboard">
    <img src="@/assets/image/logo.png" class="header-logo" />
      <div class="logo-title">
        <el-text size="large" tag="b">CHIIIPLOW-CLOUDDRIVE</el-text>
      </div>
  </div>
</template>

<script setup>
import router from '@/router'
const goToDashboard = () => {
  let path = router.currentRoute._value.fullPath
  if (path == '/dashboard') return;
  router.push('/dashboard')
}
</script>

<style lang="scss">
.global-logo {
  width: 250px;
  height: 80px;
  // border-left: 0.05px dotted #6C6E72;
  border-right: 1px solid var(--el-border-color);
    // justify-content: center;
    // align-items: center;
    .header-logo{
      position: relative;
      width: 40px;
      height: 40px;
      // position: relative;
      top: 10px;
      left: 105px;
    }
    .logo-title {
      position: relative;
      display: flex;
      justify-content: center;
      margin-top: 5px;
      align-items: center;
      // left: 20px;
      // bottom: 1px;
    }
}
</style>