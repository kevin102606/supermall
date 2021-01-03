<template>
    <div class="bottom-bar">
        <div class="bar-left">
            <div class="service">
                <span class="service-icon"></span>
                <span class="service-text">客服</span>
            </div>
            <div class="shop">
                <span class="shop-icon"></span>
                <span class="shop-text">店铺</span>
            </div>
            <div class="collect">
                <span class="collect-icon"></span>
                <span class="collect-text">收藏</span>
            </div>
        </div>
        <div class="bar-right">
            <div class="cart" @click="addCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        addCart() {
            this.$emit('addToCart')
        }
    },
    components: {}
}
</script>

<style scoped>
.bottom-bar {
    display: flex;
    height: 49px;
    background-color: #fff;
}

.bar-left{
    display: flex;
    flex: 1;
    text-align: center;
    font-size: 13px;
}

.bar-left>div {
    flex: 1;
}

.service-icon, .shop-icon, .collect-icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 2px  auto 5px;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}

.bar-left  .service-icon {
    background-position: 0 97px;
}

.bar-left  .shop-icon {
    background-position: 0 201px;
}

.bar-right {
    display: flex;
    flex: 1;
    line-height: 49px;
    text-align: center;
    font-size: 15px;
}

.bar-right .cart {
    flex: 1;
    background-color: yellow;
}

.bar-right .buy {
    flex: 1;
    background-color: var(--color-tint);
    color: #fff;
}
</style>
