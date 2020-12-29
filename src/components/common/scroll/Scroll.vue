<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    computed: {},
    created() {},
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position)
        })
    },
    watch: {},
    methods: {
        scrollTo(x, y, time = 500) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        refresh() {
            this.scroll && this.scroll.refresh()
            console.log(2);
        }
    },
    components: {}
}
</script>

<style scoped></style>
