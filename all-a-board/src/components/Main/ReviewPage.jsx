import './ReviewPage.css';
import ReviewCard from "./ReviewCard";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReview } from '../../axios';

export default function ReviewPage() {
    const [review, setReview] = useState()
    const {review_id} = useParams()

    useEffect(() => {
        getReview(review_id)
        .then(({data}) => setReview(data))
        .catch(err => console.log(err))
    })


    return <main>
        { review &&
        <div className="individual-card">
        <ReviewCard key={review.review_id} title={review.title} imageURL={review.review_img_url} category={review.category} author={review.owner}/>
        <article>
            {review.review_body}
        </article>
        </div>
        }
    </main>
}