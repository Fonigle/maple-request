import 'vue-tsx-support/enable-check';

import { PluginObject } from 'vue';
import MapleRequestFunctions from './maple-request-plugin';

import MapleRequestApis, { api } from './maple-request-apis';

import { AxiosRequestConfig } from 'axios';

class MapleRequestConfig {
    create: AxiosRequestConfig = {};
    apis: MapleRequestApis = {};
    interceptors!: {
        request: (config: any) => any;
        requestError: (error: any) => any;
        response: (response: any) => any;
        responseError: (error: any) => any;
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
        } = options || {};

        Vue.use(MapleRequestFunctions, { create, apis, interceptors });
    },
};

export { api };

export default MapleRequest;
