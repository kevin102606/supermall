<template>
    <div class="cart-list-item">
        <div class="cart-button">
            <check-button
                class="check-button"
                :is-checked="cartItem.checked"
                @click.native="checkClick"
            ></check-button>
        </div>
        <img :src="cartItem.image" alt="" class="cart-img" />
        <div class="cart-info">
            <div class="info-title">{{ cartItem.title }}</div>
            <div class="info-desc">{{ cartItem.desc }}</div>
            <div class="info-other">
                <span class="price">¥{{ cartItem.price }}</span>
                <span class="count">x{{ cartItem.count }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
    props: {
        cartItem: {
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
        checkClick() {
            this.cartItem.checked = !this.cartItem.checked
        }
    },
    components: {
        CheckButton
    }
}
</script>

<style scoped>
.cart-list-item {
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid #eee;
}

.cart-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 5px;
}

.check-button {
    width: 20px;
    height: 20px;
}

.cart-img {
    width: 80px;
    height: 100px;
    border-radius: 5px;
}

.cart-info {
    padding: 0 10px;
    overflow: hidden;
    font-size: 17px;
}

.info-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 20px;
    color: #333;
}

.info-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 20px;
    font-size: 14px;
}

.price {
    color: var(--color-high-text);
}

.count {
    float: right;
}
</style>
