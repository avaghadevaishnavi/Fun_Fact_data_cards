import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Funfact from './component/Funfact';
import Space from './component/Space';
import Oceans from './component/Oceans';
import Animals from './component/Animals';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" className="hover:underline">Fun Facts</Link>
          <Link to="/space" className="hover:underline">Space</Link>
          <Link to="/oceans" className="hover:underline">Oceans</Link>
          <Link to="/animals" className="hover:underline">Animals</Link>
        </nav>

        {/* Route Views */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Funfact />} />
            <Route path="/space" element={<Space />} />
            <Route path="/oceans" element={<Oceans />} />
            <Route path="/animals" element={<Animals />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
