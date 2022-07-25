import ReviewCard from "./ReviewCard";

export default function ReviewPage({selectedReview}) {
    return <>
    <ReviewCard key={selectedReview.review_id} title={selectedReview.title} imageURL={selectedReview.review_img_url} category={selectedReview.category} author={selectedReview.owner}/>
    </>
}