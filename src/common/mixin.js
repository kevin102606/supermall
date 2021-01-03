import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'
import { BACK_POSITION } from './const'

export const listenImgMixin = {
    data() {
        return {
            listenImgLoad: null,
            refresh: null
        }
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 500)
        this.listenImgLoad = () => {
            this.refresh()
        }
        this.$bus.$on('imgLoad', this.listenImgLoad)
    }
}

export const backTopMixin = {
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 500)
        },
        listenShowBackTop(position) {
            this.isShowBackTop = -position.y > BACK_POSITION
        }
    },
    components: { BackTop }
}
