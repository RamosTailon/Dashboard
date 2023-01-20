import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Results from './pages/Results'
import Add from './pages/Add'

//COMPONENTS
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//STYLES
import * as themes from './styles/themes'
import ThemeContext from './styles/themes/context';

function App() {

  let state = {
    theme: themes.light
  };

  let toggleT = () => {

  }

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContext.Provider value={state}>
          <Navbar toggleTheme={toggleT} />
          <Container>
            <Routes>
              <Route path='/results' element={<Results />} />
              <Route path='/add' element={<Add />} />
            </Routes>
          </Container>
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
