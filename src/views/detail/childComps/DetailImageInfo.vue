<template>
    <div class="image-info" v-if="Object.keys(imageInfo).length !== 0">
        <div class="image-desc">
            <div class="desc-top"></div>
            <div class="desc-body">{{ imageInfo.desc }}</div>
            <div class="desc-bottom"></div>
        </div>
        <div class="image-title">{{ imageInfo.detailImage[0].key }}</div>
        <div class="image-body">
            <img
                v-for="(item, index) in imageInfo.detailImage[0].list"
                :key="index"
                :src="item"
                alt=""
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageInfo: {
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
    methods: {},
    components: {}
}
</script>

<style scoped>
.image-info {
    padding: 20px 0;
    border-bottom: 5px solid #eee;
}

.image-desc {
    margin: 0 20px;
}

.desc-top,
.desc-bottom {
    position: relative;
    width: 80px;
    height: 1px;
    background-color: #666;
}

.desc-bottom {
    float: right;
}

.desc-top::before, .desc-bottom::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 5px;
    background-color: #000;
}

.desc-bottom::after {
    right: 0;
}

.desc-body {
    padding: 15px 0;
    font-size: 14px;
}

.image-title {
    margin: 10px 20px;
    color: #333;
}

.image-body img {
    width: 100%;
}
</style>
