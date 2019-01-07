import Vue, { Component } from 'vue';
import MapleRequest, { api } from '@/main';

let apis = {
    test: api.get('/'),
};

Vue.use(MapleRequest, {
    apis,
    create: {
        timeout: 20000,
        //withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
        //baseURL: '//job-api.ci.dev.lanxinka.com/1.0',
        baseURL: 'http://server.fonigle.com',
    },
    interceptors: {
        request: (config: any) => {
            config.headers.plantform = 'kb-mamager';
            return config;
        },
        response: (response: any) => {
            return response;
        },
    },
    loading: {
        start: function() {},
        close: function() {},
    },
});
