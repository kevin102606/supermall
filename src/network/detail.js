import { request } from './request'

export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommendData() {
    return request({
        url: '/recommend'
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.realPrice = itemInfo.lowNowPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.sells = shopInfo.cSells
        this.goods = shopInfo.cGoods
        this.score = shopInfo.score
    }
}

export class Param {
    constructor(info, rule) {
        this.infos = info.set
        this.images = info.images ? info.images : []
        this.sizes = rule.tables
    }
}
