import './App.css'
import { useState, useEffect } from 'react'
import { getCategories } from './axios'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState(1) 

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Main currentPage={currentPage}/>}/>
        <Route path={'/strategy'} element={<Main currentPage={currentPage} category='strategy'/>}/>
        <Route path={'/hidden-roles'} element={<Main currentPage={currentPage} category='hidden-roles'/>}/>
        <Route path={'/dexterity'} element={<Main currentPage={currentPage} category='dexterity'/>}/>
        <Route path={'/push-your-luck'} element={<Main currentPage={currentPage} category='push-your-luck'/>}/>
        <Route path={'/roll-and-write'} element={<Main currentPage={currentPage} category='roll-and-write'/>}/>
        <Route path={'/deck-building'} element={<Main currentPage={currentPage} category='deck-building'/>}/>
        <Route path={'/engine-building'} element={<Main currentPage={currentPage} category='engine-building'/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
