import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumePage from './pages/ResumePage';
import CursorTrail from './components/CursorTrail';
import './App.css';

function App() {
  // Theme: dark by default
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [theme]);

  // Startup and route-change loading overlay
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, [location]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="App">
      {/* Loading overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="loader">
            <div className="spinner"></div>
            <div className="loading-text">Loading your wave...</div>
          </div>
        </div>
      )}
      {/* Custom Cursor */}
      <CursorTrail />

      {/* Navigation Bar - Sticky at top */}
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      
      {/* Main Content Sections */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>My hobbie is to build products that actually matters</p>
          <p><small>© 2024 Atharv Paharia. Ready to catch the next digital wave.</small></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
