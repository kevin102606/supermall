<template>
    <div id="detail">
        <detail-nav-bar
            @itemClick="titleClick"
            class="detail-nav-bar"
            ref="detailNav"
        ></detail-nav-bar>
        <scroll
            class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
        >
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-image-info
                :image-info="imageInfo"
                @detailImgLoad="detailImgLoad"
            ></detail-image-info>
            <detail-param-info
                :param-info="paramInfo"
                ref="param"
            ></detail-param-info>
            <detail-comment-info
                :comment-info="commentInfo"
                ref="comment"
            ></detail-comment-info>
            <goods-list :goods="recommendInfo" ref="recommend"></goods-list>
        </scroll>
        <detail-bottom-bar
            class="detail-bottom-bar"
            @addToCart="addCart"
        ></detail-bottom-bar>
        <back-top v-show="isShowBackTop" @click.native="backTop"></back-top>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImageInfo from './childComps/DetailImageInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {
    getDetailData,
    Goods,
    Shop,
    Param,
    getRecommendData
} from 'network/detail'

import { listenImgMixin, backTopMixin } from 'common/mixin'

import { mapActions } from 'vuex'

export default {
    name: 'Detail',
    props: {},
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            imageInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommendInfo: [],
            themeTopY: [],
            currentIndex: 0,
            getThemeTopY: null
        }
    },
    mixins: [listenImgMixin, backTopMixin],
    computed: {},
    created() {
        // 保存商品iid
        this.iid = this.$route.params.iid
        // 请求详情数据
        this.getDetailData(this.iid)
        // 请求推荐数据
        this.getRecommendData()
    },
    mounted() {
        this.getThemeTopY = function() {
            this.themeTopY.push(0)
            this.themeTopY.push(this.$refs.param.$el.offsetTop)
            this.themeTopY.push(this.$refs.comment.$el.offsetTop)
            this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        }
    },
    destroyed() {
        this.$bus.$off('imgLoad', this.listenImgLoad)
    },
    watch: {},
    methods: {
        ...mapActions([
            'addToCart'
        ]),
        // 事件监听相关的方法
        detailImgLoad() {
            this.refresh()
            this.getThemeTopY()
        },
        titleClick(index) {
            this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 0)
        },
        contentScroll(position) {
            const positionY = -position.y
            const length = this.themeTopY.length
            for (let i = 0; i < length; i++) {
                if (
                    i !== this.currentIndex &&
                    ((i < length - 1 &&
                        positionY >= this.themeTopY[i] &&
                        positionY < this.themeTopY[i + 1]) ||
                        (i === length - 1 && positionY >= this.themeTopY[i]))
                ) {
                    this.currentIndex = i
                    this.$refs.detailNav.currentIndex = this.currentIndex
                }
            }
            this.listenShowBackTop(position)
        },
        addCart() {
            const cartItem = {}
            cartItem.image = this.topImages[0]
            cartItem.title = this.goods.title
            cartItem.desc = this.goods.desc
            cartItem.price = this.goods.realPrice
            cartItem.id = this.iid
            this.addToCart(cartItem).then(res => {
                this.$toast.show(res, 1500)
            })
        },

        // 请求数据相关的方法
        getDetailData(iid) {
            getDetailData(iid).then(res => {
                const data = res.result
                // 获取轮播图
                this.topImages = data.itemInfo.topImages
                // 获取商品信息
                this.goods = new Goods(
                    data.itemInfo,
                    data.columns,
                    data.shopInfo.services
                )
                // 获取店铺信息
                this.shop = new Shop(data.shopInfo)
                // 获取图片信息
                this.imageInfo = data.detailInfo
                // 获取参数信息
                this.paramInfo = new Param(
                    data.itemParams.info,
                    data.itemParams.rule
                )
                // 获取评论信息
                if (data.rate.cRate !== 0) {
                    this.commentInfo = data.rate.list[0]
                }
            })
        },
        getRecommendData() {
            getRecommendData().then(res => {
                this.recommendInfo = res.data.list
            })
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailImageInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailBottomBar,
        Scroll,
        GoodsList
    }
}
</script>

<style scoped>
#detail {
    height: 100vh;
}

.detail-nav-bar {
    position: relative;
    z-index: 1;
}

.content {
    height: calc(100% - 44px - 49px);
    background-color: #fff;
    overflow: hidden;
}

.detail-bottom-bar {
    position: relative;
    z-index: 1;
}
</style>
