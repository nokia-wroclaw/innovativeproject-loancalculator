import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Home from './pages/index';
import Calculator from './pages/calculator';
import HowToCalculateInstallments from './pages/howToCalculateInstallments';
import UsefulTerms from './pages/usefulTerms/usefulTerms';
import CalculatedResults from './pages/calculatedResults';
import Sidebar from './components/sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/kalkulator" element={<Calculator />} />
        <Route
          path="/jak-obliczamy-rate"
          element={<HowToCalculateInstallments />}
        />
        <Route path="/przydatne-pojecia" element={<UsefulTerms />} />
        <Route path="/wyniki-obliczen" element={<CalculatedResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
