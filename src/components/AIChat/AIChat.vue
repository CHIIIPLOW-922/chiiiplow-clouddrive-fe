<template>
    <div class="ai-chat">
        <Header></Header>
        <Aside></Aside>
        <Main></Main>
        <!-- <DSMain></DSMain> -->
    </div>
</template>

<script setup>
import Aside from '@/components/AIChat/AIChatComponents/Aside.vue';
import Header from '@/components/AIChat/AIChatComponents/Header.vue';
import Main from '@/components/AIChat/AIChatComponents/Main.vue';
</script>

<style lang='scss'>
.ai-chat{
    display: grid;
    grid-template-areas:
        "header header"
        "aside main";
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px minmax(0, 1fr);
    height: 100vh;
}
</style>