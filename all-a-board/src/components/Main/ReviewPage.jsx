import './ReviewPage.css'
import ReviewCard from "./ReviewCard";
import VoteBox from './VoteBox';

export default function ReviewPage({selectedReview}) {
    return <div className="individual-card">
    <ReviewCard key={selectedReview.review_id} title={selectedReview.title} imageURL={selectedReview.review_img_url} category={selectedReview.category} author={selectedReview.owner}>
        <VoteBox currentVotes={selectedReview.votes} review_id={selectedReview.review_id}/>
    </ReviewCard>
    <article>
        {selectedReview.review_body}
    </article>
    </div>
}