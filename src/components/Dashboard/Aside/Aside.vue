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
  // border: 1px solid black;
  // overflow-y: auto;
  height: 100%;

  .aside-menu {
    // overflow-y: auto;
    height: 90%;
    
  }
  .aside-progress {
    width: 100%;
    padding: 0 20px;
    position: relative;
    bottom: 50px;
  }
  
}
</style>