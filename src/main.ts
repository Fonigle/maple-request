import 'vue-tsx-support/enable-check';

import './utils/defines';

import { PluginObject } from 'vue';
import MapleRequestFunctions from './maple-request-plugin';

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
}

const MapleRequest: PluginObject<MapleRequestConfig> = {
    install(Vue, options) {
        const {
            create = {},
            apis = {},
            interceptors = {
                request: (config: any) => config,
                requestError: (error: any) => error,
                response: (response: any) => response,
                responseError: (responseError: any) => responseError,
            },
            loading = {
                start: () => {},
                end: () => {},
            },
        } = options || {};

        Vue.use(MapleRequestFunctions, { create, apis, interceptors, loading });
    },
};

export { api, MapleRequestConfig };

export default MapleRequest;
