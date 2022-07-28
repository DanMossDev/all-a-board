import { useContext } from 'react'
import { useState } from 'react'
import { deleteComment } from '../../axios'
import {UserContext} from '../../UserContext'
import './Comment.css'
import VoteBox from "./VoteBox"

export default function Comment({comment, review_id, setIsSendingComment}) {
    const {user} = useContext(UserContext)
    const [isDeleting, setIsDeleting] = useState(false)
    const [cannotDelete, setCannotDelete] = useState('')
    const {comment_id, body, author, votes, created_at} = comment 
    
    return <div className="comment">
        <VoteBox currentVotes={votes} review_id={review_id} id={comment_id} target="comments"/>
        <div>
            <p className="cannot-delete"><em>{cannotDelete}</em></p>
            <h2>{author}</h2>
            <p>{isDeleting ? "comment being removed..." : body}</p>
        </div>
        
        <button onClick={() => {
            if (user.username === author) {
                setIsDeleting(true)
                setIsSendingComment(true)
                deleteComment(comment_id)
                .then(() => setIsSendingComment(false))
            } else {
                setCannotDelete('You can only delete your own comments.')
                setTimeout(() => {setCannotDelete('')}, 2000)
            }
        }} className={isDeleting ? "remove-comment hidden" : "remove-comment"}>X</button>
    </div>
}