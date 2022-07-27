import './Main.css'
import {useState, useEffect} from 'react'
import { useParams, useSearchParams, Link, Navigate } from 'react-router-dom'
import { getCategories, getReviews } from '../../axios'
import ReviewCard from './ReviewCard'
import NavBar from './NavBar'

export default function Main({currentPage}) {
    const [params] = useSearchParams()
    const order = params.get('order')
    const sort_by = params.get('sort_by')

    const [reviews, setReviews] = useState([])
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()


    useEffect(() => {
        getCategories().then(({data}) => {
            setCategories(data)
            setIsLoading(false)
        })
    }, [])
  
    useEffect(() => {
        setIsLoading(true)
        getReviews(currentPage, category, sort_by, order).then(({data}) => {
            setReviews(data)
            setIsLoading(false)
        })
    }, [currentPage, category, sort_by, order])

    return<main>
        <nav>
            <NavBar>
                <li value=''><Link onClick={() => setIsLoading(true)} to={`../reviews`} replace>all</Link></li>
                {categories.map((category) => {
                    return <li key={`${category.slug}-1`} value={category.slug}><Link onClick={() => setIsLoading(true)} to={`../reviews/${category.slug}`} replace>{category.slug}</Link></li>
                })}
            </NavBar>
        </nav>
        {!isLoading ? 
        <section className="reviews-section">
            {reviews.map(review => {
                return <ReviewCard review={review} key={review.review_id} title={review.title} imageURL={review.review_img_url} category={review.category} isSelector={true} author={review.owner}/>
            })}
        </section>
        : <div id="preloader"><div id="loader"></div></div>
        }
    </main>
}