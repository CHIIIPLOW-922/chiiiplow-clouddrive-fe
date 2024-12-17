<template>
  <div class="header">

    <div class="user-image">头像</div>
    <!-- <div class="theme-switch">
        <ThemeSwitch />
      </div> -->
    <div class="setting-item">
      <SettingButton @open-dialog="handleOpenDialog" />
    </div>
    <SettingDialog v-model="isDialogVisible"  />
  </div>
</template>

<script setup>
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import SettingButton from '@/components/Dashboard/Header/HeaderComponents/SettingButton.vue';
import SettingDialog from '@/components/Dashboard/Header/HeaderComponents/SettingDialog.vue';
import { ref } from 'vue';
const isDialogVisible = ref(false);
const handleOpenDialog = ()=>{
  isDialogVisible.value = true;
}
</script>

<style lang="scss">
.header {
  border: 0.05px solid #6C6E72;
  grid-area: header;
  display: flex;


  .user-image {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    top: 12px;
    left: 15px;
  }

  .setting-item {
    position: absolute;
    top: 22px;
    right: 25px;
  }

  // .theme-switch {
  //   position: absolute;
  //   top: 12px;
  //   right: 35px;
  // }
}
</style>