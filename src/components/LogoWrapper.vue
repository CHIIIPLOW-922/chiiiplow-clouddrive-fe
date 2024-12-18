<template>
  <div class="global-logo">
    <img src="@/assets/image/logo.png" class="header-logo" />
      <h3 class="logo-title">CHIIIPLOW-CLOUDDRIVE</h3>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.global-logo {
  width: 250px;
  height: 80px;
  // border-left: 0.05px dotted #6C6E72;
  border-right: 0.05px dotted #6C6E72;
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
      left: 20px;
      bottom: 10px;
    }
}
</style>