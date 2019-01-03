import Vue from 'vue';

import App from './app.vue';

import MapleRequest from '@/main';
Vue.use(MapleRequest);

const vm = new Vue({
    el: '#app',
    render: h => h(App),
});
