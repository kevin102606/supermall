<template>
    <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
        <table
            v-for="(table, index) in paramInfo.sizes"
            :key="index"
            class="table-size"
        >
            <tr v-for="(tr, indey) in table" :key="indey">
                <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
            </tr>
        </table>
        <table class="table-info">
            <tr v-for="(item, index) in paramInfo.infos" :key="index">
                <td>{{ item.key }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </table>
        <div class="img" v-if="paramInfo.images.length !== 0">
            <img :src="paramInfo.images[0]" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        paramInfo: {
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
.param-info {
    padding: 20px 15px;
    border-bottom: 5px solid #eee;
}

table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
}

table tr {
    height: 40px;
    border-bottom: 1px solid #eee;
}

.table-info tr td:nth-child(1) {
    width: 95px;
}

.table-info tr td:nth-child(2) {
    color: var(--color-high-text);
}

.img img {
    width: 100%;
}
</style>
