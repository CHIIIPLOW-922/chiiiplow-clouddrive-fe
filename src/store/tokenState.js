import { defineStore } from "pinia";

export const useTokenState = defineStore('accessToken', {
    state: () => ({
        accessToken: ''
    }),
    actions: {
        setAccessToken(token) {
            this.accessToken = token;
        },
        clearToken() {
            this.accessToken = '';
        }
    }
})