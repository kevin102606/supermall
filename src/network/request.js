const axios = require('axios')

export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    })

    // 请求拦截器
    instance.interceptors.request.use(
        config => config,
        err => err
    )

    // 响应拦截器
    instance.interceptors.response.use(
        res => res.data,
        err => {
            console.log('接口出错啦' + err)
        }
    )

    // 返回请求结果
    return instance(config)
}
