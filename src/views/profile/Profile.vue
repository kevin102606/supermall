<template>
    <div id="profile">
        <nav-bar class="profile-nav-bar">
            <div slot="center">惠多多商城</div>
        </nav-bar>
        <user-info></user-info>
        <user-list :list-data="otherList"></user-list>
        <user-list :list-data="serviceList"></user-list>
    </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import UserInfo from './childComps/UserInfo'
import UserList from './childComps/UserList'

export default {
    props: {},
    data() {
        return {
            otherList: [
                {
                    img: require('assets/img/profile/message.jpg'),
                    text: '我的消息'
                },
                {
                    img: require('assets/img/profile/shopping.jpg'),
                    text: '积分商城'
                },
                { img: require('assets/img/profile/vip.jpg'), text: '会员卡' }
            ],
            serviceList: [
                {
                    img: require('assets/img/profile/cart.jpg'),
                    text: '我的购物车'
                },
                { img: require('assets/img/profile/pointer.jpg'), text: '下载购物APP' }
            ]
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        NavBar,
        UserInfo,
        UserList
    }
}
</script>

<style scoped>
.profile-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
}
</style>
