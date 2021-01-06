<template>
    <div class="user-info">
        <div class="info-top">
            <a href="#" class="user-avatar">
                <img src="~assets/img/profile/avatar.svg" alt="" />
            </a>
            <div>
                <a href="#" class="user-register">登录/注册</a>
                <div class="user-phone">暂无绑定手机号</div>
            </div>
            <div class="user-arrow"></div>
        </div>
        <div class="info-bottom">
            <div class="user-account">
                <div class="account-number"><span>0.00</span>元</div>
                <div class="account-text">我的余额</div>
            </div>
            <div class="user-discount">
                <div class="discount-number"><span>0</span>个</div>
                <div class="discount-text">我的优惠</div>
            </div>
            <div class="user-point">
                <div class="point-number"><span>0</span>分</div>
                <div class="point-text">我的积分</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
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
#user-info {
    background-color: var(--color-tint);
}

.info-top {
    display: flex;
    align-items: center;
    padding: 10px 10px 10px 0;
    background-color: var(--color-tint);
    color: #fff;
}

.user-avatar {
    margin: 0 10px 0 5px;
}

.user-avatar img {
    width: 60px;
    height: 60px;
}

.user-register {
    color: #fff;
}

.user-phone {
    position: relative;
    margin-left: 18px;
    margin-top: 3px;
    font-size: 14px;
}

.user-phone::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 0;
    width: 18px;
    height: 18px;
    background: url('~assets/img/profile/phone.svg') 0 0/18px 18px;
}

.user-arrow {
    position: absolute;
    right: 20px;
    transform: rotate(45deg);
    width: 8px;
    height: 8px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
}

.info-bottom {
    display: flex;
}

.info-bottom > div {
    flex: 1;
    padding: 20px 0;
    text-align: center;
    font-size: 13px;
}

.info-bottom > div:nth-child(-n+2) {
    border-right: 1px solid #eee;
}

.info-bottom > div > div:nth-child(1) {
    margin-bottom: 5px;
}

.info-bottom > div > div:nth-child(1) span {
    font-size: 22px;
    font-weight: 700;
    color: var(--color-tint);
}
</style>
