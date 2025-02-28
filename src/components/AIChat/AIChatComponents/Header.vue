<template>
    <div class="chat-header">
        <div class="logo-wrapper">
            <LogoWrapper />
        </div>
        <div class="header-avatar">
            <Avatar />
        </div>
    </div>
</template>

<script setup>
import LogoWrapper from '@/components/LogoWrapper.vue';
import Avatar from '@/components/Dashboard/Header/HeaderComponents/Avatar.vue';
</script>

<style lang="scss">
.chat-header {
  border-bottom: 1px solid var(--el-border-color);
  // border-right: 0.05px dotted #6C6E72;
  grid-area: header;
  display: flex;
  align-items: center;
  // width: 100%;
  .logo-wrapper {
    flex: 1
  }

  // .user-image {
  //   width: 40px;
  //   height: 40px;
  //   border: 1px solid black;
  //   border-radius: 50%;
  //   position: absolute;
  //   top: 12px;
  //   left: 15px;
  // }

  .header-avatar {
    position: relative;
    // top: 18px;
    // right: 80px;
    right: 55px;
    
  }

}
</style>