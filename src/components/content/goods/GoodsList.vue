<template>
    <div class="goods-list">
        <goods-list-item
            v-for="(item, index) in goods"
            :key="index"
            :goods-item="item"
        ></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        GoodsListItem
    }
}
</script>

<style scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
