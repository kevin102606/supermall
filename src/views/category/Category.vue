<template>
    <div id="category">
        <nav-bar class="category-nav">
            <div slot="center">商品分类</div>
        </nav-bar>
        <tab-control
            :titles="['流行', '新款', '精选']"
            @itemClick="tabClick"
            ref="tabControl1"
            class="tab-control-first"
            v-show="isFixed"
        ></tab-control>
        <div class="category-content">
            <category-menu
                :category="category"
                @itemClick="menuClick"
            ></category-menu>
            <scroll
                class="subcategory-content"
                ref="scroll"
                :probe-type="3"
                @scroll="contentScroll"
            >
                <category-feature
                    :category-feature="categoryFeature"
                    @imgLoad="featureImgLoad"
                ></category-feature>
                <tab-control
                    :titles="['流行', '新款', '精选']"
                    @itemClick="tabClick"
                    ref="tabControl2"
                ></tab-control>
                <goods-list :goods="categoryRecommend"></goods-list>
            </scroll>
            <back-top v-show='isShowBackTop' @click.native='backTop'></back-top>
        </div>
    </div>
</template>

<script>
import CategoryMenu from './childComps/CategoryMenu'
import CategoryFeature from './childComps/CategoryFeature'

import NavBar from 'components/common/navBar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {
    getCategoryData,
    getCategoryFeatureData,
    getCategoryRecommendData
} from 'network/category'

import { listenImgMixin, backTopMixin } from 'common/mixin'

export default {
    name: 'Category',
    props: {},
    mixins: [listenImgMixin, backTopMixin],
    data() {
        return {
            category: [],
            currentIndex: 0,
            categoryFeature: [],
            currentType: 'pop',
            categoryRecommend: [],
            tabOffsetTopY: 0,
            isFixed: false,
            positionY: 0,
            saveY: 0
        }
    },
    computed: {},
    created() {
        // 获取分类的数据
        this.getCategoryData(this.currentIndex, this.currentType)
    },
    mounted() {},
    activated() {
        this.$refs.scroll.refresh()
        this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
    deactivated() {
        this.saveY = this.$refs.scroll.getScrollY()
    },
    watch: {},
    methods: {
        // 事件监听相关的方法
        menuClick(index) {
            this.currentIndex = index
            this.getCategoryData(this.currentIndex, this.currentType)
        },
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
            this.getCategoryData(this.currentIndex, this.currentType)
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
        },
        contentScroll(position) {
            this.positionY = -position.y
            this.isFixed = this.positionY > this.tabOffsetTopY
            this.listenShowBackTop(position)
        },
        featureImgLoad(index) {
            this.tabOffsetTopY = this.$refs.tabControl2.$el.offsetTop
            this.isFixed = this.positionY > this.tabOffsetTopY
        },

        // 请求数据相关的方法
        getCategoryData(index, type) {
            getCategoryData().then(res => {
                this.category = res.data.category.list
                const maitKey = this.category[index].maitKey
                const miniWallkey = this.category[index].miniWallkey
                // 获取子类的数据
                this.getCategoryFeatureData(maitKey)
                // 获取子类详情的数据
                this.getCategoryRecommendData(miniWallkey, type)
            })
        },
        getCategoryFeatureData(maitKey) {
            getCategoryFeatureData(maitKey).then(res => {
                this.categoryFeature = res.data.list
            })
        },
        getCategoryRecommendData(miniWallkey, type) {
            getCategoryRecommendData(miniWallkey, type).then(res => {
                this.categoryRecommend = res
            })
        }
    },
    components: {
        CategoryMenu,
        CategoryFeature,
        NavBar,
        Scroll,
        TabControl,
        GoodsList
    }
}
</script>

<style scoped>
#category {
    position: relative;
    height: 100vh;
}

.category-nav {
    position: relative;
    z-index: 2;
    background-color: var(--color-tint);
    color: #fff;
}

.category-content {
    display: flex;
    /* height: calc(100% - 44px - 49px); */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}

.subcategory-content {
    flex: 1;
    height: 100%;
    overflow: hidden;
}

.tab-control-first {
    position: absolute;
    left: 100px;
    right: 0;
    z-index: 1;
    background-color: #fff;
}
</style>
