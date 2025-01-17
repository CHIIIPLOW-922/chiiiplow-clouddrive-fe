<template>
  <div class="container">
    <Header></Header>
    <Aside></Aside>
    <Main></Main>
  </div>
</template>

<script setup>
import Header from '@/components/Dashboard/Header/Header.vue';
import Aside from '@/components/Dashboard/Aside/Aside.vue';
import Main from '@/components/Dashboard/Main/Main.vue';
import { onMounted } from 'vue';
onMounted(() => {
})
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "aside main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
}
</style>