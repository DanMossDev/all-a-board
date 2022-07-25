import './ReviewCard.css'

export default function ReviewCard({title, imageURL, category, author}) {
    return <div className="review-card">
        <img src={imageURL}/>
        <div>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <h3>{author}</h3>
        </div>
    </div>
}