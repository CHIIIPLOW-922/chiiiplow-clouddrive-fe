<template>
    <el-button class="logout-button" circle :icon="SwitchButtonIcon" @click="logout" type="danger" plain  />
</template>
    

<script setup>
import { SwitchButton } from '@element-plus/icons-vue';
import userAPI  from '@/api/user';
import router from '@/router';
import { userInfoStore } from '@/store/userState';
const SwitchButtonIcon = SwitchButton
const userSotre = userInfoStore()
const logout = async ()=>{
    await userAPI.logout();
    localStorage.removeItem("access_token");
    userSotre.cleanUserInfo();
    router.push("/auth");
}
</script>

<style lang="scss">

</style>