import { defineStore } from "pinia";
import userAPI from '@/api/user';

export const userInfoStore = defineStore('user', {
    state: () => ({
        userData: null,
        isDataLoaded: false,
    }),
    actions: {
        loadUserData() {
            if (this.isDataLoaded) return;

            if (!this._loadPromise) {
                // 创建一个请求的 Promise，并存储到实例上
                this._loadPromise = userAPI.userInfo()
                    .then((res) => {
                        this.userData = res.data;
                        this.isDataLoaded = true;
                    })
                    .catch((err) => {
                        console.error("加载用户数据失败:", err);
                    })
                    .finally(() => {
                        this._loadPromise = null; // 请求结束后清空 Promise
                    });
            }

            return this._loadPromise; // 返回相同的 Promise，避免重复请求
        },
        cleanUserInfo() {
            this.userData = null;
            this.isDataLoaded = false;
        },
    },
});