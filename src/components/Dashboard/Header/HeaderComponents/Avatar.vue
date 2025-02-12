<template>
  <div class="avatar-component">
    <el-popover class="user-popover" placement="bottom-start" :width="250" trigger="click" :show-arrow="false">
      <el-form class="user-info">
        <el-form-item label="用户账号" class="user-popover-item">
         {{ username }}
        </el-form-item>
        <el-form-item label="用户昵称" class="user-popover-item">
          {{ nickname }}
        </el-form-item>
        <el-form-item label="邮箱" class="user-popover-item">
          {{ email }}
        </el-form-item>
        <el-form-item class="avatar-button-group" >
          <div class="setting-item">
            <SettingButton @open-dialog="handleOpenDialog" />
          </div>
          <div class="avatar-logout-button">
            <LogoutButton />
          </div>
        </el-form-item>
      </el-form>
      <SettingDialog v-model="isDialogVisible" />
      <template #reference>
        <img v-if="avatarPath.length == 0" class="user-avatar" src="@/assets/image/default_user_image.png" />
        <img v-if="avatarPath.length > 0" class="user-avatar" :src="avatarPath">
      </template>
    </el-popover>


  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { userInfoStore } from '@/store/userState';
import SettingDialog from '@/components/Dashboard/Header/HeaderComponents/SettingDialog.vue';
import SettingButton from '@/components/Dashboard/Header/HeaderComponents/SettingButton.vue';
import LogoutButton from '@/components/Dashboard/Header/HeaderComponents/LogoutButton.vue';
const userStore = userInfoStore();
const isDialogVisible = ref(false);
const username = computed(()=> userStore.username);
const email = computed(()=> userStore.email);
const nickname = computed(()=> userStore.nickname);
const avatarPath = computed(()=> userStore.avatarPath);


const handleOpenDialog = () => {
  isDialogVisible.value = true;
}
// const getUserInfo = async () => {
//   await userStore.loadUserData();
//   let res = toRaw(userStore.userData);
//   userAvatarPath.value = res.avatarPath == null ? '' : res.avatarPath;
//   username.value = res.username;
//   userNickname.value = res.nickname;
//   userEmail.value = res.email;
// }
</script>

<style lang="scss">
.user-avatar {
  border-radius: 50%;
  width: 45px;
  height: 45px;
}
.user-popover-item {

}
.avatar-button-group {
  .setting-item {
    width: 50%;
    display: flex;
    justify-content: center;
    padding-left: 25px;
  }
  .avatar-logout-button {
    width: 50%;
    display: flex;
    justify-content: center;
    padding-right: 25px;
  }
}
</style>