import axios from 'axios'

const api = axios.create({
    baseURL: 'https://beegee-api.herokuapp.com/api/'
})

export function getUsers() {
    return api.get('users')
}

export function getCategories() {
    return api.get('categories')
}

export function getNumOfPages(category) {
    return api.get('reviews', {
        params: {
            category
        }
    }).then(({data}) => Math.ceil(data.length / 3))
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

export function postComment(comment, review_id, username) {
    return api.post(`reviews/${review_id}/comments`, {
        username,
        body: comment
    })
}

export function deleteComment(comment_id) {
    return api.delete(`comments/${comment_id}`)
}