<template>
  <div class="chat-main" :style="{ gridTemplateRows: `1fr ${inputHeight}px` }">
    <div class="history-item">
      <ChatHistory></ChatHistory>
    </div>
    <div class="chat-dialog">
      <ChatInput @update-height="updateInputHeight"></ChatInput>
    </div>
  </div>
</template>

<script setup>
import ChatHistory from '@/components/AIChat/AIChatComponents/Main/ChatHistory.vue';
import ChatInput from '@/components/AIChat/AIChatComponents/Main/ChatInput.vue';
import { ref } from 'vue';
const inputHeight = ref(200); // 初始输入框高度

const updateInputHeight = (height) => {
  inputHeight.value = Math.max(200, Math.min(height, 400)); // 限制最大高度
};
</script>

<style lang="scss">
.chat-main {
    display: grid;
    height: 1fr;
    grid-template-rows: 1fr 200px;
    background-color: var(--el-bg-color-overlay);
    transition: grid-template-rows 0.2s ease;
    .history-item {
      height: 100%;
      overflow-y: hidden;
    }
}

</style>