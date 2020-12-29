<template>
    <div class="recommend">
        <div
            v-for="(item, index) in recommends"
            :key="index"
            class="recommend-item"
        >
            <a :href="item.link">
                <img :src="item.image" alt="" />
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default() {
                return []
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
.recommend {
    display: flex;
    justify-content: space-around;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
    text-align: center;
}

.recommend-item {
    flex: 1;
}

.recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}

.recommend-item div {
    font-size: 12px;
    color: #666;
}
</style>
