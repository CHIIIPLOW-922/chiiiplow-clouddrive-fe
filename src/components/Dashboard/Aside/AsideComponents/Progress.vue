<template>
  <el-progress class="progress-item" :percentage="rate" :text-inside="!0" :stroke-width="15" :color="customColors" />
  <div class="progress-text">{{ usedSpace }} / {{ totalSpace }}</div>
</template>

<script setup>
import { computed } from 'vue';
import { userInfoStore } from '@/store/userState';
// import userAPI from '@/api/user';
const userStore = userInfoStore();
const rate = computed(() => userStore.usedSpaceRate);
const usedSpace = computed(() => userStore.usedSpace);
const totalSpace = computed(() => userStore.totalSpace);
const customColors = [
  { color: '#5882FA', percentage: 90 },
  { color: '#FE2E2E', percentage: 100 }
]
</script>

<style lang="scss">
.progress-item {
  width: 100%;
}
</style>