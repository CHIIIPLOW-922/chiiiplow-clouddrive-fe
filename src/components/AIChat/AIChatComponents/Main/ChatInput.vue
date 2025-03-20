<template>
  <div class="chat-input">
    <div class="dialog-padding">
      <div class="dialog">
        <div class="input-item">
          <el-input type="textarea" v-model="question" placeholder="询问任何问题..." ref="textarea" @input="adjustHeight"  @keydown.enter.exact.prevent="handleSend"></el-input>
        </div>
        <div class="button-item">
          <div class="button-padding"></div>
          <el-button class="send-button" round :icon="ArrowUpBold" @click="handleSend" size="large" :disabled="!question.trim()"
            ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpBold } from '@element-plus/icons-vue';
import { nextTick, ref } from "vue";
const question = ref("");
const textarea = ref(null);
const emit = defineEmits(["update-height"]);

const handleSend = () => {
  if (!question.value.trim()) return;
  const newValue = question.value.replace(/[\s\r\n]+/g, '');
  console.log(newValue);
  console.log(question.value);
  question.value = "";
  adjustHeight();
};

const adjustHeight = () => {
  nextTick(() => {
    if (textarea.value) {
      const scrollHeight = textarea.value.$el.querySelector('textarea').scrollHeight - 150;
      emit("update-height", Math.min(scrollHeight, 400));
    }
  });
};
</script>

<style lang="scss">
.chat-input {
  background-color: var(--el-bg-color-overlay);
  height: 100%;

  .dialog-padding {
    background: transparent;
    padding: 0px 400px 30px 400px;
    height: 100%;

    .dialog {
      background-color: var(--el-border-color);
      border-radius: 20px;
      padding: 10px;
      height: 100%;
      display: grid;
      min-width: 400px;
      grid-template-rows: 1fr auto;

      .input-item {
        padding: 0px 0px 5px 0px;

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
          font-size: 1rem;
          padding: 0px;
          background-color: var(--el-border-color);
          resize: none;
          outline: none;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        textarea::-webkit-scrollbar {
          width: 7px;
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
          // margin-right: 5px;
          // margin-bottom: 5px;
          width: 40px;
          height: 40px;
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