import './ReviewPage.css';
import ReviewCard from "./ReviewCard";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReview } from '../../axios';

export default function ReviewPage() {
    const [review, setReview] = useState()
    const [isErr, setIsErr] = useState(false)
    const {review_id} = useParams()

    useEffect(() => {
        getReview(review_id)
        .then(({data}) => setReview(data))
        .catch(err => setIsErr(err))
    }, [])


    return <main> { isErr ? <h2>{isErr.response.data.msg}</h2> :
        review &&
        <div className="individual-card">
        <ReviewCard key={review.review_id} title={review.title} imageURL={review.review_img_url} category={review.category} author={review.owner}/>
        <article>
            {review.review_body}
        </article>
        </div>
        }
    </main>
}