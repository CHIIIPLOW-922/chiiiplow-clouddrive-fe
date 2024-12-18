<template>
  <el-progress class="progress-item" :percentage="89" :text-inside="!0" :stroke-width="15" :color="customColors" />
</template>

<script setup>
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