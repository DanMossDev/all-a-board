import { useNavigate } from 'react-router-dom'
import './ReviewCard.css'


export default function ReviewCard({title, imageURL, category, author, isSelector, review, children}) {
    const navigate = useNavigate()
    return <div className="review-card" onClick={() => isSelector && navigate(`/review/${review.review_id}`, {replace: true})}>
        <img src={imageURL}/>
        {children}
        <div className="details">
        <h2>{title}</h2>
        <h3>{category}</h3>
        <h3>{author}</h3>
        </div>
    </div>
}