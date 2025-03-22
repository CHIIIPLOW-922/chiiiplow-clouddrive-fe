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
        <el-input clearable placeholder="请输入密码" type="password" :prefix-icon="LockIcon"
          v-model.trim="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item class="main-captcha" label="验证码" prop="captcha" v-show="captchaStore.showCaptcha">
        <el-input class="captcha" clearable placeholder="请输入验证码" :prefix-icon="FolderCheckedIcon"
          v-model.trim="loginForm.captchaCode">
        </el-input>
        <img class="captchaImage" v-show="captchaSrc.length > 0" :src="captchaSrc" @click="refreshCaptcha" />
      </el-form-item>
      <el-form-item class="login-button">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="switchForm">去注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import userAPI from '@/api/user';
import router from '@/router';
import { toggleAuth } from '@/store/authState';
import { useCaptchaStore } from '@/store/captchaState';
import { FolderChecked, Lock, User } from '@element-plus/icons-vue';
import { getCurrentInstance, onMounted, ref } from 'vue';
const { proxy } = getCurrentInstance()
const UserIcon = User
const LockIcon = Lock
const FolderCheckedIcon = FolderChecked
const captchaStore = useCaptchaStore();
const loginForm = ref({})
const captchaSrc = ref('');


const refreshCaptcha = async () => {
  if (!captchaStore.showCaptcha) return;
  let params = { captchaKey: captchaStore.captchaKey }
  let res = await userAPI.generateCaptcha(params);
  captchaSrc.value = res.data.captchaImage
  captchaStore.setCaptchaKey(res.data.captchaKey)
}
const login = async () => {
  let params = {}
  Object.assign(params, loginForm.value)
  params.showCaptcha = captchaStore.showCaptcha;
  params.captchaKey = captchaStore.captchaKey;
  try {
    await userAPI.login(params);
  } catch (error) {
    captchaStore.incrementFailedAttempts();
    refreshCaptcha();
    loginForm.value.captchaCode = ''
    return;
  }
  loginForm.value = {}
  router.push("/dashboard")

}
const switchForm = () => {
  toggleAuth();
}
onMounted(() => {
  refreshCaptcha()
})
</script>

<style lang="scss">
.login-form {
  border: 1px solid var(--el-border-color);

  border-radius: 8px;
  width: 500px;
  padding: 10px 15px;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.4s ease-in-out;

  &:hover,
  &:focus-within {
    transition: box-shadow 0.4s ease-in-out;
    box-shadow: 0 4px 15px var(--el-border-color);
  }

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
    // display: flex;
    //
    .captcha {
      width: 71%;
      margin-right: 8px;
    }

    .captchaImage {
      border: 1px solid var(--el-border-color)
    }
  }
}
</style>