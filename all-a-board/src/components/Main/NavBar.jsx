import { useState } from "react"

export default function NavBar({children, setSortBy, order, setOrder}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleSort() {}

    return <section>
        <ul>{!isOpen && <><select onChange={handleSort}>
            <option value="created_at">Age</option>
            <option value="votes">Popularity</option>
            <option value="title">Name</option>
            </select>
            <button onClick={() => {setOrder(!order)}}>{order ? '↑' : '↓'}</button>
            </>}
            <li onClick={() => {setIsOpen(!isOpen)}}>{isOpen ? "close" : "Pick A Category"}</li>
            {isOpen && children}
        </ul>
    </section>
}