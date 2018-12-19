<template>
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
                    <a @click="selectTab(tab)" :href="tab.href">{{tab.name}}</a></li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs: []
            }
        },
        created() {
            this.tabs = this.$children;
        },

        methods: {
            selectTab(selected) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name === selected.name);
                });
            }
        },
    }
</script>
