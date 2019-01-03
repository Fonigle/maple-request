import Vue from 'vue';
import MapleRequest, { api } from '@/main';

let apis = {
    login: api.post('登录', '/business/home/login'),
};

Vue.use(MapleRequest, {
    apis,
    create: {
        timeout: 20000,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
        baseURL: '//job-api.ci.dev.lanxinka.com/1.0',
    },
    interceptors: {
        request: (config: any) => {
            config.headers.plantform = 'kb-mamager';
            return config;
        },
        response: (response: any) => {
            console.log(response);
            return response;
        },
    },
});
