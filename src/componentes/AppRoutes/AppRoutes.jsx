import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Rutas
import I from '../i/i';
import Welcome from '../welcome/welcome';
import RutaProtegida from '../RutaProtegida/RutaProtegida';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<I />} />
                <Route path='/x' element={<RutaProtegida> <Welcome /> </RutaProtegida>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
