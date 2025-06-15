import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './MainPage.jsx';
import VisitsPage from './VisitsPage.js';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/visits" element={<VisitsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;