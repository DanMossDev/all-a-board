import { useEffect, useState } from 'react';
import { getReview, getComments } from '../axios';

export const useRenderReview = (review_id, showComments) => {
    const [review, setReview] = useState()
    const [comments, setComments] = useState([])
    const [isErr, setIsErr] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!showComments) {
            setIsLoading(true)
            getReview(review_id)
            .then(({data}) => {
                setReview(data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsErr(err)
                setIsLoading(false)
            })
        }
    }, [showComments])

    useEffect(() => {
        if (showComments) {
            setIsLoading(true)
            getComments(review_id)
            .then(({data}) => {
                setComments(data.comments.sort((a, b) => b.votes - a.votes))
                setIsLoading(false)
            })
            .catch(err => {
                setIsErr(err)
                setIsLoading(false)
            })
        }
    }, [showComments])

    return {review, comments, isErr, isLoading}
}