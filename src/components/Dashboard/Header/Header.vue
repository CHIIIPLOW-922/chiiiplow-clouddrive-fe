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
    <div class="setting-item">
      <SettingButton @open-dialog="handleOpenDialog" />
    </div>
    <SettingDialog v-model="isDialogVisible" />
  </div>
</template>

<script setup>
import SettingButton from '@/components/Dashboard/Header/HeaderComponents/SettingButton.vue';
import Avatar from '@/components/Dashboard/Header/HeaderComponents/Avatar.vue';
import SettingDialog from '@/components/Dashboard/Header/HeaderComponents/SettingDialog.vue';
import SearchInput from '@/components/Dashboard/Header/HeaderComponents/SearchInput.vue';
import LogoWrapper from '@/components/LogoWrapper.vue'
import { ref } from 'vue';
const isDialogVisible = ref(false);
const handleOpenDialog = () => {
  isDialogVisible.value = true;
}
</script>

<style lang="scss">
.header {
  border: 0.05px dotted #6C6E72;
  grid-area: header;
  display: flex;
  align-items: center;

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
    position: absolute;
    // top: 25px;
    left: 300px;
  }

  .header-avatar {
    position: absolute;
    // top: 18px;
    right: 80px;
  }

  .setting-item {
    position: absolute;
    // top: 22px;
    right: 25px;
  }
}
</style>