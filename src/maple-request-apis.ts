type RequestMethods = 'get' | 'post' | 'delete' | 'options' | 'head' | 'put' | 'patch';

class MapleRequestApiConfig {
    method: RequestMethods;
    url: string;
    baseUrl?: string;
    textMark: boolean;
    openMark: boolean;

    constructor(method: RequestMethods = 'get', url: string = '', baseUrl?: string, textMark: boolean = false, openMark: boolean = false) {
        this.method = method;
        this.url = url;
        this.baseUrl = baseUrl;
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
    text(method: RequestMethods, url: string, baseUrl: string) {
        return new MapleRequestApiConfig(method, url, baseUrl, true);
    },
    open(method: RequestMethods, url: string, baseUrl: string) {
        return new MapleRequestApiConfig(method, url, baseUrl, false, true);
    },
};

class MapleRequestApis {
    [key: string]: MapleRequestApiConfig;
}

export default MapleRequestApis;

export { api, MapleRequestApiConfig };
