<template>
  <div class="aside">
    <el-menu class="menu-item" text-color="#5882FA" active-text-color="#00BCD4">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
    <div class="aside-progress">
      <Progress></Progress>
    </div>
    
  </div>
</template>

<script setup>
import Progress from '@/components/Dashboard/Aside/AsideComponents/Progress.vue';

</script>
<style lang="scss">
.aside {
  grid-area: aside;
  // border: 1px solid black;
  // overflow-y: auto;
  height: 100%;

  .menu-item {
    overflow-y: auto;
    height: 100%;
  }
  .aside-progress {
    width: 100%;
    padding: 0 20px;
    position:relative;
    bottom: 50px;
  }

}
</style>