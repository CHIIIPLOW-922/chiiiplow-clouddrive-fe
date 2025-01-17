<template>
  <div class="header">
    <div class="logo-wrapper">
      <LogoWrapper />
    </div>
    <div class="header-search">
      <SearchInput />
    </div>
    <div class="header-avatar">
      <Avatar />
    </div>
    
  </div>
</template>

<script setup>
import Avatar from '@/components/Dashboard/Header/HeaderComponents/Avatar.vue';
import SearchInput from '@/components/Dashboard/Header/HeaderComponents/SearchInput.vue';
import LogoWrapper from '@/components/LogoWrapper.vue'
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid var(--el-border-color);
  // border-right: 0.05px dotted #6C6E72;
  grid-area: header;
  display: flex;
  align-items: center;
  // width: 100%;
  .logo-wrapper {}

  // .user-image {
  //   width: 40px;
  //   height: 40px;
  //   border: 1px solid black;
  //   border-radius: 50%;
  //   position: absolute;
  //   top: 12px;
  //   left: 15px;
  // }

  .header-search {
    position: relative;
    // top: 25px;
    left: 50px;
  }

  .header-avatar {
    position: relative;
    // top: 18px;
    // right: 80px;
    left: 1270px;
  }

}
</style>