import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {smoothScroll} from './utils/smoothScroll';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
