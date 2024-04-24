import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'; // Make sure the path matches where your file is located

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
