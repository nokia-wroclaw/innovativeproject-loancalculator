import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Home from './pages/homepage';
import Calculator from './pages/calculator';
import HowToCalculateInstallments from './pages/howToCalculateInstallments';
import Wibor from './pages/wibor';
import CalculatedResults from './pages/calculatedResults';
import Sidebar from './components/sidebar';
import { useWiborHistory } from './fetchData';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [historyData] = useWiborHistory();

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
        <Route path="/wibor" element={<Wibor historyData={historyData} />} />
        <Route path="/wyniki-obliczen" element={<CalculatedResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
