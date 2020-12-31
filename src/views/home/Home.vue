<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control
            :titles="['流行', '新款', '精选']"
            @itemClick="tabClick"
            ref="tabControl1"
            v-show="isTabFixed"
            class="tab-control"
        ></tab-control>
        <scroll
            class="content"
            :probe-type="3"
            @scroll="contentScroll"
            ref="scroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
        >
            <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad">
            </home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control
                :titles="['流行', '新款', '精选']"
                @itemClick="tabClick"
                ref="tabControl2"
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

import { getHomeMultidata, getHomeGoods } from 'network/home'

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
                sell: { list: [], page: 0 }
            },
            currentType: 'pop',
            isShowBackTop: false,
            tabOffsetTop: 0,
            isTabFixed: false,
            saveY: 0
        }
    },
    computed: {},
    created() {
        // 请求多种数据
        this.getHomeMultidata()
        // 请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 500)
        this.$bus.$on('imgLoad', () => {
            refresh()
        })
    },
    activated() {
        this.$refs.scroll.scrollTo(0, this.saveY, 0)
        this.$refs.scroll.refresh()
    },
    deactivated() {
        this.saveY = this.$refs.scroll.getScrollY()
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
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
        },
        contentScroll(position) {
            this.isShowBackTop = -position.y > BACK_POSITION
            this.isTabFixed = -position.y > this.tabOffsetTop
        },
        backTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        loadMore() {
            this.getHomeGoods(
                this.currentType,
                this.goods[this.currentType].page
            )
        },
        swiperImgLoad() {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        },

        // 请求数据相关的方法
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        getHomeGoods(type) {
            const page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page++
                this.$refs.scroll.finishPullUp()
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
    position: relative;
    height: 100vh;
}

.home-nav {
    background-color: var(--color-tint);
    color: #fff;
}

.content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
}

.tab-control {
    position: relative;
    z-index: 1;
    background-color: #fff;
}
</style>
