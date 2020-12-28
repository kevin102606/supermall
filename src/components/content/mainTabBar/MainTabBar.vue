<template>
    <div class="main-tab-bar">
        <tab-bar>
            <tab-bar-item path='/home'>
           <img
                    slot="item-icon"
                    src="~assets/img/tabbar/home.svg"
                    alt=""
                />
                 <img
                    slot="item-icon-active"
                    src="~assets/img/tabbar/home_active.svg"
                    alt=""
                />
                <span slot="item-text">首页</span>
            </tab-bar-item>
            <tab-bar-item path='/category'>
                <img
                    slot="item-icon"
                    src="~assets/img/tabbar/category.svg"
                    alt=""
                />
                      <img
                    slot="item-icon-active"
                    src="~assets/img/tabbar/category_active.svg"
                    alt=""
                />
                <span slot="item-text">分类</span>
            </tab-bar-item>
            <tab-bar-item path='/cart'>
                <img
                    slot="item-icon"
                    src="~assets/img/tabbar/cart.svg"
                    alt=""
                />
                  <img
                    slot="item-icon-active"
                    src="~assets/img/tabbar/cart_active.svg"
                    alt=""
                />
                <span slot="item-text">购物车</span>
            </tab-bar-item>
            <tab-bar-item path='/profile'>
                <img
                    slot="item-icon"
                    src="~assets/img/tabbar/profile.svg"
                    alt=""
                />
                  <img
                    slot="item-icon-active"
                    src="~assets/img/tabbar/profile_active.svg"
                    alt=""
                />
                <span slot="item-text">我的</span>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from 'components/common/tabBar/TabBar.vue'
import TabBarItem from 'components/common/tabBar/TabBarItem.vue'

export default {
    props: {},
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
</style>
