import { useEffect } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function NavBar({children}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const initOrder = searchParams.get('order')
    const [isOpen, setIsOpen] = useState(false)
    const [order, setOrder] = useState(initOrder === 'asc')


    function handleSort(e) {
        const newParams = {sort_by: searchParams.get('sort_by'), order: searchParams.get('order')}
        if (!newParams.order) delete newParams.order
        newParams.sort_by = e.target.value
        setSearchParams(newParams)
        console.log(JSON.stringify(newParams))
    }

    return <section>
        <ul>{!isOpen && <>
                <select onChange={handleSort} value={searchParams.get('sort_by')}>
                <option value="created_at">Age</option>
                <option value="votes">Votes</option>
                <option value="title">Name</option>
                <option value="comment_count">Comments</option>
            </select>
            <button onClick={() => {
                const orderDir = order ? 'desc' : 'asc'
                const newParams = {sort_by: searchParams.get('sort_by'), order: searchParams.get('order')}
                if (!newParams.sort_by) delete newParams.sort_by
                newParams.order = orderDir
                setSearchParams(newParams)
                setOrder(!order)
            }}>{order ? '↑' : '↓'}</button>
            </>}
            {isOpen && children}
            <li onClick={() => {setIsOpen(!isOpen)}}>{isOpen ? "close" : "Pick A Category"}</li>
        </ul>
    </section>
}