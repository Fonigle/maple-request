import { PluginObject } from 'vue';

import { MapleRequestConfig } from './main';
import MapleRequestApis, { MapleRequestApiConfig } from './maple-request-apis';
import axios, { AxiosRequestConfig } from 'axios';

import { randomInt, deepClone, removeItem } from '@/utils';

const MapleRequestPlugin: PluginObject<MapleRequestConfig> = {
    install(Vue, options) {
        // 初始化选项
        const {
            create = {},
            apis = new MapleRequestApis(),
            interceptors = {
                request: (config: any) => config,
                requestError: (error: any) => error,
                response: (response: any) => response,
                responseError: (error: any) => error,
            },
        } = options || {};

        // axios实例
        const instance = axios.create(create);

        // 拦截器
        instance.interceptors.request.use(interceptors.request, interceptors.requestError);
        instance.interceptors.response.use(interceptors.response, interceptors.responseError);

        /** 加载中队列 */
        const loadingQuery: string[] = [];

        /** 响应队列 */
        const responseQuery: {
            [key: string]: any[];
        } = {};

        function traversalResponseQuery(query: string) {
            const array = responseQuery[query];
            if (array.length) {
                if (array[0].status === true) {
                    array[0].resolve(array[0].response);
                    responseQuery[query].shift();

                    traversalResponseQuery(query);
                }
            }
        }

        /**
         * 请求函数主体
         *
         * @param {string} name 请求标识符
         * @param {{ [key: string]: any }} data 参数/数据
         * @param {boolean} [loading=false] 开启加载中处理
         * @param {(string | boolean)} [query=false] 开启响应队列
         *
         * @returns {(string | Promise<{}>)} 请求结果
         */
        Vue.prototype.$request = function(name: string, data: { [key: string]: any }, loading = false, query: string | boolean = false) {
            /** api列表中对应的配置项 */
            let api = apis[name];

            options && options.fore && options.fore.request && options.fore.request.apply(this, [data]);

            if (api) {
                /* 如果有对应的API配置项 */
                api = deepClone(api);

                /************ 处理path参数 *********************/
                if (/\${.*}/.test(api.url)) {
                    let url = api.url;
                    for (let item of Object.keys(data)) {
                        const reg = new RegExp(`\\\${${item}}`);
                        if (data[item] && reg.test(url)) {
                            url = url.replace(reg, data[item]);
                            delete data[item];
                        }
                    }
                    api.url = url;
                }
                //********************************************/

                if (api.textMark) {
                    return '';
                } else {
                    /** loading标记 */
                    let loadingStamp = '';
                    /** loading标记 */
                    let queryStamp = '';

                    const pro = new Promise((resolve, reject) => {
                        if (!!loading) {
                            loadingStamp = `loading-${randomInt(10)}`;

                            if (!loadingQuery.length) {
                                options && options.loading && options.loading.start.apply(this);
                            }

                            loadingQuery.push(loadingStamp);
                        }

                        if (typeof query === 'string') {
                            queryStamp = `query-${randomInt(12)}`;

                            if (!responseQuery[query]) {
                                responseQuery[query] = [];
                            }

                            responseQuery[query].push({ stamp: queryStamp, status: false, response: null, resolve: resolve });
                        }

                        /** axios配置项 */
                        const axiosConfig: AxiosRequestConfig = {
                            url: api.url,
                            method: api.method,
                        };

                        if (api.method === 'get') axiosConfig.params = data;
                        else axiosConfig.data = data;

                        api.baseUrl && (axiosConfig.baseURL = api.baseUrl); //不能直接写在上面的配置中，否则会覆盖全局设置

                        // 发送请求
                        instance
                            .request(axiosConfig)
                            .then(response => {
                                options && options.fore && options.fore.response && options.fore.response.apply(this, [response]);
                                if (typeof query === 'string') {
                                    console.log(`request ${data.q} end`);
                                    const flt = responseQuery[query].filter(item => item.stamp === queryStamp);
                                    if (flt.length) {
                                        const that = flt[0];
                                        that.response = response;
                                        that.status = true;
                                        traversalResponseQuery(query);
                                    }
                                } else {
                                    resolve(response);
                                }
                            })
                            .catch(error => {
                                reject(error);
                            })
                            .finally(() => {
                                removeItem(loadingQuery, loadingStamp);
                                if (!loadingQuery.length) {
                                    options && options.loading && options.loading.close && options.loading.close.apply(this);
                                }
                            });
                    });

                    return pro;
                }
            } else {
                /* 如果没有对应配置则抛错 */
                throw new Error(`there is no api named ${name}`);
            }
        };
    },
};

export default MapleRequestPlugin;
