import axios from 'axios';

import MessageUtils from '@/utils/MessageUtils';
// import { generateUniqueId } from '@/utils/UUID';
import { ElLoading } from 'element-plus';
import router from '@/router';


let loading = null
// const uniqueId = generateUniqueId()
const contentTypeForm = 'application/x-www-form-urlencoded;charset=UTF-8'
const contentTypeJson = 'application/json'
const responseTypeJson = "json"
// const urlFilter = ['user/register', 'user/login', 'user/generateCaptcha', 'user/sendEmail']

const service = axios.create({
    baseURL: '/api',
    timeout: 50 * 1000
});


service.interceptors.request.use(
    (config) => {
        if (config.showLoading) {
            loading = ElLoading.service({
                lock: true,
                text: "加载中请稍等...",
                background: "rgba(0, 0, 0, 0)",
            })
        }
        return config
    },
    (error) => {
        if (config.showLoading && loading) {
            loading.close()
        }
        MessageUtils.error("接口请求失败，请检查网络")
        return Promise.reject("接口请求失败，请检查网络")
    }
)
service.interceptors.response.use(
    (response) => {
        const { showLoading = true, errorCallback } = response.config;
        if (showLoading && loading) {
            loading.close()
        }
        const responseData = response.data;
        if (responseData.code == 200) {
            return responseData;
        } else if (responseData.code == 555) {
            console.log(1111)
            localStorage.removeItem("jwt")
            // router.push("/login?redirectUrl=" + encodeURI(router.currentRoute.value.path));
            return Promise.reject({ showError: false, msg: "用户验证错误" });
        } else {
            if (errorCallback) {
                errorCallback(responseData.msg);
            }
            return Promise.reject({ showError: true, msg: responseData.msg });
        }
    },
    (error) => {
        if (error.config.showLoading && loading) {
            loading.close();
        }
        MessageUtils.error("网络异常")
        return Promise.reject({ showError: true, msg: "网络异常" })
    }
);

class HttpClient {
    static post(url, params, config = {}) {
        return service.post(url, this._parseParams(params), this._getRequestConfig(config, url));
    }

    static get(url, config = {}) {
        return service.get(url, this._getRequestConfig(config, url));
    }

    static _parseParams(params) {
        let formData = new FormData();
        for (let key in params) {
            formData.append(key, params[key] == undefined ? "" : params[key]);
        }
        return formData;
    }

    static _getRequestConfig(config, url) {
        const { dataType, showLoading = true, responseType = responseTypeJson } = config;
        let contentType = contentTypeForm;
        if (dataType != null && dataType == 'json') {
            contentType = contentTypeJson;
        }
        let headers = {
            'Content-Type': contentType,
            'X-Requested-With': 'XMLHttpRequest',
        }
        // if (!urlFilter.includes(url)) {
        //     const token = localStorage.getItem("jwt")
        //     headers.Authorization = `Bearer ${token}`
        //     // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // }


        return {
            onUploadProgress: (event) => {
                if (config.uploadProgressCallback) {
                    config.uploadProgressCallback(event);
                }
            },
            responseType: responseType,
            headers: headers,
            showLoading: showLoading,
            errorCallback: config.errorCallback,
            showError: config.showError
        };
    }
}

export default HttpClient;

