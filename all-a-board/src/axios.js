import axios from 'axios'

const api = axios.create({
    baseURL: 'https://beegee-api.herokuapp.com/api/'
})

export function getCategories() {
    return api.get('categories')
}

export function getReviews(currentPage, category, sort_by, order) {
    return api.get('reviews', {
        params: {
            limit: 3,
            p: currentPage,
            category,
            sort_by,
            order
        }
    })
}

export function updateVote(target, id, inc_votes) {
    return api.patch(`${target}/${id}`, {inc_votes})
}

export function getReview(review_id) {
    return api.get(`reviews/${review_id}`)
}

export function getComments(review_id) {
    return api.get(`reviews/${review_id}/comments`)
}