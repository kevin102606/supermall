import { request } from './request'

// 请求首页多种数据
export function getMultidata() {
    return request({
        url: '/home/multidata'
    })
}

// 请求首页商品数据
export function getGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}
