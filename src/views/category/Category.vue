<template>
    <div id="category">
        <nav-bar class="category-nav">
            <div slot="center">商品分类</div>
        </nav-bar>
        <div class="category-content">
            <category-menu
                :category="category"
                @itemClick="menuClick"
            ></category-menu>
            <scroll class="subcategory-content" ref="scroll">
                <category-feature
                    :category-feature="categoryFeature"
                    @imgLoad="featureImgLoad"
                ></category-feature>
                <tab-control
                    :titles="['流行', '新款', '精选']"
                    @itemClick="tabClick"
                ></tab-control>
                <goods-list :goods="categoryRecommend"></goods-list>
            </scroll>
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

import { listenImgMixin } from 'common/mixin'

export default {
    props: {},
    mixins: [listenImgMixin],
    data() {
        return {
            category: [],
            currentIndex: 0,
            categoryFeature: [],
            currentType: 'pop',
            categoryRecommend: []
        }
    },
    computed: {},
    created() {
        this.getCategoryData(this.currentIndex, this.currentType)
    },
    mounted() {},
    watch: {},
    methods: {
        // 事件监听相关的方法
        menuClick(index) {
            this.currentIndex = index
            this.getCategoryData(this.currentIndex, this.currentType)
        },
        featureImgLoad() {
            this.$refs.scroll.refresh()
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
            console.log(this.currentType)
            this.getCategoryData(this.currentIndex, this.currentType)
        },

        // 请求数据相关的方法
        getCategoryData(index, type) {
            getCategoryData().then(res => {
                this.category = res.data.category.list
                const maitKey = this.category[index].maitKey
                const miniWallkey = this.category[index].miniWallkey
                this.getCategoryFeatureData(maitKey)
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
                console.log(res)
                this.categoryRecommend = res
                console.log(this.categoryRecommend)
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
    height: 100vh;
}

.category-nav {
    position: relative;
    z-index: 1;
    background-color: var(--color-tint);
    color: #fff;
}

.category-content {
    display: flex;
    height: calc(100% - 44px - 49px);
}

.subcategory-content {
    flex: 1;
    height: 100%;
    overflow: hidden;
}
</style>
