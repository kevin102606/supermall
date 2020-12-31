<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <scroll class="content">
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-image-info :image-info="imageInfo"></detail-image-info>
            <detail-param-info :param-info="paramInfo"></detail-param-info>
            <detail-comment-info
                :comment-info="commentInfo"
            ></detail-comment-info>
            <goods-list :goods='recommendInfo'></goods-list>
        </scroll>
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

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {
    getDetailData,
    Goods,
    Shop,
    Param,
    getRecommendData
} from 'network/detail'

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
            recommendInfo: []
        }
    },
    computed: {},
    created() {
        // 保存商品iid
        this.iid = this.$route.params.iid
        // 请求详情数据
        this.getDetailData(this.iid)
        // 请求推荐数据
        this.getRecommendData()
    },
    mounted() {},
    watch: {},
    methods: {
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
                console.log(this.recommendInfo);
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
        Scroll,
        GoodsList
    }
}
</script>

<style scoped>
#detail {
    height: 100vh;
}

.content {
    height: calc(100% - 44px);
    background-color: #fff;
    overflow: hidden;
    position: relative;
    z-index: 10;
}
</style>
