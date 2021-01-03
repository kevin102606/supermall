<template>
    <div class="cart-bottom-bar">
        <check-button
            class="check-button"
            :is-checked="checkedAll"
            @click.native="checkClick"
        ></check-button>
        <span class="cart-select-all">全选</span>
        <span class="cart-total-price">合计: {{ totalPrice }}</span>
        <div class="cart-total-count" @click="calcClick">
            <span>去计算({{ totalCount }})</span>
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'

export default {
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['cartList']),
        totalPrice() {
            return (
                '¥' +
                this.cartList
                    .filter(item => item.checked)
                    .reduce(
                        (preVal, curVal) =>
                            preVal + curVal.count * curVal.price,
                        0
                    )
                    .toFixed(2)
            )
        },
        totalCount() {
            return this.cartList
                .filter(item => item.checked)
                .reduce((preVal, curVal) => preVal + curVal.count, 0)
        },
        checkedAll() {
            if (this.cartList.length === 0) return false
            return !this.cartList.find(item => !item.checked)
        }
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {
        checkClick() {
            if (this.checkedAll) {
                this.cartList.forEach(item => {
                    item.checked = false
                })
            } else {
                this.cartList.forEach(item => {
                    item.checked = true
                })
            }
        },
        calcClick() {
            if (!this.checkedAll) {
                this.$toast.show('请选择全部购买的商品')
            }
        }
    },
    components: {
        CheckButton
    }
}
</script>

<style scoped>
.cart-bottom-bar {
    position: relative;
    bottom: 0px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
}

.check-button {
    width: 20px;
    height: 20px;
    margin: -2px 5px 0 5px;
}

.cart-select-all {
    margin-right: 40px;
}

.cart-total-price {
    flex: 1;
}

.cart-total-count {
    padding: 0 5px;
    background-color: red;
    color: #fff;
}

.cart-total-count span {
    display: inline-block;
    width: 100%;
    height: 100%;
}
</style>
