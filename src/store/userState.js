import { defineStore } from "pinia";
import userAPI from '@/api/user';

export const userInfoStore = defineStore('user', {
    state: () => ({
        username: '',
        nickname: '',
        email: '',
        avatarPath: '',
        usedSpaceRate: 0,
        usedSpace: '0 B',
        totalSpace: '0 B'

    }),
    actions: {
        async loadUserData() {
            let res = await userAPI.userInfo();
            this.username = res.data.username;
            this.nickname = res.data.nickname;
            this.email = res.data.email;
            this.avatarPath = res.data.avatarPath;
            this.usedSpaceRate = res.data.usedSpaceRate;
            this.usedSpace = res.data.usedSpace;
            this.totalSpace = res.data.totalSpace;
        },
        cleanUserInfo() {
            this.userData = null;
        },
    },
});