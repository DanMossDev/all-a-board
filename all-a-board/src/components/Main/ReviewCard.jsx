import './ReviewCard.css'

export default function ReviewCard({title, imageURL, category, author, setSelectedReview, review}) {
    return <div className="review-card" onClick={() => {setSelectedReview && setSelectedReview(review)}}>
        <img src={imageURL}/>
        <div>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <h3>{author}</h3>
        </div>
    </div>
}