<template>
    <AuthLayouts>
        <LoginForm v-if="authState.isLogin" />
        <RegisterForm v-if="!authState.isLogin" />
    </AuthLayouts>
</template>

<script setup>
import AuthLayouts from '@/layouts/AuthLayouts.vue';
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';
import { authState } from '@/store/authState';

</script>

<style>
</style>