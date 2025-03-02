<template>
  <div class="chat-container">
    <!-- 对话历史区域 -->
    <div class="chat-history" ref="chatScroll">
      <div
        v-for="(message, index) in chatHistory"
        :key="index"
        class="message-bubble"
        :class="message.role"
      >
        <div class="avatar">
          <img v-if="message.role === 'user'" src="./user-avatar.png" />
          <img v-else src="./ai-avatar.png" />
        </div>
        <div class="content">
          <div
            class="message-content"
            v-html="renderContent(message.content)"
          ></div>
          <div v-if="message.loading" class="typing-indicator">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="input-wrapper">
      <div class="input-padding">
        <div class="input-box">
          <el-input
            v-model="inputText"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 6 }"
            placeholder="输入你的问题..."
            @keydown.enter.exact.prevent="handleSend"
            class="custom-input"
          >
            <template #append>
              <el-button
                type="primary"
                :loading="sending"
                @click="handleSend"
                class="send-button"
                :disabled="!inputText.trim()"
              >
                <el-icon class="send-icon"><Promotion /></el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import MarkdownIt from "markdown-it";
import { nextTick, ref } from "vue";

// 初始化Markdown解析器
const md = new MarkdownIt({
  html: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return "";
  },
});

// 对话数据
const chatHistory = ref([]);
const inputText = ref("");
const sending = ref(false);
const chatScroll = ref(null);

// 内容渲染
const renderContent = (content) => {
  const withCodeBlocks = content.replace(
    /```(\w+)?\n([\s\S]+?)```/g,
    "<pre><code>$2</code></pre>"
  );
  return md.render(withCodeBlocks);
};

// 发送消息
const handleSend = async () => {
  if (!inputText.value.trim() || sending.value) return;

  const userMessage = {
    role: "user",
    content: inputText.value.trim(),
    timestamp: new Date().getTime(),
  };

  const aiMessage = {
    role: "assistant",
    content: "",
    loading: true,
    timestamp: new Date().getTime(),
  };

  // 添加消息
  chatHistory.value.push(userMessage, aiMessage);
  inputText.value = "";
  await nextTick();
  scrollToBottom();

  // 模拟AI回复
  sending.value = true;
  const mockResponse = `**示例回答**：
    
  \`\`\`javascript
function example() {
console.log('代码示例');
}
  \`\`\`
  
  主要功能：
  1. 功能点一
  2. 功能点二
  3. 最佳实践`;

  // 打字机效果
  let index = 0;
  const currentMessage = chatHistory.value[chatHistory.value.length - 1];
  const typeInterval = setInterval(() => {
    if (index < mockResponse.length) {
      currentMessage.content += mockResponse.charAt(index);
      index++;
      scrollToBottom();
    } else {
      clearInterval(typeInterval);
      currentMessage.loading = false;
      sending.value = false;
    }
  }, 30);
};

// 自动滚动到底部
const scrollToBottom = () => {
  if (chatScroll.value) {
    chatScroll.value.scrollTop = chatScroll.value.scrollHeight;
  }
};
</script>
  
<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 1fr;
}

.chat-history {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
}

.message-bubble {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.message-bubble.user {
  flex-direction: row-reverse;
}
.input-padding {
    padding: 20px;
    background-color: var(--el-border-color);
}

.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.content {
  max-width: 680px;
  padding: 16px 24px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
}

.message-bubble.user .content {
  background: var(--el-color-primary);
  color: white;
  border-radius: 12px 12px 0 12px;
}

.input-wrapper {
  padding: 16px 24px;
  background: white;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);
  border-top: 1px solid #f0f0f0;
}

.input-box {
  position: relative;
  border-radius: 20px;
  background: white;
  box-shadow: 0 2px 12px rgba(25, 195, 125, 0.1);
}

:deep(.custom-input .el-textarea__inner) {
  border: none !important;
  padding: 16px 60px 16px 24px !important;
  border-radius: 20px !important;
  box-shadow: none !important;
  font-size: 16px;
  line-height: 1.6;
  background: transparent !important;
  resize: none !important;
}

:deep(.custom-input .el-textarea__inner::placeholder) {
  color: #999;
}

:deep(.custom-input .el-input-group__append) {
  background: transparent !important;
  border: none !important;
  padding: 0 16px 0 0 !important;
}

.send-button {
  width: 40px;
  height: 40px !important;
  border-radius: 50% !important;
  padding: 0 !important;
  background: #19c37d !important;
  transition: all 0.2s ease;
}

.send-button:not(:disabled):hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(25, 195, 125, 0.3);
}

.send-button:disabled {
  background: #e5e7eb !important;
  cursor: not-allowed;
}

.send-icon {
  font-size: 18px;
  color: white;
}

.typing-indicator {
  display: flex;
  gap: 6px;
  margin-top: 12px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #ddd;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
}

pre {
  background: #1e1e1e !important;
  padding: 16px !important;
  border-radius: 8px !important;
  overflow-x: auto;
  margin: 12px 0;
}

code {
  font-family: "JetBrains Mono", monospace !important;
  font-size: 14px;
}

@media (max-width: 768px) {
  .input-wrapper {
    padding: 12px;
  }

  :deep(.custom-input .el-textarea__inner) {
    padding: 12px 50px 12px 16px !important;
    font-size: 14px;
  }

  .send-button {
    width: 36px;
    height: 36px !important;
  }
}
</style>