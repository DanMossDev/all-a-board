import './App.css'
import { useState, useEffect } from 'react'
import { getCategories } from './axios'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ReviewPage from './components/Main/ReviewPage'
import Footer from './components/Footer/Footer'
import Login from './components/Main/Login'
import { UserContext } from './UserContext'

function App() {
  const [currentPage, setCurrentPage] = useState(1) 
  const [numOfPages, setNumOfPages] = useState(1)
  const [selectedReview, setSelectedReview] = useState()
  const [user, setUser] = useState()

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/' element={user ? <Navigate to='/reviews' replace/> : <Navigate to='/login' replace/>}/>
            <Route path='/reviews' element={<><Main currentPage={currentPage} setCurrentPage={setCurrentPage} selectedReview={selectedReview} setSelectedReview={setSelectedReview} setNumOfPages={setNumOfPages}/><Footer currentPage={currentPage} numOfPages={numOfPages} setCurrentPage={setCurrentPage}/></>}/>
            <Route path='/reviews/:category' element={<><Main currentPage={currentPage} setCurrentPage={setCurrentPage} selectedReview={selectedReview} setSelectedReview={setSelectedReview} setNumOfPages={setNumOfPages}/><Footer currentPage={currentPage} numOfPages={numOfPages} setCurrentPage={setCurrentPage}/></>}/>
            <Route path='/review/:review_id' element={<ReviewPage selectedReview={selectedReview}/>}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
