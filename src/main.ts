import 'vue-tsx-support/enable-check';
import { PluginObject } from 'vue';

import MapleRequestFunctions from './maple-request-plugin';

declare interface MapleRequestConfig {}

const MapleRequest: PluginObject<MapleRequestConfig> = {
    install(Vue, config) {
        Vue.use(MapleRequestFunctions);
    },
};

export default MapleRequest;
