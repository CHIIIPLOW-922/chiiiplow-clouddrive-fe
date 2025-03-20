<template>
    <div class="chat-aside" ref="scrollContainer" @scroll="handleScroll"
        :class="{ 'show-scrollbar': scrollbarVisible }">
        <el-button v-for="item in chatList" :key="item.id" class="chat-button" text type="primary" size="large"
            :class="{ 'active-button': activeChatId === item.id }" @click="activeChat(item)">{{ item.name }}</el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const scrollContainer = ref(null)
let hideTimeout = null;
const activeChatId = ref(null);
const activeChat = (item) => {
    let params = {};
    Object.assign(params, item);
    activeChatId.value = item.id;
    console.log(params);
}

const scrollbarVisible = ref(false);
// 监听滚动
const handleScroll = () => {
    scrollbarVisible.value = true;

    // 清除上一次的隐藏定时器
    if (hideTimeout) clearTimeout(hideTimeout);

    // 设置新的隐藏定时器
    hideTimeout = setTimeout(() => {
        scrollbarVisible.value = false;
    }, 1000); // 1 秒后淡出
};
const chatList = ref([
    {
        name: "test",
        id: 123
    },
    {
        name: "test1",
        id: 124
    },
    {
        name: "test2",
        id: 125
    },
    {
        name: "test3",
        id: 126
    },
    {
        name: "test",
        id: 127
    },
    {
        name: "test1",
        id: 128
    },
    {
        name: "test2",
        id: 129
    },
    {
        name: "test3",
        id: 130
    },
    {
        name: "test",
        id: 131
    },
    {
        name: "test1",
        id: 132
    },
    {
        name: "test2",
        id: 133
    },
    {
        name: "test3",
        id: 134
    },
    {
        name: "test",
        id: 135
    },
    {
        name: "test1",
        id: 136
    },
    {
        name: "test2",
        id: 137
    },
    {
        name: "test3",
        id: 138
    },
    {
        name: "test",
        id: 139
    },
    {
        name: "test1",
        id: 140
    },
    {
        name: "test2",
        id: 141
    },
    {
        name: "test3",
        id: 142
    },
    {
        name: "test",
        id: 143
    },
    {
        name: "test1",
        id: 144
    },
    {
        name: "test2",
        id: 145
    },
    {
        name: "test3",
        id: 146
    }
])

</script>

<style lang="scss" scoped>
.chat-aside {
    border-right: 1px solid var(--el-border-color);
    padding-bottom: 20px;
    display: flex;
    flex-direction: column; // 垂直排列
    overflow-y: scroll;
    

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

    .chat-button {
        margin: 10px 20px;
        height: 40px;
        font-size: 16px;
        border-radius: 8px;
    }

    /* 选中状态的按钮 */
    .active-button {
        background-color: var(--el-button-bg-color);
    }
}
</style>