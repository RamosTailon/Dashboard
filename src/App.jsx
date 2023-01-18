import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Results from './pages/Results'
import Add from './pages/Add'

//COMPONENTS
import Container from './components/Container';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/results' element={<Results />} />
            <Route path='/add' element={<Add />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
