import { request } from './request'

export function getCategoryData() {
    return request({
        url: '/category'
    })
}

export function getCategoryFeatureData(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

export function getCategoryRecommendData(miniWallkey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}
