import './ReviewPage.css';
import ReviewCard from "./ReviewCard";
import VoteBox from './VoteBox';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReview, getComments } from '../../axios';

export default function ReviewPage() {
    const [review, setReview] = useState()
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const [isErr, setIsErr] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const {review_id} = useParams()

    useEffect(() => {
        getReview(review_id)
        .then(({data}) => setReview(data))
        .catch(err => setIsErr(err))
    }, [])

    useEffect(() => {
        if (showComments) {
            setIsLoading(true)
            getComments(review_id)
            .then(({data}) => {
                setComments(data.comments)
                setIsLoading(false)
            })
            .catch(err => {
                setIsErr(err)
                setIsLoading(false)
            })
        }
    }, [showComments])



    return <main> { isLoading? <main><div id="preloader"><div id="loader"></div></div></main> 
        : isErr ? <h2>{isErr.response.data.msg}</h2> : !showComments ?
            review &&
            <div className="individual-card">
            <ReviewCard key={review.review_id} title={review.title} imageURL={review.review_img_url} category={review.category} author={review.owner}>
                <VoteBox currentVotes={review.votes} id={review.review_id} target="reviews"/>
            </ReviewCard>
            <article>
                {review.review_body}
            </article>
            </div> :
            <section className="comments-box">
                {comments.length > 0 ? comments.map(comment => {
                    return <Comment key={comment.comment_id} comment={comment} review_id={review.review_id} />
                })
                : <h2>No comments! Will you be the first?</h2>}
            </section>
            }
        <button className="comment-button" onClick={() => setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show Comments"}</button>
    </main>
}