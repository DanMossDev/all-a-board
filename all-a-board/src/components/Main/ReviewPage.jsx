import './ReviewPage.css'
import ReviewCard from "./ReviewCard";

export default function ReviewPage({selectedReview}) {
    return <main>
        <div className="individual-card">
        <ReviewCard key={selectedReview.review_id} title={selectedReview.title} imageURL={selectedReview.review_img_url} category={selectedReview.category} author={selectedReview.owner}/>
        <article>
            {selectedReview.review_body}
        </article>
        </div>
    </main>
}