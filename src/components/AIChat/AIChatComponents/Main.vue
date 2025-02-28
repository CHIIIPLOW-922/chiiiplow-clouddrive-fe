<template>
    <div class="chat-main">
        <!-- 聊天内容区域 -->
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
            <div class="message user">你能帮我写个 Vue 代码吗？</div>
        </div>

        <!-- 输入框和发送按钮区域 -->
        <div class="chat-dialog">
            <div class="chat-input">
                <!-- 自适应输入框 -->
                <textarea v-model="question" @input="autoResize" placeholder="输入消息..." ref="textarea" />
            </div>
            <div class="send-btn">
                <button @click="sendMessage">发送</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const question = ref('');
const textarea = ref(null);

// 最大高度限制
const MAX_HEIGHT = 150; // 最大高度，单位为px

// 自适应调整输入框高度
const autoResize = () => {
    const el = textarea.value;
    el.style.height = 'auto'; // 先恢复为auto，以便计算实际高度
    const scrollHeight = el.scrollHeight;
    el.style.height = `${Math.min(scrollHeight, MAX_HEIGHT)}px`; // 设置为内容的高度，但不超过最大高度
};

const sendMessage = () => {
    if (question.value.trim()) {
        console.log(question.value);
        question.value = ''; // 发送后清空输入框
    }
};
</script>

<style lang="scss">
.chat-main {
    display: grid;
    grid-template-rows: 1fr 100px;
    // flex-direction: column;
    height: 1fr;
    justify-content: center;
    overflow: hidden;
}

.chat-bubble {
    width: 80%;
    padding: 20px;
    overflow-y: auto;
    .message {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 15px;
        max-width: 80%;
        word-wrap: break-word;
    }

    .bot {
        background-color: #f1f1f1;
        align-self: flex-start;
    }

    .user {
        background-color: var(--el-color-primary);
        color: white;
        align-self: flex-end;
    }
}

.chat-dialog {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: transparent;
    // border-top: 1px solid #e6e6e6;

    .chat-input {
        flex-grow: 1;
        position: relative;
        padding: 12px;
        background-color: var(--el-border-color);
        border-radius: 20px;
        textarea {
            width: 100%;
            font-size: 14px;
            border-radius: 15px;
            border: 1px solid var(--el-border-color);
            background-color: var(--el-border-color);
            resize: none;
            outline: none;
            box-sizing: border-box;
            transition: all 0.2s ease;
            overflow-y: auto;
            /* Allow vertical scroll */
            min-height: 50px;
            /* Minimum height */
            max-height: 150px;
            /* Maximum height */

        }
    }

    .send-btn {
        margin-left: 10px;

        button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s;

            &:hover {
                background-color: #0056b3;
            }
        }
    }
}

/* 自定义滚动条 */
.chat-input textarea::-webkit-scrollbar {
    width: 8px;
    /* 设置滚动条宽度 */
}

.chat-input textarea::-webkit-scrollbar-track {
    background-color: var(--el-border-color);
    /* 滚动条轨道 */
    border-radius: 10px;
}

.chat-input textarea::-webkit-scrollbar-thumb {
    /* 滚动条按钮颜色 */
    border-radius: 10px;
    /* 滚动条按钮圆角 */
}

</style>