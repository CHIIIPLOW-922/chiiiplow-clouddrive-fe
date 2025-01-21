<template>
  <div class="aside">
    <div class="aside-menu">
      <Menu></Menu>
    </div>
    <div class="aside-progress">
      <Progress></Progress>
    </div>
  </div>
</template>

<script setup>
import Menu from "@/components/Dashboard/Aside/AsideComponents/Menu.vue";
import Progress from "@/components/Dashboard/Aside/AsideComponents/Progress.vue";
</script>

<style lang="scss">
.aside {
  grid-area: aside;
  display: flex;
  flex-direction: column; /* 垂直布局 */
  height: 100%;

  .aside-menu {
    flex: 1; /* 占据剩余空间 */
    overflow-y: auto; /* 内容超出时滚动 */
  }
  
  .aside-progress {
    border-left:1px solid var(--el-border-color);
    border-right:1px solid var(--el-border-color);
    width: 100%;

    padding: 0 20px;
    position: sticky; /* 保持在容器底部 */
    bottom: 0; /* 距离底部对齐 */
    padding-bottom: 30px;
    z-index: 10; /* 保证不被其他内容覆盖 */
  }
}
</style> 
