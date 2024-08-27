import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutUsPage from './components/AboutUsPage';
import ResourcesPage from './components/ResourcesPage';
import NewsPage from './components/NewsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Me</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
      </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
