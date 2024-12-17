<template>
  <div class="register-form">
    <div class="logo-wrapper">
      <img src="@/assets/image/logo.png" class="register-logo" />
    </div>
    <div class="title-wrapper">
      <h2>CHIIIPLOW-CLOUDDRIVE</h2>
    </div>
    <el-form
        class="el-register"
        label-position="top"
        label-width="100px"
        @keyup.enter="register"
        :model="registerForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            clearable
            placeholder="请输入账号"
            :prefix-icon="UserIcon"
            v-model.trim="registerForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            clearable
            placeholder="请输入密码"
            type="password"
            :prefix-icon="LockIcon"
            v-model.trim="registerForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="重新确认密码" prop="repassword">
          <el-input
            clearable
            placeholder="请确认密码"
            type="password"
            :prefix-icon="LockIcon"
            v-model.trim="registerForm.repassword"
          ></el-input>
        </el-form-item>
        <el-form-item label="注册邮箱" prop="email">
          <el-input
            clearable
            placeholder="请输入注册邮箱"
            :prefix-icon="BoxIcon"
            v-model.trim="registerForm.email"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱验证码" prop="emailValidCode" class="main-emailCode">
          <el-input
            class="emailCode"
            clearable
            placeholder="请输入邮箱验证码"
            type="email"
            :prefix-icon="ScaleToOriginalIcon"
            v-model.trim="registerForm.emailCode"
          ></el-input>
          <!-- <el-button @click="sendEmailValidCode" :disabled="!registerform.email || emailCodeFlag">{{
            sendEmailStatus
          }}</el-button> -->
        </el-form-item>
        <el-form-item class="register-button">
          <el-button type="primary" @click="register">注册</el-button>
          <el-button @click="switchForm">有账号前往登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script setup>
import { Box, Lock, ScaleToOriginal, User } from '@element-plus/icons-vue'
import { toggleAuth } from '@/store/authState';
import { getCurrentInstance, ref } from 'vue';
const { proxy } = getCurrentInstance()

const BoxIcon = Box
const LockIcon = Lock
const ScaleToOriginalIcon = ScaleToOriginal
const UserIcon = User
const registerForm = ref({})

const register = ()=>{
  let params = {}
  Object.assign(params, registerForm.value)
  console.log(params)
  proxy.MessageUtils.warning("注册失败")
}
const switchForm = ()=>{
  toggleAuth();
}
</script>

<style lang="scss">
.register-form{
  border: 0.05px solid #6C6E72;
  // box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 500px;
  padding: 10px 15px;
  .title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    .register-logo {
      width: 60px;
      height: 60px;
      z-index: 99;
    }
  }
  .el-register{
    padding: 0 10px;
    .el-form-item {
      margin: 15px 0;
    }
  }
}
</style>