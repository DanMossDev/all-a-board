import { deleteComment } from '../../axios'
import './Comment.css'
import VoteBox from "./VoteBox"

export default function Comment({comment, review_id, setIsSendingComment}) {
    const {comment_id, body, author, votes, created_at} = comment 

    return <div className="comment">
        <VoteBox currentVotes={votes} review_id={review_id} id={comment_id} target="comments"/>
        <div>
            <h2>{author}</h2>
            <p>{body}</p>
        </div>
        
        <button onClick={() => {
            setIsSendingComment(true)
            deleteComment(comment_id)
            .then(() => setIsSendingComment(false))
        }} className="remove-comment">X</button>
    </div>
}