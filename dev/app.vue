<template>
    <div class="app">
        Maple Request
    </div>
</template>
<script lang="ts">
    import Vue, { CreateElement } from 'vue';
    import { Component, Prop, Mixins } from "vue-property-decorator";

    @Component
    export default class MyComponent extends Vue {
        mounted() {
            for (let i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
                console.log(`request ${i} start`);
                this.$request('test', { q: i }, false, 'test').then(response => { console.log(`>>>  ${response.data}`); });
            }
        }
    }
</script>
<style lang="scss">
    body {
        background: #fff !important;
    }
</style>
