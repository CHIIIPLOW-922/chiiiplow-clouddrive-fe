import RequestUtils from '@/utils/RequestUtils'
import MessageUtils from '@/utils/MessageUtils'

export const generateCaptcha = () => {
    return RequestUtils.get('/user/sendCaptcha', {});

}