import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Calculator from './pages/calculator';
import HowToCalculateInstallments from './pages/howToCalculateInstallments';
import UsefulTerms from './pages/usefulTerms';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/kalkulator"  element={<Calculator/>} />
        <Route path="/jak-obliczamy-rate"  element={<HowToCalculateInstallments/>} />
        <Route path="/przydatne-pojecia"  element={<UsefulTerms/>} />
      </Routes>
    </Router>
  );
}

export default App;
