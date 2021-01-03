import { ADD_COUNT, ADD_CART } from './mutation-types'

export default {
    addToCart(context, payload) {
        return new Promise((resolve, reject) => {
            const oldProduct = context.state.cartList.find(
                item => item.id === payload.id
            )
            if (oldProduct) {
                context.commit(ADD_COUNT, oldProduct)
                resolve('商品数量+1')
            } else {
                payload.count = 1
                context.commit(ADD_CART, payload)
                resolve('添加新的商品')
            }
        })
    }
}
