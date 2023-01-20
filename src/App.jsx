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
import { ThemeProvider } from 'styled-components';

function App() {

  const [state, setState] = useState({
    theme: themes.light
  });


  let toggleT = () => {
    setState({ theme: state.theme === themes.light ? themes.dark : themes.light })
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContext.Provider value={state}>
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <Navbar toggleTheme={toggleT} />
                <Container>
                  <Routes>
                    <Route path='/' element={<Results />} />
                    <Route path='/add' element={<Add />} />
                  </Routes>
                </Container>
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
