import { defineStore } from "pinia";

export const useCaptchaStore = defineStore('captcha', {
    state: () => ({
      failedAttempts: 0,
      showCaptcha: false,
      captchaKey: ''
    }),
    actions: {
      incrementFailedAttempts() {
        this.failedAttempts++;
        if (this.failedAttempts > 2) {
          this.showCaptcha = true;
        }
      },
      resetFailedAttempts() {
        this.failedAttempts = 0;
        this.showCaptcha = false;
      },
      setCaptchaKey(params) {
        this.captchaKey = params;
      }
    },
  })
  