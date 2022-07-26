import { useState } from "react"

export default function NavBar({children}) {
    const [isOpen, setIsOpen] = useState(false)

    return <section>
        <ul><li onClick={() => {setIsOpen(!isOpen)}}>Pick A Category</li>
            {isOpen && children}
        </ul>
    </section>
}