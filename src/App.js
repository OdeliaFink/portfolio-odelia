import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import { theme } from '../src/styles/theme';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills/Skills';

export const ThemeContext = createContext();

const App = () => {
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <div id="contact">
            <Contact />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div>
            <Skills />
          </div>
          <ContactForm />
        </Router>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
