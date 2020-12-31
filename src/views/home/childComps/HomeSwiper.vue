<template>
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img @load="imgLoad" :src="item.image" alt="" />
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            isLoad: false
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        imgLoad() {
            if (!this.isLoad) {
                this.$emit('swiperImgLoad')
                this.isLoad = true
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped></style>
