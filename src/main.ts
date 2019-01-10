import 'vue-tsx-support/enable-check';

import { PluginObject } from 'vue';
import MapleRequestPlugin from './maple-request-plugin';

import MapleRequestApis, { api } from './maple-request-apis';

import { AxiosRequestConfig } from 'axios';

class MapleRequestConfig {
    /** 创建axios实例时的通用配置 */
    create: AxiosRequestConfig = {};
    /** api列表 */
    apis: MapleRequestApis = {};
    /** 拦截器 */
    interceptors!: {
        request: (config: any) => any;
        requestError: (error: any) => any;
        response: (response: any) => any;
        responseError: (error: any) => any;
    };
    /** loading的处理函数 */
    loading!: {
        start(): void;
        close(): void;
    };
    /** 预处理 */
    pre!: {
        request: (data: { [key: string]: any }) => void;
        response: (response: any) => void;
    };
}

const MapleRequest: PluginObject<MapleRequestConfig> = {
    install(Vue, options) {
        Vue.use(MapleRequestPlugin, options);
    },
};

export { api, MapleRequestConfig };

export default MapleRequest;
