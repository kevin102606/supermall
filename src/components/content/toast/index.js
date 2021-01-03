import Toast from './Toast.vue'

// 创建obj对象
const obj = {}

obj.install = function(Vue) {
    // 创建组件构造器
    const ToastConstructor = Vue.extend(Toast)
    // 创建组件实例
    const toast = new ToastConstructor()
    // 把组建实例挂载到div元素上
    toast.$mount(document.createElement('div'))
    // 把组件根元素添加到document.body中
    document.body.appendChild(toast.$el)
    // 把组件实例添加到原型对象上
    Vue.prototype.$toast = toast
}

// 导出obj对象
export default obj
