<template>
    <div class="shop-info" v-if="Object.keys(shop).length !== 0">
        <div class="shop-top">
            <img :src="shop.logo" alt="" />
            <span>{{ shop.name }}</span>
        </div>
        <div class="shop-middle">
            <div class="shop-left">
                <div class="shop-sells">
                    <span class="sells-num">{{
                        shop.sells | formatSells
                    }}</span>
                    <span class="sells-text">总销量</span>
                </div>
                <div class="shop-goods">
                    <span class="goods-num">{{ shop.goods }}</span>
                    <span class="goods-text">全部宝贝</span>
                </div>
            </div>
            <div class="shop-right">
                <table class="shop-score">
                    <tr v-for="(item, index) in shop.score" :key="index">
                        <td>{{ item.name }}</td>
                        <td :class="{ 'score-num': item.isBetter }">
                            {{ item.score }}
                        </td>
                        <td :class="{ 'score-text': item.isBetter }">
                            <span>{{ item.isBetter ? '高' : '低' }}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-bottom">
            <span>进店逛逛</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        formatSells(value) {
            return value > 10000 ? (value / 10000).toFixed(1) + '万' : value
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
    components: {}
}
</script>

<style scoped>
.shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #eee;
}

.shop-top {
    display: flex;
    height: 45px;
    line-height: 45px;
}

.shop-top img {
    width: 45px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-right: 10px;
}

.shop-middle {
    display: flex;
    align-items: center;
    margin-top: 15px;
}

.shop-left,
.shop-right {
    flex: 1;
    text-align: center;
}

.shop-left {
    display: flex;
    justify-content: space-evenly;
    border-right: 1px solid #ccc;
}

.sells-num,
.goods-num {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
}

.sells-text,
.goods-text {
    font-size: 12px;
}

.shop-score {
    margin: 0 auto;
}

.shop-score tr {
    line-height: 25px;
}

.shop-score td:nth-child(-n + 2) {
    padding: 0 5px;
}

.shop-score .score-num {
    color: var(--color-high-text);
}

.shop-score tr td:nth-child(3) span {
    background-color: green;
    color: #fff;
}

.shop-score .score-text span {
    background-color: var(--color-high-text) !important;
}

.shop-bottom {
    margin-top: 18px;
    text-align: center;
    font-size: 14px;
}

.shop-bottom span {
    background-color: #eee;
    padding: 8px 40px;
    border-radius: 10px;
}
</style>
