type RequestMethods = 'get' | 'post' | 'delete' | 'options' | 'head' | 'put' | 'patch';

class MapleRequestApiConfig {
    name: string;
    method: RequestMethods;
    url: string;
    baseUrl?: string;
    textMark: boolean;
    openMark: boolean;

    constructor(
        name: string = '',
        method: RequestMethods = 'get',
        url: string = '',
        baseUrl?: string,
        textMark: boolean = false,
        openMark: boolean = false,
    ) {
        this.name = name;
        this.method = method;
        this.url = url;
        this.baseUrl = baseUrl;
        this.textMark = textMark;
        this.openMark = openMark;
    }
}

const api = {
    get(name: string, url: string, baseUrl?: string) {
        return new MapleRequestApiConfig(name, 'get', url, baseUrl);
    },
    post(name: string, url: string, baseUrl?: string) {
        return new MapleRequestApiConfig(name, 'post', url, baseUrl);
    },
    delete(name: string, url: string, baseUrl?: string) {
        return new MapleRequestApiConfig(name, 'delete', url, baseUrl);
    },
    text(name: string, method: RequestMethods, url: string, baseUrl: string) {
        return new MapleRequestApiConfig(name, method, url, baseUrl, true);
    },
    open(name: string, method: RequestMethods, url: string, baseUrl: string) {
        return new MapleRequestApiConfig(name, method, url, baseUrl, false, true);
    },
};

class MapleRequestApis {
    [key: string]: MapleRequestApiConfig;
}

export default MapleRequestApis;

export { api };
