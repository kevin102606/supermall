<template>
    <div class="check-button" :class="{checked: isChecked}">
        <img src="~assets/img/cart/tick.svg" alt="" />
    </div>
</template>

<script>
export default {
    props: {
        isChecked: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
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
.check-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 50%;
}

.checked {
    background-color: red;
    border: 1px solid red;
}
</style>
