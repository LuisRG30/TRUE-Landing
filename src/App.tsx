import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Blog from './components/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
