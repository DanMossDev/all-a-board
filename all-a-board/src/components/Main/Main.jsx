import './Main.css'
import {useState, useEffect} from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { getCategories, getReviews, getNumOfPages } from '../../axios'
import ReviewCard from './ReviewCard'
import NavBar from './NavBar'

export default function Main({currentPage, setNumOfPages, setCurrentPage}) {
    const [params] = useSearchParams()

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
        setCurrentPage(1)
        getNumOfPages(category).then(numPages => setNumOfPages(numPages))   
    }, [category])

    useEffect(() => {
        const order = params.get('order')
        const sort_by = params.get('sort_by')
        setIsLoading(true)
        getReviews(currentPage, category, sort_by, order).then(({data}) => {
            setReviews(data)
            setIsLoading(false)
        })
    }, [currentPage, category, params])

    function handleCategoryChange(e) {
        e.target.href.split('/')[4] !== category && setIsLoading(true)
    }


    return<main>
        <nav>
            <NavBar>
                <li value=''><Link onClick={handleCategoryChange} to={`../reviews`} replace>all</Link></li>
                {categories.map((currCategory) => {
                    return <li key={`${currCategory.slug}-1`} value={currCategory.slug}><Link onClick={handleCategoryChange} to={`../reviews/${currCategory.slug}`} replace>{currCategory.slug}</Link></li>
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