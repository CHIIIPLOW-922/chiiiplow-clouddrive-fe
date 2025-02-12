<template>
  <div class="dashboard">
    <DashboardLayouts>
    </DashboardLayouts>

  </div>
</template>

<script setup>
import DashboardLayouts from '@/layouts/DashboardLayouts.vue';
import { userInfoStore } from '@/store/userState';
const userState = userInfoStore();
const getUserInfo = async () => {
  await userState.loadUserData();
}
getUserInfo();
</script>


<style lang="scss">

</style>