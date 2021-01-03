<template>
    <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            message: '',
            isShow: false
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        show(message = '默认文字', delay = 2000) {
            this.message = message
            this.isShow = true
            setTimeout(() => {
                this.message = ''
                this.isShow = false
            }, delay)
        }
    },
    components: {}
}
</script>

<style scoped>
.toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    background-color: rgba(100, 100, 100, 0.6);
    color: #fff;
}
</style>
