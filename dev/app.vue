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
            this.$request('login', { mobile: "18516565544", password: "12345678" });
        }
    }
</script>
<style lang="scss">
    body {
        background: #fff !important;
    }
</style>
