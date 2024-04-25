import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'; // Make sure the path matches where your file is located
import FAQ from './Pages/FAQ';
import Taxcalculator from './TaxCalculator/Taxcalculator';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path= '/taxcalc' element = {<Taxcalculator/>} />
            </Routes>
        </Router>
    );
}

export default App;
