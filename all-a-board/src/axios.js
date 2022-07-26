import axios from 'axios'

const api = axios.create({
    baseURL: 'https://beegee-api.herokuapp.com/api/'
})

export function getCategories() {
    return api.get('categories')
}

export function getReviews(currentPage, category, sortBy, order) {
    let queryUrl = `reviews?limit=3&p=${currentPage}`
    if (category) queryUrl += `&category=${category}`
    if (sortBy) queryUrl += `&sort_by=${sortBy}`
    if (order) queryUrl +=  `&order=${order}`
    
    return api.get(queryUrl)
}

export function reviewVote(review_id, vote) {
    return api.patch(`reviews/${review_id}`, {inc_votes: vote})
}

export function getReview(review_id) {
    return api.get(`reviews/${review_id}`)
}