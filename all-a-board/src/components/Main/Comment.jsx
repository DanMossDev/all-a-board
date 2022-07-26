import './Comment.css'
import VoteBox from "./VoteBox"

export default function Comment({comment, review_id}) {
    const {comment_id, body, author, votes, created_at} = comment 

    return <div className="comment">
        <div>
            <h2>{author}</h2>
            <p>{body}</p>
        </div>
        
        <VoteBox currentVotes={votes} review_id={review_id} id={comment_id} target="comments"/>
    </div>
}