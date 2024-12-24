<template>
  <div class="login-form">
    <div class="logo-wrapper">
      <img src="@/assets/image/logo.png" class="login-logo" />
    </div>
    <div class="title-wrapper">
      <!-- <h2>CHIIIPLOW-CLOUDDRIVE</h2> -->
       <el-text class="text-item" size="large" tag="b">CHIIIPLOW-CLOUDDRIVE</el-text>
    </div>
    <el-form class="el-login" label-position="top" @keyup.enter="login" :model="loginForm" key="login">
      <el-form-item label="账号" prop="username">
        <el-input clearable placeholder="请输入账号" :prefix-icon="UserIcon" v-model.trim="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input clearable placeholder="请输入密码" type="password" :prefix-icon="LockIcon" v-model.trim="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item class="main-captcha" label="验证码" prop="captcha">
        <el-input class="captcha" clearable placeholder="请输入验证码" :prefix-icon="FolderCheckedIcon" v-model.trim="loginForm.captcha">
          <img v-show="captchaSrc.length > 0" :src="captchaSrc" @click="refreshCaptcha" />
        </el-input>
      </el-form-item>
      <el-form-item class="login-button">
        <el-button type="primary" @click="refreshCaptcha">登录</el-button>
        <el-button @click="switchForm">去注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { User, Lock, FolderChecked } from '@element-plus/icons-vue';
import { generateCaptcha } from '@/api/user';
import { ref, getCurrentInstance } from 'vue';
import { toggleAuth } from '@/store/authState';
const { proxy } = getCurrentInstance()
const UserIcon = User
const LockIcon = Lock
const FolderCheckedIcon = FolderChecked
const loginForm = ref({})
const captchaSrc = ref('');
const refreshCaptcha = async () => {
  try {
    let res = await generateCaptcha();
  } catch (error) {
    proxy.MessageUtils.error("调用失败")
  }
  console.log(res)
  console.log(res.data)
}
const login = () => {
  let params = {}
  Object.assign(params, loginForm.value)
  console.log(params)
  proxy.MessageUtils.success("登录成功！")
}
const switchForm = () => {
  toggleAuth();
}
</script>

<style lang="scss">
.login-form {
  border: 1px solid var(--el-border-color);
  // box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
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
    .login-logo {
      width: 60px;
      height: 60px;
      z-index: 99;
    }
  }

  .el-login {
    padding: 0 10px;

    .el-form-item {
      margin: 15px 0px;
    }
  }
  .main-captcha {
    // display: none;

  }
}
</style>