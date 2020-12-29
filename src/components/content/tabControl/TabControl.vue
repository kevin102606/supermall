<template>
    <div class="tab-control">
        <div
            v-for="(item, index) in titles"
            :key="index"
            class="tab-control-item"
            @click="tabClick(index)"
        >
            <span :class="{active: currentIndex === index}">{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        tabClick(index) {
            this.currentIndex = index
            this.$emit('itemClick', index)
        }
    },
    components: {}
}
</script>

<style scoped>
.tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
}

.tab-control-item {
    flex: 1;
}

 .active {
    padding: 5px;
    color: var(--color-tint);
    border-bottom: 1px solid var(--color-high-text);
}
</style>
