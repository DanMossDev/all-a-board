import './ReviewPage.css';
import ReviewCard from "./ReviewCard";
import VoteBox from './VoteBox';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useRenderReview } from '../../hooks/UseRenderReview';

export default function ReviewPage() {
    const [showComments, setShowComments] = useState(false)
    const {review_id} = useParams()

    const { review, comments, isLoading, isErr } = useRenderReview(review_id, showComments)

    return <main> { isLoading ? <main><div id="preloader"><div id="loader"></div></div></main>
        : isErr ? <h2>{isErr.response.data.msg}</h2> 
        : !showComments ? review && //if it isn't loading, isn't in error, and isn't showing comments then load this
            <div className="individual-card">
            <ReviewCard key={review.review_id} title={review.title} imageURL={review.review_img_url} category={review.category} author={review.owner}>
                <VoteBox currentVotes={review.votes} id={review.review_id} target="reviews"/>
            </ReviewCard>
            <article>
                {review.review_body}
            </article>
            </div> : //if it isn't loading, isn't in error, and IS showing comments then load this
            <>
            <section className="comments-box">
                {comments.length > 0 ? comments.map(comment => {
                    return <><Comment key={comment.comment_id} comment={comment} review_id={review.review_id} /><hr/></>
                })
                : <h2>No comments! Will you be the first?</h2>}
            </section>
            
            </>
            }
        <button className="comment-button" onClick={() => setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show Comments"}</button>
    </main>
}