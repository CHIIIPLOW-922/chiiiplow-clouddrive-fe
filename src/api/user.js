import RequestUtils from '@/utils/RequestUtils';

const user = {
    captcha: "user/sendCaptcha",
    emailCode: "user/sendEmailCode",
    registerAPI: "user/register",
    loginAPI: "user/login",
    logoutAPI: "user/logout",
    editProfile: "user/editProfile",
    userInfo: "user/userInfo"
};

/**
 * User API object
 */
const userAPI = {
    /**
     * Generate captcha
     * @param {Object} params - Parameters for the request
     * @returns {Promise<any>}
     */
    generateCaptcha: (params) => RequestUtils.post(user.captcha, params, {}),

    /**
     * Send email code
     * @param {Object} params - Parameters for the request
     * @returns {Promise<any>}
     */
    sendEmailCode: (params) => RequestUtils.post(user.emailCode, params, {}),

    /**
     * Register a new user
     * @param {Object} params - Parameters for the request
     * @returns {Promise<any>}
     */
    register: (params) => RequestUtils.post(user.registerAPI, params, {}),

    /**
     * Login user
     * @param {Object} params - Parameters for the request
     * @returns {Promise<any>}
     */
    login: (params) => RequestUtils.post(user.loginAPI, params, {}),

    /*
     * Edit Profile 
     *  */
    editProfile: (params) => RequestUtils.post(user.editProfile, params, {}),

    /**
     * User Sapce Info
     */
    userInfo: () => RequestUtils.post(user.userInfo, {}, {}),

    /**
     * Logout
     */
    logout: () => RequestUtils.post(user.logoutAPI, {}, { showLoading: true }),
};

export default userAPI;
