<template>
    <div class="chat-main">
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
        <div class="chat-dialog">
            <div class="chat-input">

                <el-input type="textarea" v-model="question" @input="autoResize" placeholder="输入消息..." ref="textarea" />
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
    display: flex;
    flex-direction: column;
    height: 1fr;
    background-color: var(--el-bg-color);
}

/* 聊天内容区域 */
.chat-bubble {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .message {
        max-width: 80%;
        padding: 12px 16px;
        border-radius: 12px;
        word-wrap: break-word;
        font-size: 14px;
        line-height: 1.5;
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

/* 输入框和发送按钮区域 */
.chat-dialog {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 20px;
    background-color: var(--el-border-color);
}

/* 输入框容器 */
.chat-input {
    flex-grow: 1;
    display: flex;
    align-items: center;
    background-color: var(--el-border-color);
    border-radius: 20px;
    padding: 10px 14px;
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
            /* Allow vertical scroll */
            min-height: 50px;
            /* Minimum height */
            max-height: 150px;
            /* Maximum height */

        }
}

/* 处理 el-input 样式 */
// :deep(.el-textarea) {
//     flex-grow: 1;
//     display: flex;
// }

// /* 让 textarea 没有边框，并且背景色始终一致 */
// :deep(.el-textarea__inner) {
//     background-color: var(--el-border-color);
//     border: none !important;
//     box-shadow: none !important;
//     resize: none;
//     min-height: 50px;
//     max-height: 150px;
//     padding: 8px;
//     font-size: 14px;
//     outline: none;
//     transition: none;
// }

/* 确保 hover 和 focus 时边框颜色不变 */
.el-textarea__inner:hover {
    border: none !important;
    box-shadow: none !important;
}
.el-textarea__inner:focus {
    border: none !important;
    box-shadow: none !important;
}
.el-textarea__inner:not(:hover):not(:focus) {
    border: none !important;
    box-shadow: none !important;
}

/* 发送按钮 */
.send-btn {
    margin-left: 10px;
}

.send-btn button {
    background-color: var(--el-color-primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
}

.send-btn button:hover {
    background-color: var(--el-color-primary-dark-2);
}

// .chat-main {
//     display: grid;
//     grid-template-rows: 1fr 100px;
//     // flex-direction: column;
//     height: 1fr;
//     overflow: hidden;
// }

// .chat-bubble {
//     padding: 20px;
//     overflow-y: auto;
//     .message {
//         margin-bottom: 10px;
//         padding: 10px;
//         border-radius: 15px;
//         max-width: 80%;
//         word-wrap: break-word;
//     }

//     .bot {
//         background-color: #f1f1f1;
//         align-self: flex-start;
//     }

//     .user {
//         background-color: var(--el-color-primary);
//         color: white;
//         align-self: flex-end;
//     }
// }

// .chat-dialog {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 10px;
//     background-color: transparent;
//     // border-top: 1px solid #e6e6e6;

//     .chat-input {
//         flex-grow: 1;
//         position: relative;
//         padding: 12px;
//         background-color: var(--el-border-color);
//         border-radius: 20px;
//         textarea {
//             width: 100%;
//             font-size: 14px;
//             border-radius: 15px;
//             border: 1px solid var(--el-border-color);
//             background-color: var(--el-border-color);
//             resize: none;
//             outline: none;
//             box-sizing: border-box;
//             transition: all 0.2s ease;
//             overflow-y: auto;
//             /* Allow vertical scroll */
//             min-height: 50px;
//             /* Minimum height */
//             max-height: 150px;
//             /* Maximum height */

//         }
//     }

//     .send-btn {
//         margin-left: 10px;

//         button {
//             background-color: #007bff;
//             color: white;
//             border: none;
//             padding: 10px 20px;
//             border-radius: 50px;
//             cursor: pointer;
//             font-size: 14px;
//             transition: all 0.3s;

//             &:hover {
//                 background-color: #0056b3;
//             }
//         }
//     }
// }

// /* 自定义滚动条 */
// .chat-input textarea::-webkit-scrollbar {
//     width: 8px;
//     /* 设置滚动条宽度 */
// }

// .chat-input textarea::-webkit-scrollbar-track {
//     background-color: var(--el-border-color);
//     /* 滚动条轨道 */
//     border-radius: 10px;
// }

// .chat-input textarea::-webkit-scrollbar-thumb {
//     /* 滚动条按钮颜色 */
//     border-radius: 10px;
//     /* 滚动条按钮圆角 */
// }

</style>