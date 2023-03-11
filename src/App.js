import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Accueil';
import Cvjulienlemal from './pages/Cvjulienlemal';
import Motivation from './pages/Motivation';
import Accueil from './pages/Accueil';
import Jpo from './pages/Jpo';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path='/jpo' element={<Jpo />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien du site en question. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App; 