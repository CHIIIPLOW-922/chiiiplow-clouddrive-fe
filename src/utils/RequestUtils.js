import axios from 'axios';

import MessageUtils from '@/utils/MessageUtils';
import { ElLoading } from 'element-plus';
import router from '@/router';
import { setLoginFinished } from '@/utils/AuthUtils';


let loading = null
const contentTypeForm = 'application/x-www-form-urlencoded;charset=UTF-8'
const contentTypeJson = 'application/json'
const responseTypeJson = "json"

const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
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
        console.log(response.config)
        const { showLoading = true, errorCallback } = response.config;
        if (showLoading && loading) {
            loading.close()
        }
        let accessToken = response.headers.getAuthorization()
        if (accessToken) {
            localStorage.setItem("access_token", accessToken);
            setLoginFinished()
            
            // Cookies.set("access_token", `Bearer ${accessToken}`);
            // Cookies.set("refres_token", refreshToken);
        }
        const data = response.data;
        if (data.code == 200) {
            if (data.msg) {
                MessageUtils.success(data.msg);
            }
            return data;
        } else {
            if (errorCallback) {
                errorCallback(data.msg);
            }
            // if (data.code == 401) {
            //     HttpClient.post("/user/refresh", {}, {});
            // }
            if (data.code == 401) {
                localStorage.clear("access_token");
                router.push("/auth?redirectUrl=" + encodeURI(router.currentRoute.value.path));
            }
            if (data.msg != null) {
                MessageUtils.error(data.msg);
            }
            return Promise.reject({ showError: true, msg: data.msg });
        }
    },
    (error) => {
        if (error.config.showLoading && loading) {
            loading.close();
        }
        MessageUtils.error("网络异常")
        return Promise.reject({ showError: false, msg: "网络异常" })
    }
);

class HttpClient {
    static post(url, params, config = {}) {
        return service.post(url, this._parseParams(params), this._getRequestConfig(config, url));
    }

    static postForm(url, params, config = { dataType: 'form' }) {
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
        const { dataType, showLoading, responseType = responseTypeJson } = config;
        let contentType = contentTypeJson;
        if (dataType != null && dataType == 'form') {
            contentType = contentTypeForm;
        }
        let headers = {
            'Content-Type': contentType,
            'X-Requested-With': 'XMLHttpRequest',
        }

        const token = localStorage.getItem('access_token')
        if (token) {
            headers['Authorization'] = `Bearer ${token}`
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

