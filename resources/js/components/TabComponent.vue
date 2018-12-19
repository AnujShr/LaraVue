<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            name: {required: true},
            selected: {default: false},
        },
        computed: {
            href() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
        },
        data() {
            return {
                isActive: false
            };
        },
        mounted() {
            this.isActive = this.selected;
        },

    }
</script>

<style>
    body {
        padding-top: 40px;
    }
</style>