type RequestMethods = 'get' | 'post' | 'delete' | 'options' | 'head' | 'put' | 'patch';

export declare interface MapleRequestApiConfig {
    name: string;
    method: RequestMethods;
    url: string;
    baseUrl?: string;
    textMark: boolean;
    openMark: boolean;
}

export declare class api {
    static get(name: string, url: string, baseUrl?: string): MapleRequestApiConfig;
    static post(name: string, url: string, baseUrl?: string): MapleRequestApiConfig;
    static delete(name: string, url: string, baseUrl?: string): MapleRequestApiConfig;
    static text(name: string, method: RequestMethods, url: string, baseUrl: string): MapleRequestApiConfig;
    static open(name: string, method: RequestMethods, url: string, baseUrl: string): MapleRequestApiConfig;
}

export declare class MapleRequestApis {
    [key: string]: MapleRequestApiConfig;
}
