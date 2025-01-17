<template>
  <div class="register-form">
    <div class="logo-wrapper">
      <img src="@/assets/image/logo.png" class="register-logo" />
    </div>
    <div class="title-wrapper">
      <el-text class="text-item" size="large" tag="b">CHIIIPLOW-CLOUDDRIVE</el-text>
    </div>
    <el-form class="el-register" label-position="top" label-width="100px" @keyup.enter="register" :model="registerForm">
      <el-form-item label="账号" prop="username">
        <el-input clearable placeholder="请输入账号" :prefix-icon="UserIcon" v-model.trim="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input clearable placeholder="请输入密码" type="password" :prefix-icon="LockIcon"
          v-model.trim="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="重新确认密码" prop="repassword">
        <el-input clearable placeholder="请确认密码" type="password" :prefix-icon="LockIcon"
          v-model.trim="registerForm.repassword"></el-input>
      </el-form-item>
      <el-form-item label="注册邮箱" prop="email">
        <el-input clearable placeholder="请输入注册邮箱" :prefix-icon="BoxIcon" v-model.trim="registerForm.email"></el-input>
      </el-form-item>
      <el-form-item label="邮箱验证码" prop="emailValidCode" class="main-emailCode">
        <el-input class="emailCode" clearable placeholder="请输入邮箱验证码" type="email" :prefix-icon="ScaleToOriginalIcon"
          v-model.trim="registerForm.emailValidCode">
          <template #append>
            <el-button class="email-button" @click="sendEmail" :icon="Message"
              :disabled="!registerForm.email || emailCodeFlag">
              {{ sendEmailStatus }}
            </el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="register-button">
        <el-button type="primary" @click="register">注册</el-button>
        <el-button @click="switchForm" :disabled="emailCodeFlag">有账号前往登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { Box, Lock, ScaleToOriginal, User, Message } from '@element-plus/icons-vue'
import userAPI from '@/api/user';
import { toggleAuth } from '@/store/authState';
import { getCurrentInstance, ref } from 'vue';
const { proxy } = getCurrentInstance()
const sendEmailStatus = ref('发送验证码')
const emailCodeFlag = ref(false)
const BoxIcon = Box
const LockIcon = Lock
const ScaleToOriginalIcon = ScaleToOriginal
const UserIcon = User
const registerForm = ref({})

const sendEmail = async () => {
  let count = 60
  let timer
  // 开始倒计时
  if (emailCodeFlag.value) return
  let params = {
    email: registerForm.value.email
  }
  const response = await userAPI.sendEmailCode(params);
  emailCodeFlag.value = true
  sendEmailStatus.value = count + '秒后重试'
  timer = setInterval(() => {
    count--
    sendEmailStatus.value = count + '秒后重试'
    if (count <= 0) {
      clearInterval(timer)
      emailCodeFlag.value = false
      sendEmailStatus.value = '发送验证码'
    }
  }, 1000)
}

const register = async () => {
  let params = {}
  Object.assign(params, registerForm.value)
  const response = await userAPI.register(params);
  registerForm.value = {}
  emailCodeFlag.value = false
  switchForm();
}
const switchForm = () => {
  toggleAuth();
}
</script>

<style lang="scss">
.register-form {
  border: 1px solid var(--el-border-color);
  box-shadow: 0 2px 10px var(--el-border-color);
  border-radius: 8px;
  width: 500px;
  padding: 10px 15px;

  .title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .text-item {
      font-size: 20px;
    }
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;

    .register-logo {
      // border: 1px solid var(--el-border-color);
      // box-shadow: 0 2px 10px var(--el-border-color);
      width: 60px;
      height: 60px;
      z-index: 99;
    }
  }

  .el-register {
    padding: 0 10px;

    .el-form-item {
      margin: 15px 0;
    }

    .email-button {
      display: flex;
      align-items: center;
    }
  }
}
</style>