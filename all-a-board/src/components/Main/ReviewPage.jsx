import './ReviewPage.css';
import ReviewCard from "./ReviewCard";
import VoteBox from './VoteBox';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { useState, useContext, Fragment } from 'react';
import { UserContext } from '../../UserContext';
import { useRenderReview } from '../../hooks/UseRenderReview';
import { postComment } from '../../axios';

export default function ReviewPage() {
    const {user} = useContext(UserContext)
    const {review_id} = useParams()
    const [showComments, setShowComments] = useState(false)
    
    const [newComment, setNewComment] = useState('')
    const [isSendingComment, setIsSendingComment] = useState(false)
    const [commentErr, setCommentErr] = useState('')
    const { review, comments, isLoading, isErr } = useRenderReview(review_id, showComments, isSendingComment)


    function handleNewComment(e) {
        e.preventDefault()
        setCommentErr('')
        if (!user) return setCommentErr("Please log in before commenting")
        if (newComment.length === 0) return setCommentErr("Please enter a comment")
        setIsSendingComment(true)
        postComment(newComment, review_id, user.username)
        .then(() => {
            setNewComment('')
            setIsSendingComment(false)
        })
        .catch(err => {
            setIsSendingComment(false)
            setCommentErr("Sorry, something went wrong. Try again!")
        })
    }

    return <><main> { isLoading ? <main><div id="preloader"><div id="loader"></div></div></main>
        : isErr ? <h2>{isErr.response.data.msg}</h2> 
        : !showComments ? review && //if it isn't loading, isn't in error, and isn't showing comments then load this
            <div className="individual-card">
            <ReviewCard key={review.review_id} title={review.title} imageURL={review.review_img_url} category={review.category} author={review.owner}>
                <VoteBox currentVotes={review.votes} id={review.review_id} target="reviews"/>
            </ReviewCard>
            <article>
                {review.review_body}
            </article>
            </div> 
        : <>
            <section className="comments-box">
                {comments.length > 0 ? comments.map(comment => {
                    return <Fragment key={comment.comment_id}><Comment comment={comment} review_id={review.review_id} /><hr/></Fragment>
                })
                : <h2>No comments! Will you be the first?</h2>}
            </section>
            <form className="comment-form" onSubmit={handleNewComment}>
                <label htmlFor="comment-here">{commentErr ? commentErr : 'Enter Your Comment'}</label><br/>
                <textarea className={isSendingComment ? "awaiting-response-input" : ''} value={newComment} onChange={e => setNewComment(e.target.value)} type="text"></textarea><br/>
                <button className={'comment-button' + (isSendingComment ? "awaiting-response-button" : '')} type="submit">Comment</button>
            </form>
          </>
        }
    </main>
    <footer><button className="comment-button" onClick={() => setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show Comments"}</button></footer>
    </>
}