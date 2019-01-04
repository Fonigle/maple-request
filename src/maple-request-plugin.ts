import { PluginObject } from 'vue';

import MapleRequestApis from './maple-request-apis';

import axios, { AxiosRequestConfig } from 'axios';

class MapleRequestPluginConfig {
    create: AxiosRequestConfig = {};
    apis: MapleRequestApis = {};
    interceptors!: {
        request: (config: any) => any;
        requestError: (error: any) => any;
        response: (response: any) => any;
        responseError: (error: any) => any;
    };
}

const MapleRequestPlugin: PluginObject<MapleRequestPluginConfig> = {
    install(Vue, options) {
        const {
            create = {},
            apis = {},
            interceptors = {
                request: (config: any) => config,
                requestError: (error: any) => error,
                response: (response: any) => response,
                responseError: (error: any) => error,
            },
        } = options || {};

        const instance = axios.create(create);

        instance.interceptors.request.use(interceptors.request, interceptors.requestError);
        instance.interceptors.response.use(interceptors.response, interceptors.responseError);

        Vue.prototype.$request = function(name: string, data: string) {
            const api = apis[name];

            if (api) {
                const axiosConfig: AxiosRequestConfig = {
                    url: api.url,
                    method: api.method,
                    params: data,
                };

                api.baseUrl && (axiosConfig.baseURL = api.baseUrl);

                instance.request(axiosConfig);
            } else {
                console.error(`there is no api named ${name}`);
            }
        };
    },
};

export default MapleRequestPlugin;
