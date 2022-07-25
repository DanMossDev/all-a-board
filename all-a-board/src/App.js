import './App.css'
import { useState, useEffect } from 'react'
import { getCategories } from './axios'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState(1) 

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Main currentPage={currentPage}/>}/>
        <Route path={'/:category'} element={<Main currentPage={currentPage}/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
