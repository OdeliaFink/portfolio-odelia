import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import { theme } from '../src/styles/theme';
export const ThemeContext = createContext();

const App = () => {
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
