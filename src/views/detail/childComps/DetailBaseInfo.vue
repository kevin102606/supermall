<template>
    <div class="base-info" v-if="Object.keys(goods).length !== 0">
        <div class="base-title">{{ goods.title }}</div>
        <div class="base-price">
            <span class="n-price">{{ goods.price }}</span>
            <span class="o-price">{{ goods.oldPrice }}</span>
            <span class="discount">{{ goods.discount }}</span>
        </div>
        <div class="base-other">
            <span>{{ goods.columns[0] }}</span>
            <span>{{ goods.columns[1] }}</span>
            <span>{{ goods.services[goods.services.length - 1].name }}</span>
        </div>
        <div class="base-service">
            <div v-for="item in goods.services.length - 1" :key="item">
                <img :src="goods.services[item - 1].icon" alt="" />
                <span>{{ goods.services[item - 1].name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goods: {
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
    methods: {},
    components: {}
}
</script>

<style scoped>
.base-info {
    margin-top: 15px;
    padding: 0 8px;
    border-bottom: 5px solid #eee;
    color: #999;
}

.base-title {
    color: #222;
}

.base-price {
    margin-top: 10px;
}

.base-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
}

.base-price .o-price {
    margin: 0 5px;
    font-size: 13px;
    text-decoration: line-through;
}

.base-price .discount {
    position: relative;
    bottom: 8px;
    padding: 2px 5px;
    border-radius: 8px;
    background-color: var(--color-tint);
    font-size: 12px;
    color: #fff;
}

.base-other {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    line-height: 30px;
    font-size: 13px;
    border-bottom: 1px solid #eee;
}

.base-other {
    flex: 1;
}

.base-service {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    font-size: 12px;
    color: #333;
}

.base-service div img {
    position: relative;
    top: 3px;
    width: 14px;
    height: 14px;
}
</style>
