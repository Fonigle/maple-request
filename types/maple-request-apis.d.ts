type RequestMethods = 'get' | 'post' | 'delete' | 'options' | 'head' | 'put' | 'patch';

export declare interface MapleRequestApiConfig {
    method: RequestMethods;
    url: string;
    baseUrl?: string;
    textMark: boolean;
    openMark: boolean;
}

export declare class api {
    static get(url: string, baseUrl?: string): MapleRequestApiConfig;
    static post(url: string, baseUrl?: string): MapleRequestApiConfig;
    static delete(url: string, baseUrl?: string): MapleRequestApiConfig;
    static put(url: string, baseUrl?: string): MapleRequestApiConfig;
    static text(method: RequestMethods, url: string, baseUrl: string): MapleRequestApiConfig;
    static open(method: RequestMethods, url: string, baseUrl: string): MapleRequestApiConfig;
}

export declare class MapleRequestApis {
    [key: string]: MapleRequestApiConfig;
}
