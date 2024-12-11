<template>
  <div class="auth-layouts">
    <div class="right-logo">
      <img src="@/assets/image/right-logo.png" class="auth-image">
    </div>
    <div class="auth-form">
      <div class="auth-form-item">
        <slot></slot>
      </div>
    </div>
    <div class="auth-theme-switch">
      <ThemeSwitch />
    </div>

  </div>
</template>

<script setup>
import ThemeSwitch from '@/components/ThemeSwitch.vue';
</script>

<style lang="scss">
.auth-layouts {
  width: 100%;
  height: 100%;
  display: flex;

  .right-logo {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: right;

    .auth-image {
      width: 800px;
      margin-bottom: 50px;
    }
  }

  .auth-form {
    display: flex;
    width: 40%;
    align-items: center;
    justify-content:left;
    .auth-form-item{
      margin-bottom: 50px;
    }
  }

  .auth-theme-switch {
    position: absolute; /* 绝对定位 */
    top: 50px; /* 距离顶部 10px */
    right: 75px; /* 距离右边 10px */
    z-index: 10; /* 确保在最上层 */
  }
}
</style>