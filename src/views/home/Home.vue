<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <scroll
            class="content"
            :probe-type="3"
            @scroll="contentScroll"
            ref="scroll"
        >
            <home-swiper :banners="banners"> </home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control
                :titles="['流行', '新款', '精选']"
                @itemClick="tabClick"
            ></tab-control>
            <goods-list :goods="goods[currentType].list"></goods-list>
        </scroll>
        <back-top v-show="isShowBackTop" @click.native="backTop"></back-top>
    </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navBar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import { getMultidata, getGoods } from 'network/home'

import { BACK_POSITION } from 'common/const'
import { debounce } from 'common/utils'

export default {
    props: {},
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                pop: { list: [], page: 0 },
                new: { list: [], page: 0 },
                sell: { list: [], pge: 0 }
            },
            currentType: 'pop',
            isShowBackTop: false
        }
    },
    computed: {},
    created() {
        // 请求多种数据
        this.getMultidata()
        // 请求商品数据
        this.getGoods('pop', 1)
        this.getGoods('new', 1)
        this.getGoods('sell', 1)
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 500)
        this.$bus.$on('imgLoad', () => {
            refresh()
        })
    },
    watch: {},
    methods: {
        // 事件监听相关的方法
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
        },
        contentScroll(position) {
            this.isShowBackTop = -position.y > BACK_POSITION
        },
        backTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },

        // 请求数据相关的方法
        getMultidata() {
            getMultidata().then(res => {
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        getGoods(type, page) {
            getGoods(type, page).then(res => {
                this.goods[type].list = res.data.list
                console.log(this.goods[type].list)
            })
        }
    },
    components: {
        HomeSwiper,
        RecommendView,
        FeatureView,
        NavBar,
        TabControl,
        GoodsList,
        BackTop,
        Scroll
    }
}
</script>

<style scoped>
#home {
    height: 100vh;
}

.home-nav {
    background-color: var(--color-tint);
    color: #fff;
}

.content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
}
</style>
