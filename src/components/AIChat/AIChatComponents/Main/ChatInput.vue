<template>
  <div class="chat-input">
    <div class="dialog-padding">
      <div class="dialog">
        <div class="input-item">
          <el-input type="textarea" v-model="question" placeholder="询问任何问题..." ref="textarea" @keydown.enter.exact.prevent="handleSend"></el-input>
        </div>
        <div class="button-item">
          <div class="button-padding"></div>
          <el-button class="send-button" round :icon="ArrowUpBold" @click="handleSend" size="large"
            ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpBold } from '@element-plus/icons-vue';
import { ref } from "vue";
const question = ref("");
const handleSend = () => {
  console.log(question.value)
}
</script>

<style lang="scss">
.chat-input {
  background-color: var(--el-bg-color-overlay);
  height: 100%;

  .dialog-padding {
    background: transparent;
    padding: 0px 400px 20px 400px;
    height: 100%;

    .dialog {
      background-color: var(--el-border-color);
      border-radius: 20px;
      padding: 10px;
      height: 100%;
      display: grid;
      min-width: 400px;
      grid-template-rows: 1fr auto;
      // &:hover {
      //   box-shadow: -2px 4px 8px var(--el-border-color);
      // }
      // &:focus-within {
      //   box-shadow: -2px 2px 4px var(--el-color-primary);
      // }
      
      .input-item {
        padding: 10px 50px 10px 20px;

        .el-textarea {
          height: 100%;
        }

        .el-textarea__inner {
          min-height: 100% !important;
        }

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

        textarea {
          font-size: 16px;
          padding: 0px;
          background-color: var(--el-border-color);
          resize: none;
          outline: none;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        textarea::-webkit-scrollbar {
          width: 10px;
        }

        textarea::-webkit-scrollbar-track {
          background: var(--el-border-color);
        }

        textarea::-webkit-scrollbar-thumb {
          background: var(--el-menu-text-color);
        }
      }

      .button-item {
        display: flex;

        .button-padding {
          flex: 1;
        }

        .send-button {
          background: var(--el-menu-text-color);
          // margin-right: 15px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          .el-icon {
            color: var(--el-bg-color-overlay);
          }
        }
      }
    }
  }
}
</style>