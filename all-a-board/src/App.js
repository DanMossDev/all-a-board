import './App.css'
import { useState, useEffect } from 'react'
import { getCategories } from './axios'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ReviewPage from './components/Main/ReviewPage'
import Footer from './components/Footer/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState(1) 
  const [selectedReview, setSelectedReview] = useState()

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/reviews' replace/>}/>
        <Route path='/reviews' element={<Main currentPage={currentPage} selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>}/>
        <Route path='/reviews/:category' element={<Main currentPage={currentPage} selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>}/>
        <Route path='/review/:review_id' element={<ReviewPage selectedReview={selectedReview}/>}/>
        
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
