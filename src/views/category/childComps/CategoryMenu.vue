<template>
    <div class="category-menu">
        <scroll class="menu-content">
            <div
                class="menu-item"
                v-for="(item, index) in category"
                :key="index"
                :class="{ active: currentIndex === index }"
                @click="itemClick(index)"
            >
                {{ item.title }}
            </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
    props: {
        category: {
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
        itemClick(index) {
            this.currentIndex = index
            this.$emit('itemClick', index)
        }
    },
    components: {
        Scroll
    }
}
</script>

<style scoped>
.category-menu {
    width: 100px;
    background-color: #f6f6f6;
}

.menu-content {
    height: 100%;
    overflow: hidden;
}

.menu-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
}

.active {
    border-left: 5px solid var(--color-tint);
    background-color: #fff;
    color: var(--color-high-text);
    font-weight: 700;
}
</style>
