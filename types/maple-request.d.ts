import Vue, { PluginObject, PluginFunction } from 'vue';

import { AxiosRequestConfig } from 'axios';
import { type } from 'os';

import { MapleRequestApis } from './maple-request-apis';

export declare class MapleRequestOptions {
    create: AxiosRequestConfig;
    apis: MapleRequestApis;
}

export declare class MapleRequest {
    static install: PluginFunction<MapleRequestOptions>;
}
