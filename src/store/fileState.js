import fileAPI from '@/api/file';
import { defineStore } from 'pinia';

export const fileInfoState = defineStore('file', {
    state: () => ({
        fileData: null,
        bcData: null,
        queryParams: {
            pageNo: 1,
            pageSize: 10,
            fileTypeName: null,
            parentId: null
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
        cleanFileInfo() {
            this.fileData = null;
            // this.isDataLoaded = false;
        },
    },
})