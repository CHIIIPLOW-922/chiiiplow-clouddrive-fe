<template>
  <el-progress class="progress-item" :percentage="rate" :text-inside="!0" :stroke-width="15" :color="customColors" />
  <div class="progress-text">{{ usedSpace }} / {{ totalSpace }}</div>
</template>

<script setup>
import { onMounted, ref, toRaw } from 'vue';
import { userInfoStore } from '@/store/userState';
// import userAPI from '@/api/user';
const userStore = userInfoStore();
const rate = ref(0);
const usedSpace = ref('0 B')
const totalSpace = ref('0 B')
const getUserSpaceInfo = async () => {
  await userStore.loadUserData();
  let res = toRaw(userStore.userData);
  rate.value = res.usedSpaceRate;
  usedSpace.value = res.usedSpace;
  totalSpace.value = res.totalSpace;
}
const customColors = [
  { color: '#5882FA', percentage: 90 },
  { color: '#FE2E2E', percentage: 100 }
]
onMounted(() => {
  getUserSpaceInfo();
})
</script>

<style lang="scss">
.progress-item {
  width: 100%;
}
</style>