import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Plans from './pages/Plans';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import Status from './pages/Status';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/planes" element={<Layout><Plans /></Layout>} />
          <Route path="/sobre-nosotros" element={<Layout><AboutUs /></Layout>} />
          <Route path="/partners" element={<Layout><Partners /></Layout>} />
          <Route path="/status" element={<Layout><Status /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
