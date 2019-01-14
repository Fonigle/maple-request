import { AxiosRequestConfig } from 'axios';

type RequestMethods = 'get' | 'post' | 'delete' | 'options' | 'head' | 'put' | 'patch';

interface MapleRequestApiConfig extends AxiosRequestConfig {
    textMark: boolean;
    openMark: boolean;
}

class MapleRequestApiConfig {
    constructor(method: RequestMethods = 'get', url: string = '', baseURL?: string, textMark: boolean = false, openMark: boolean = false) {
        this.method = method;
        this.url = url;
        this.baseURL = baseURL;
        this.textMark = textMark;
        this.openMark = openMark;
    }
}

const api = {
    get(url: string, baseUrl?: string) {
        return new MapleRequestApiConfig('get', url, baseUrl);
    },
    post(url: string, baseUrl?: string) {
        return new MapleRequestApiConfig('post', url, baseUrl);
    },
    delete(url: string, baseUrl?: string) {
        return new MapleRequestApiConfig('delete', url, baseUrl);
    },
    put(url: string, baseUrl?: string) {
        return new MapleRequestApiConfig('put', url, baseUrl);
    },
    patch(url: string, baseUrl?: string) {
        return new MapleRequestApiConfig('put', url, baseUrl);
    },
    head(url: string, baseUrl?: string) {
        return new MapleRequestApiConfig('put', url, baseUrl);
    },
    options(url: string, baseUrl?: string) {
        return new MapleRequestApiConfig('put', url, baseUrl);
    },
    text(url: string, baseUrl?: string) {
        return new MapleRequestApiConfig('get', url, baseUrl, true);
    },
    open(url: string, baseUrl?: string) {
        return new MapleRequestApiConfig('get', url, baseUrl, false, true);
    },
};

class MapleRequestApis {
    [key: string]: MapleRequestApiConfig;
}

export default MapleRequestApis;

export { api, MapleRequestApiConfig };
