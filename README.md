# maple-request

> vue plugin to manage your requests

[![npm](https://img.shields.io/npm/v/maple-request.svg?logo=npm)](https://www.npmjs.com/package/maple-request) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/maple-request.svg)](https://www.npmjs.com/package/maple-request) [![GitHub](https://img.shields.io/github/license/Fonigle/maple-request.svg)](https://github.com/Fonigle/maple-request)

## HomePage

[theme.maple-ui.com](http://request.maple-ui.com)

## Useage

#### Install

```shell
  $ npm install --save maple-request
```

#### Quick Start

index.js:

```js
import Vue from 'vue';
import MapleRequest from 'maple-request';

Vue.use(MapleRequest, {
    apis: {
        requestA: {
            url: 'https://some-domain.com/api/requestA',
        },
    },
});
```

app.vue:

```html
<template>
    <div class="app"></div>
</temlate>
<script>
    export default {
        mounted(){
            this.$request('requestA')
                .then(response=> {})
                .catch(error=> {})
        }
    }
</script>
```

## LICENSE

[MIT](https://github.com/Fonigle/maple-request/blob/master/LICENSE)
