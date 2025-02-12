import RequestUtils from '@/utils/RequestUtils';

const file = {
    pages: "file/pages",
    breadcrumb: "file/breadcrumb",
}


const fileAPI = {
    
    pages: (params) => RequestUtils.post(file.pages, params, {}),
    breadcrumb: (params) => RequestUtils.post(file.breadcrumb, params, {}),
}


export default fileAPI;