<template>
    <div class="app">
        Maple Request
    </div>
</template>
<script lang="tsx">
    import Vue, { CreateElement } from 'vue';
    import { Component, Prop, Mixins } from "vue-property-decorator";

    @Component
    export default class MyComponent extends Vue {
        mounted() {
            this.$request('key', {});
        }
    }
</script>
<style lang="scss">
    body {
        background: #fff !important;
    }
</style>
