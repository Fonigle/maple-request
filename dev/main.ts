import Vue from 'vue';

import './apis';

import App from './app.vue';

const vm = new Vue({
    el: '#app',
    render: h => h(App),
});
