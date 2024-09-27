//App.js
import React from 'react'; // Ajoutez cette ligne au début du fichier
import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo2.png";
import { Routes, Route, useLocation } from 'react-router-dom';
import Menu from './Menu';
import Credits from './Credits';
import Methode from './Methode';
import Pourquoi from './Pourquoi';
import PriseContinue from './PriseContinue';
import Liens from './Liens';
import Informations from './Informations';
import Calculatrice from './Calculatrice';

// Composant principal de l'application
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="container">
        <img className="logo2" src={logo} alt="logo" />
        <h1 className="titre">Score Contraceptif</h1> 
        <h2 className="citation-sous-titre">
        Quelle est la probabilité de concevoir un enfant
        malgré une utilisation correcte de sa contraception ?
        </h2>
        <Routes>
          <Route path="/" element={<Calculatrice />} />
          <Route path="/pourquoi" element={<Pourquoi />} />
          <Route path="/methode" element={<Methode />} />
          <Route path="/prise-continue" element={<PriseContinue />} />
          <Route path="/informations" element={<Informations />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/liens" element={<Liens />} />
        </Routes>
        <Menu />

      </div>
    </div>
  );
}

export default App;
