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

export function reviewVote(review_id, vote) {
    return api.patch(`reviews/${review_id}`, {inc_votes: vote})
}

export function commentVote(comment_id, vote) {
    return api.patch(`comments/${comment_id}`, {inc_votes: vote})
}

export function getReview(review_id) {
    return api.get(`reviews/${review_id}`)
}

export function getComments(review_id) {
    return api.get(`reviews/${review_id}/comments`)
}