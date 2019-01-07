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
            this.$request('login', { username: 'test', mobile: "18516565544", password: "12345678" }, true);
        }
    }
</script>
<style lang="scss">
    body {
        background: #fff !important;
    }
</style>
