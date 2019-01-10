import { AxiosRequestConfig } from 'axios';

export declare interface MapleRequestApiConfig extends AxiosRequestConfig {
    textMark: boolean;
    openMark: boolean;
}

export declare class MapleRequestApiConfig {}

export declare class api {
    static get(url: string, baseUrl?: string): MapleRequestApiConfig;
    static post(url: string, baseUrl?: string): MapleRequestApiConfig;
    static delete(url: string, baseUrl?: string): MapleRequestApiConfig;
    static put(url: string, baseUrl?: string): MapleRequestApiConfig;
    static patch(url: string, baseUrl?: string): MapleRequestApiConfig;
    static head(url: string, baseUrl?: string): MapleRequestApiConfig;
    static options(url: string, baseUrl?: string): MapleRequestApiConfig;
    static text(url: string, baseUrl: string): MapleRequestApiConfig;
    static open(url: string, baseUrl: string): MapleRequestApiConfig;
}

export declare class MapleRequestApis {
    [key: string]: MapleRequestApiConfig;
}
