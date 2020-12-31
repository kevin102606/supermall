<template>
    <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
        <div class="comment-top">
            <span class="comment-title">用户评价</span>
            <span class="comment-more">更多 <i></i></span>
        </div>
        <div class="comment-body">
            <div class="comment-user">
                <img :src="commentInfo.user.avatar" alt="" />
                <span>{{ commentInfo.user.uname }}</span>
            </div>
            <div class="comment-text">
                {{ commentInfo.content }}
            </div>
            <div class="comment-other">
                <span>{{ commentInfo.created | formatTime }}</span>
                <span>{{ commentInfo.style }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { formatDate } from 'common/utils'

export default {
    props: {
        commentInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        formatTime(value) {
            const date = new Date(value * 1000)
            return formatDate(date, 'yyyy/MM/dd hh:mm:ss')
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
.comment-info {
    padding: 5px 12px;
    border-bottom: 5px solid #eee;
}

.comment-top {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: #333;
    border-bottom: 2px solid #eee;
}

.comment-more {
    position: absolute;
    right: 10px;
    font-size: 13px;
}

.comment-more i {
    display: inline-block;
    width: 9px;
    height: 9px;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
}

.comment-body {
    padding-top: 10px;
}

.comment-user {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #333;
}

.comment-user img {
    width: 42px;
    height: 42px;
    border: 1px solid #eee;
    border-radius: 50%;
    margin-right: 10px;
}

.comment-text {
    padding: 10px 4px;
    font-size: 14px;
    line-height: 24px;
    color: #777;
}

.comment-other {
    padding: 0 4px 10px;
    font-size: 12px;
    color: #999;
}

.comment-other span:nth-child(1) {
    margin-right: 8px;
}
</style>
