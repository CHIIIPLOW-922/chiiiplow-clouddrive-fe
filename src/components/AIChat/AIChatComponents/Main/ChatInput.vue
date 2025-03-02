<template>
  <div class="chat-input">
    <div class="dialog-padding">
      <div class="dialog">
        <div class="input">
          <el-input
            class="input-textarea"
            type="textarea"
            v-model="question"
            @input="autoResize"
            placeholder="输入消息..."
            ref="textarea"
          ></el-input>
        </div>
        <div class="button">
          <div class="button-padding"></div>
          <el-button class="send-button" round :icon="ArrowUpBold"></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpBold } from '@element-plus/icons-vue';
import { ref } from "vue";
const question = ref("");
</script>

<style lang="scss">
.chat-input {
  background: var(--el-bg-color);
  height: 100%;
  .dialog-padding {
    background: transparent;
    padding: 20px;
    height: 100%;
    .dialog {
      background-color: var(--el-border-color);
      border-radius: 20px;
      padding: 10px;
      height: 100%;
      display: grid;
      grid-template-rows: 1fr auto;
      .input {
        padding: 10px;
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
      }
      .button {
        display: flex;
        .button-padding {
          flex: 1;
        }
        .send-button {
          background: var(--el-bg-color);
          margin-right: 15px;
          width: 32px;
        }
      }
    }
  }
}
</style>