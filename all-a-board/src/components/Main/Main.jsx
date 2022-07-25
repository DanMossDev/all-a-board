import {useState, useEffect} from 'react'
import { getCategories, getReviews } from '../../axios'
import ReviewCard from './ReviewCard'

export default function Main({currentPage}) {
    const [reviews, setReviews] = useState([])
    const [selectedReview, setSelectedReview] = useState()
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState()
    const [sortBy, setSortBy] = useState()
    const [order, setOrder] = useState()

    useEffect(() => {
        getCategories().then(({data}) => setCategories(data))
    }, [])

    useEffect(() => {
        getReviews(currentPage, category, sortBy, order).then(({data}) => setReviews(data))
    }, [currentPage, category, sortBy, order])

    return <main>
        <label htmlFor="category-select">Category: </label>
        <select onChange={e => setCategory(e.target.value)} name="category" id="category-select">
        <option value="">Show All</option>
        {categories.map((category) => {
            return <option key={category.slug} value={category.slug}>{category.slug}</option>
        })}
        </select>
        <section>
            {reviews.map(review => {
                return <ReviewCard title={review.title} imageURL={review.review_img_url} category={review.category} author={review.owner}/>
            })}
        </section>
        
    </main>
}