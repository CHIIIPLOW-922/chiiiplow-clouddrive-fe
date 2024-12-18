<template>
    <el-menu class="menu" text-color="#5882FA" active-text-color="#00BCD4" default-active="/all">
        <el-menu-item class="menu-item" v-for="item in menuList" :key="item.id" :index="item.path">
            <template #title>
                <el-icon :size="30" class="item-icon">
                    <component :is="item.icon"></component>
                </el-icon>
                <span class="item-name">{{ item.name }}</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
const menuList = [
    {
        id: "1",
        name: "全部",
        path: "/all",
        icon: "Menu"
    },
    {
        id: "2",
        name: "图片",
        path: "/picture",
        icon: "PictureFilled"
    },
    {
        id: "3",
        name: "文档",
        path: "/officeFile",
        icon: "Files"
    },
    {
        id: "4",
        name: "视频",
        path: "/video",
        icon: "VideoPlay"
    },
    {
        id: "5",
        name: "音乐",
        path: "/music",
        icon: "Headset"
    },
    {
        id: "6",
        name: "其他",
        path: "/other",
        icon: "MoreFilled"
    },
    {
        id: "7",
        name: "回收站",
        path: "/recycle",
        icon: "DeleteFilled"
    }
]
</script>

<style lang="scss">
.menu {
    height: 100%;
    overflow-y: auto;
    padding-top: 15px;
    .menu-item{ 
        display: flex;
        border-top:0.005px dotted lightblue;
        border-bottom:0.005px dotted lightblue;
        justify-content: center;
        
        margin-bottom: 20px;
        .item-icon{
            margin-right: 30px;
        }
        .item-name {
            padding-right: 20px;
        }
    }
}
</style>