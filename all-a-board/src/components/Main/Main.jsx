import './Main.css'
import {useState, useEffect} from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getCategories, getReviews } from '../../axios'
import ReviewCard from './ReviewCard'
import ReviewPage from './ReviewPage'

export default function Main({currentPage}) {
    const [reviews, setReviews] = useState([])
    const [selectedReview, setSelectedReview] = useState()
    const [sortBy, setSortBy] = useState()
    const [order, setOrder] = useState()
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    const {category} = useParams()

    useEffect(() => {
        getCategories().then(({data}) => setCategories(data))
    }, [])
  
    useEffect(() => {
        getReviews(currentPage, category, sortBy, order).then(({data}) => setReviews(data))
    }, [currentPage, category, sortBy, order])

    return <main>
        {!selectedReview ? 
        <>
        <nav>
            <ul>
                {categories.map((category) => {
                    return <li key={category.slug} value={category.slug}><Link to={`${category.slug}`} replace>{category.slug}</Link></li>
                })}
            </ul>
        </nav>
        
        <section>
            {reviews.map(review => {
                return <ReviewCard review={review} setSelectedReview={setSelectedReview} key={review.review_id} title={review.title} imageURL={review.review_img_url} category={review.category} author={review.owner}/>
            })}
        </section>
        </>
        : <ReviewPage selectedReview={selectedReview}/>
        }
        
    </main>
}