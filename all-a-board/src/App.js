import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(1) 

  return (
    <div className="App">
      <Header />
      <Main currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;
