import RequestUtils from '@/utils/RequestUtils';

const file = {
    pages: "file/pages",
    breadcrumb: "file/breadcrumb",
    addFolder: "file/addFolder",
    search: "file/search",
    deleteFile: "file/delete",
}


const fileAPI = {
    
    pages: (params) => RequestUtils.post(file.pages, params, {}),
    breadcrumb: (params) => RequestUtils.post(file.breadcrumb, params, {}),
    addFolder: (params) => RequestUtils.post(file.addFolder, params, {}),
    search: (params) => RequestUtils.post(file.search, params, {}),
    deleteFile: (params) => RequestUtils.post(file.deleteFile, params, {}),
}


export default fileAPI;