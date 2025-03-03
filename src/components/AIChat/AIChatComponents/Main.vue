<template>
  <div class="chat-main">
    <div class="history-item">
      <ChatHistory></ChatHistory>
    </div>
    <div class="chat-dialog">
      <ChatInput></ChatInput>
    </div>
  </div>
</template>

<script setup>
import ChatHistory from '@/components/AIChat/AIChatComponents/Main/ChatHistory.vue';
import ChatInput from '@/components/AIChat/AIChatComponents/Main/ChatInput.vue';
</script>

<style lang="scss">
.chat-main {
    display: grid;
    height: 1fr;
    grid-template-rows: 1fr 200px;
    background-color: var(--el-bg-color-overlay);
    .history-item {
      height: 100%;
      overflow-y: hidden;
    }
}

</style>