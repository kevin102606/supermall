<template>
    <div class="category-feature">
        <div
            class="feature-item"
            v-for="(item, index) in categoryFeature"
            :key="index"
        >
            <a :href="item.link">
                <img @load="imgLoad(index)" :src="item.image" alt="" />
                <span>{{ item.title }}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categoryFeature: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            imgLength: 0,
            indexList: []
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {
        categoryFeature(val) {
            this.imgLength = val.length
        }
    },
    methods: {
        imgLoad(index) {
            this.indexList.push(index)
            if (this.imgLength === this.indexList.length) {
                this.$emit('imgLoad', index)
                this.indexList = []
            }
        }
    },
    components: {}
}
</script>

<style scoped>
.category-feature {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0 10px;
}

.feature-item {
    width: 33%;
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
}

.feature-item img {
    width: 60px;
}

.feature-item span {
    display: block;
    margin-top: 10px;
}
</style>
