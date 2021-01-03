<template>
    <div id="cart">
        <nav-bar class="cart-nav-bar">
            <div slot="center">购物车({{ length }})</div>
        </nav-bar>
        <cart-list></cart-list>
        <cart-bottom-bar class="cart-bottom-bar"></cart-bottom-bar>
    </div>
</template>

<script>
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import NavBar from 'components/common/navBar/NavBar'

import { mapGetters } from 'vuex'

export default {
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            length: 'cartLength'
        })
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        CartList,
        CartBottomBar,
        NavBar
    }
}
</script>

<style scoped>
#cart {
    height: 100vh;
}

.cart-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
}

.cart-bottom-bar {
    position: absolute;
    bottom: 49px;
}
</style>
