import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        /**
         * MapleRequset请求
         *
         * @param {string} name 请求标识符
         * @param {{ [key: string]: any }} data 参数/数据
         * @param {boolean} [loading=false] 开启加载中处理
         * @param {(string | boolean)} [query=false] 开启响应队列
         * @returns 请求结果
         * @memberof Vue
         */
        $request(key: string, data?: { [key: string]: any }, loading?: boolean | number, queue?: string | boolean): Promise<any> & string;
    }
}
