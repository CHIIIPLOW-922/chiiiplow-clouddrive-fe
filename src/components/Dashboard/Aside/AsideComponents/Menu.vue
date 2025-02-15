<!-- <template>
    <el-menu class="menu">
        <el-menu-item class="menu-item" v-for="item in menuList" :key="item.id" :index="item.path" @click="click(item.id)" >
            <template #title>
                <el-button link :type="'primary'" class="item-name" :icon="item.icon">{{ item.name }}</el-button>            
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
const click = (params)=>{
    console.log(params)
}
const select = (params) => {
    console.log(params)
}
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
    // padding-top: 15px;
    .menu-item{ 
        display: flex;
        // border-top: 1px solid var(--el-border-color);
        border-bottom: 0.5px solid var(--el-border-color);
        justify-content: center;
        height: 90px;
        // margin-bottom: 20px;
        .item-icon{
            margin-right: 30px;
        }
        .item-name {
            padding-right: 20px;
        }
    }
}
</style> -->
<template>
  <el-menu class="menu">
    <draggable
      tag="div"
      :list="menuList"
      @end="onDragEnd"
      :move="onMove"
      :group="{ name: 'menu', pull: 'clone', put: true }"
    >
      <template #item="{ element }">
        <el-menu-item
          class="menu-item"
          :key="element.id"
          :index="element.path"
          @click="click(element.id)"
        >
          <template #title>
            <el-button link :type="'primary'" class="item-name" :icon="element.icon">
              {{ element.name }}
            </el-button>
          </template>
        </el-menu-item>
      </template>
    </draggable>
  </el-menu>
</template>

<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

// 点击菜单项时的回调
const click = (params) => {
  console.log(params);
};

// 拖拽结束时的回调
const onDragEnd = (event) => {
  console.log("拖拽结束", event);
};

// 拖拽中的回调
const onMove = (event) => {
  console.log("拖拽移动中", event);
};

// 菜单数据
const menuList = ref([
  {
    id: "1",
    name: "全部",
    path: "/all",
    icon: "Menu",
  },
  {
    id: "2",
    name: "图片",
    path: "/picture",
    icon: "PictureFilled",
  },
  {
    id: "3",
    name: "文档",
    path: "/officeFile",
    icon: "Files",
  },
  {
    id: "4",
    name: "视频",
    path: "/video",
    icon: "VideoPlay",
  },
  {
    id: "5",
    name: "音乐",
    path: "/music",
    icon: "Headset",
  },
  {
    id: "6",
    name: "其他",
    path: "/other",
    icon: "MoreFilled",
  },
  {
    id: "7",
    name: "回收站",
    path: "/recycle",
    icon: "DeleteFilled",
  },
]);
</script>

<style lang="scss">
.menu {
  height: 100%;
  overflow-y: auto;
  .menu-item {
    display: flex;
    border-bottom: 0.5px solid var(--el-border-color);
    justify-content: center;
    height: 90px;
    .item-name {
      padding-right: 20px;
    }
  }
}
</style>
