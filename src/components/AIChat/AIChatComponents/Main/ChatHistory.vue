<template>
  <div class="chat-history" ref="historyScrollbar" @scroll="handleScroll"
    :class="{ 'show-scrollbar': scrollbarVisible }">
    <div class="chat-bubble">
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？你好，我是ChatGPT，如何帮助你？你好，我是ChatGPT，如何帮助你？你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message bot">你好，我是ChatGPT，如何帮助你？</div>
      <div class="message user">你能帮我写个 Vue 代码吗？</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const historyScrollbar = ref(null)
let hideTimeout = null;
const scrollbarVisible = ref(null)
const handleScroll = () => {
  scrollbarVisible.value = true;

  // 清除上一次的隐藏定时器
  if (hideTimeout) clearTimeout(hideTimeout);

  // 设置新的隐藏定时器
  hideTimeout = setTimeout(() => {
    scrollbarVisible.value = false;
  }, 1000); // 1 秒后淡出
}
</script>

<style lang="scss">
.chat-history {
  padding: 0px 415px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  color: var(--el-menu-text-color);
  transition: all 1s ease-in-out;

  // 默认滚动条隐藏 
  &.show-scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--el-border-color);
    transition: background-color 1s ease-in;
  }


  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    transition: background-color 1s ease-out;
    width: 5px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .chat-bubble {
    height: 100%;
    min-width: 370px;
  }
}
</style>