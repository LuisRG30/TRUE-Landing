import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Blog from './components/Blog';
import Us from './components/Us';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/us" element={<Us />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
