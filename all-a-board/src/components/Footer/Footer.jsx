import { useState } from 'react'
import './Footer.css'

export default function Footer({currentPage, setCurrentPage, numOfPages}) {
    return <footer>
        <button className="page-arrow" id="back" onClick={() => setCurrentPage(curPage => curPage > 1 ? curPage -1 : curPage)}>←</button>
        <h3>{currentPage + '/' + numOfPages}</h3>
        <button className="page-arrow" id="forward" onClick={() => setCurrentPage(curPage => curPage < numOfPages ? curPage + 1 : curPage)}>→</button>
    </footer>
} //come back to this and do conditional rendering to make it clear there is no ability to go back/forward