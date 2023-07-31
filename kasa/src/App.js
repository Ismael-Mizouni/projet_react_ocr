import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import LogementPageRoute from './pages/Logement/LogementPageRoute';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Footer from './components/Footer';

function App() {
  return (
     <Router>
        <Header />
        <Routes>
           <Route path="/about" element={<AboutPage />} />
           <Route path="/" element={<HomePage />} />
           <Route path="/logement/:id" element={<LogementPageRoute />} />
           <Route path="*" element={<NotFoundPage />} />
           <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
        <Footer />
     </Router>
  );
}

export default App;
