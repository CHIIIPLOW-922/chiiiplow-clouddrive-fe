import fileAPI from '@/api/file';
import { defineStore } from 'pinia';

export const fileInfoState = defineStore('file', {
    state: () => ({
        fileData: null,
        bcData: null,
        queryParams: {
            pageNo: 1,
            pageSize: 30,
            fileTypeName: null,
            parentId: null,
            search:''
        },
        total: 0,
        current: 1
        // isDataLoaded: false,
    }),
    actions: {
        updateQueryParams(newParams) {
            this.queryParams = { ...this.queryParams, ...newParams };
        },
        async fetchFiles() {
            let res = await fileAPI.pages(this.queryParams);
            this.fileData = res.data.list;
            this.total = res.data.total;
            this.current = res.data.current;
        },
        async fetchBreadcrumb() {
            let res = await fileAPI.breadcrumb(this.queryParams);
            this.bcData = res.data;
        },
        async fetchSearchFiles() {
            let res = await fileAPI.search(this.queryParams);
            this.fileData = res.data;
            this.total = res.data.length;
            this.current = 1;
            this.bcData = [{fileName:"搜索 \""+this.queryParams.search+"\" 共"+ this.total+"个文件"}]
        },
        cleanFileInfo() {
            this.fileData = null;
            // this.isDataLoaded = false;
        },
    },
})