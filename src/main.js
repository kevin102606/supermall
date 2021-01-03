import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/content/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

// 使用fastclick插件
FastClick.attach(document.body)

// 安装vue-lazyload插件
Vue.use(VueLazyload)

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')
