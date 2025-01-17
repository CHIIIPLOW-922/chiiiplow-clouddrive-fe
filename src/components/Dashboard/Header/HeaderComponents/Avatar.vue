<template>
  <div class="avatar-component">
    <el-popover class="user-popover" placement="bottom-start" :width="250" trigger="click" :show-arrow="false">
      <el-form class="user-info">
        <el-form-item label="用户账号" class="user-popover-item">
         {{ username }}
        </el-form-item>
        <el-form-item label="用户昵称" class="user-popover-item">
          {{ userNickname }}
        </el-form-item>
        <el-form-item label="邮箱" class="user-popover-item">
          {{ userEmail }}
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
        <img v-if="userAvatarPath.length == 0" class="user-avatar" src="@/assets/image/default_user_image.png" />
        <img v-if="userAvatarPath.length > 0" class="user-avatar" :src="userAvatarPath">
      </template>
    </el-popover>


  </div>
</template>

<script setup>
import { onMounted, ref, toRaw } from 'vue';
import { userInfoStore } from '@/store/userState';
import SettingDialog from '@/components/Dashboard/Header/HeaderComponents/SettingDialog.vue';
import SettingButton from '@/components/Dashboard/Header/HeaderComponents/SettingButton.vue';
import LogoutButton from '@/components/Dashboard/Header/HeaderComponents/LogoutButton.vue';
const userStore = userInfoStore();
const userAvatarPath = ref('');
const username = ref('');
const userNickname = ref('');
const userEmail = ref('');
const isDialogVisible = ref(false);


const handleOpenDialog = () => {
  isDialogVisible.value = true;
}

const getUserInfo = async () => {
  await userStore.loadUserData();
  let res = toRaw(userStore.userData);
  userAvatarPath.value = res.avatarPath == null ? '' : res.avatarPath;
  username.value = res.username;
  userNickname.value = res.nickname;
  userEmail.value = res.email;
}

onMounted(() => {
  getUserInfo();
})
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