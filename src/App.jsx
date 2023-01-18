import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Results from './pages/Results'
import Add from './pages/Add'

//COMPONENTS
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/results' element={<Results />} />
            <Route path='/add' element={<Add />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
