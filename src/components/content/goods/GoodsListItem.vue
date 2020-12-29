<template>
    <div class="goods-item">
        <img :src="goodsItem.show.img" alt="" class="goods-img" @load='imgLoad'>
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span>¥{{goodsItem.price}}</span>
            <span>{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
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
    methods: {
        imgLoad() {
            this.$bus.$emit('imgLoad')
        }
    },
    components: {}
}
</script>

<style scope>
.goods-item{
    width: 48%;
    padding-bottom: 15px;

}

.goods-img {
    width: 100%;
    border-radius: 5px;
    vertical-align: middle;
}

.goods-info  {
    position: relative;
    top: 10px;
    font-size: 12px;
    text-align: center;
}

.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}

.goods-info span:nth-child(2) {
    color: var(--color-high-text);
    margin-right: 20px;
}

.goods-info span:nth-child(3) {
    position: relative;
}

.goods-info span:nth-child(3)::before {
    content: '';
    position: absolute;
    bottom: 1px;
    left: -13px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>
