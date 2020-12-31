<template>
    <div class="detail-nav">
        <nav-bar>
            <div slot="left" class="img" @click="backHome">
                <img src="~assets/img/common/back.svg" alt="" />
            </div>
            <div slot="center" class="title">
                <div
                    v-for="(item, index) in titles"
                    :key="index"
                    :class="{ active: currentIndex === index }"
                    @click="titleClick(index)"
                >
                    {{ item }}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
    props: {},
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        titleClick(index) {
            this.currentIndex = index
        },
        backHome() {
            this.$router.back()
        }
    },
    components: {
        NavBar
    }
}
</script>

<style scoped>
.img {
    text-align: center;
}

.img img {
    margin-top: 11px;
}

.title {
    display: flex;
    font-size: 13px;
}

.title > div {
    flex: 1;
}

.active {
    color: var(--color-high-text);
}
</style>
