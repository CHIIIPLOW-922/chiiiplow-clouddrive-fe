<template>
  <div class="main">
    main
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.main{
  grid-area: main;
  overflow-y: auto;
  // border: 1px solid black;
}
</style>