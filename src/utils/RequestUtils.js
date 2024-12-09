import axios from 'axios';

import MessageUtils from '@/utils/MessageUtils';
import { generateUniqueId } from '@/utils/UUID';
import { ElLoading } from 'element-plus';
import router from '@/router';

let loading = null;

const service = axios.create({
    baseURL: '/api',
    timeout: 50 * 1000
})

class HttpClient {
    static post(url, params, config = {}){
        service.post()
    }
}

export default HttpClient;