import {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getCategories, getReviews } from '../../axios'
import ReviewCard from './ReviewCard'

export default function Main({currentPage, category}) {
    const [reviews, setReviews] = useState([])
    const [selectedReview, setSelectedReview] = useState()
    const [sortBy, setSortBy] = useState()
    const [order, setOrder] = useState()
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        getCategories().then(({data}) => setCategories(data))
    }, [])
  
    useEffect(() => {
        getReviews(currentPage, category, sortBy, order).then(({data}) => setReviews(data))
    }, [currentPage, category, sortBy, order])

    function handleCategory(e) {
        const category = e.target.value
        navigate(`../${e.target.value}`, {replace: true})
    }

    return <main>
        <label htmlFor="category-select">Category: </label>
        <select onChange={handleCategory} name="category" id="category-select">
        <option value="">Show All</option>
        {categories.map((category) => {
            return <option key={category.slug} value={category.slug}>{category.slug}</option>
        })}
        </select>
        <section>
            {reviews.map(review => {
                return <ReviewCard key={review.review_id} title={review.title} imageURL={review.review_img_url} category={review.category} author={review.owner}/>
            })}
        </section>
        
    </main>
}