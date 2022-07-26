import './Main.css'
import {useState, useEffect} from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getCategories, getReviews } from '../../axios'
import ReviewCard from './ReviewCard'
import NavBar from './NavBar'

export default function Main({currentPage}) {
    const [reviews, setReviews] = useState([])
    const [sortBy, setSortBy] = useState()
    const [order, setOrder] = useState()
    const [categories, setCategories] = useState([])

    const {category} = useParams()

    useEffect(() => {
        getCategories().then(({data}) => {
            setCategories(data)
        })
    }, [])
  
    useEffect(() => {
        getReviews(currentPage, category, sortBy, order).then(({data}) => setReviews(data))
    }, [currentPage, category, sortBy, order])

    return <main>
        <nav>
            <NavBar>
                <li value=''><Link to={`../reviews`} replace>all</Link></li>
                {categories.map((category) => {
                    return <li key={`${category.slug}-1`} value={category.slug}><Link to={`../reviews/${category.slug}`} replace>{category.slug}</Link></li>
                })}
            </NavBar>
        </nav>
        
        <section>
            {reviews.map(review => {
                return <ReviewCard review={review} key={review.review_id} title={review.title} imageURL={review.review_img_url} category={review.category} isSelector={true} author={review.owner}/>
            })}
        </section>  
    </main>
}