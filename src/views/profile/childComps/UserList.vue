<template>
    <div class="user-list">
        <div class="user-item" v-for="(item, index) in listData" :key="index">
            <img :src="item.img" alt="" class="item-img" />
            <div class="item-text">{{ item.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        listData: {
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
.user-list {
    border-top: 10px solid #eee;
}
.user-item {
    position: relative;
    margin-left: 10px;
    font-size: 15px;
    color: #333;
}

.item-img {
    position: absolute;
    top: 18px;
    width: 22px;
    height: 22px;
}

.item-text {
    position: relative;
    margin-left:  30px;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
}
</style>
