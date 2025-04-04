import fileAPI from '@/api/file';
import { defineStore } from 'pinia';

export const fileInfoState = defineStore('file', {
    state: () => ({
        fileData: [],
        bcData: [],
        queryParams: {
            pageNo: 1,
            pageSize: 30,
            fileTypeName: null,
            parentId: null,
            search: ''
        },
        total: 0,
        current: 1,
        searchFlag: false,
        // isDataLoaded: false,
    }),
    actions: {
        updateQueryParams(newParams) {
            this.queryParams = { ...this.queryParams, ...newParams };
        },
        editFolder(rows) {
            let target = this.fileData.find(item => item.id == rows.id);
            if (target) {
                target.isEditing = 1;
                target.folderName = target.fileName;
            }
        },
        newFolder() {
            let index = this.fileData.findIndex(item => item.id == null)
            if (index == -1) {
                this.fileData.unshift({ id: null, fileName: '新建文件夹', isEditing: 1 })
            }
        },
        cancelFolder(params) {
            console.log(params)
            if (params.id == null) {
                let index = this.fileData.findIndex(item => item.id == null)
                if (index == -1) return;
                this.fileData.splice(index, 1);
            } else {
                let target = this.fileData.find(item => item.id == params.id);
                if (target) {
                    target.isEditing = 0;
                }
            }


        },
        async fetchFiles() {
            let res = await fileAPI.pages(this.queryParams);
            this.fileData = res.data.list;
            this.total = res.data.total;
            this.current = res.data.current;
            this.searchFlag = false;
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
            this.bcData = [{ fileName: "搜索 \"" + this.queryParams.search + "\" 共" + this.total + "个文件", folderFlag: false }];
            this.searchFlag = true;
        },
        cleanFileInfo() {
            this.fileData = null;
            // this.isDataLoaded = false;
        },
    },
})