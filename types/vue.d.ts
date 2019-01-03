import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        /**
         * ajax请求
         * @param key 请求名称
         * @param data 数据/参数
         */
        $request(key: string, data: any): Promise<{}>;
    }
}
