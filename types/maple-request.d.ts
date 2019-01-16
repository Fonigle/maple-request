import Vue, { PluginObject, PluginFunction } from 'vue';

import { AxiosRequestConfig } from 'axios';
import { type } from 'os';

import { MapleRequestApis } from './maple-request-apis';

export declare class MapleRequestOptions {
    create?: AxiosRequestConfig;
    apis?: MapleRequestApis;
    interceptors?: {
        request: (config: any) => any;
        requestError: (error: any) => any;
        response: (response: any) => any;
        responseError: (error: any) => any;
    };
    loading?: {
        start(): void;
        close(): void;
    };
    pre?: {
        request: (data: { [key: string]: any }) => void;
        response: (result: any) => void;
        responseError: (error: any) => void;
    };
}

export declare class MapleRequest {
    static install: PluginFunction<MapleRequestOptions>;
}
