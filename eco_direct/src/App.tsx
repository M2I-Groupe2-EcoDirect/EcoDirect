import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import { DeforestationActuelle } from './Pages/Deforestation/DeforestationActuelle';
import { DeforestationATraversTemps } from './Pages/Deforestation/DeforestationATraversTemps';
import { DeforestationSousMenu } from './Pages/Deforestation/DeforestationSousMenu';
import { Forum } from './Pages/Forum/Forum';
import { PollutionAirActuelle } from './Pages/PollutionAir/PollutionAirActuelle';
import { PollutionAirSousMenu } from './Pages/PollutionAir/PollutionAirSousMenu';
import { PollutionAirTraversTemps } from './Pages/PollutionAir/PollutionAirTraversTemps';
import { PollutionEauActuelle } from './Pages/PollutionEau/PollutionEauActuelle';
import { PollutionEauSousMenu } from './Pages/PollutionEau/PollutionEauSousMenu';
import { AcceuilTemp } from './Pages/AcceuilTemp';
import { FormulaireInscription } from './Layouts/FormulaireConnexion.Layouts';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<AcceuilTemp />} />
          <Route path="/inscription" element={<FormulaireInscription />} />
          <Route path="/authentification" element={<FormulaireInscription />} />

          <Route path="/deforestation" element={<DeforestationSousMenu />} />
          <Route path="/actuel" element={<DeforestationActuelle />} />
          <Route path="/temps" element={<DeforestationATraversTemps />} />

          <Route path="/air" element={<PollutionAirSousMenu />} />
          <Route path="/actuel" element={<PollutionAirActuelle />} />
          <Route path="/temps" element={<PollutionAirTraversTemps />} />

          <Route path="/eau" element={<PollutionEauSousMenu />} />
          <Route path="/actuel" element={<PollutionEauActuelle />} />
          <Route path="/temps" element={<PollutionAirActuelle />} />

          <Route path="/forum" element={<Forum />} />
        </Routes>


      </Router>
    </>
  );
}

export default App;
