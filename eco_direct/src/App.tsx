import React, { Component } from 'react';
import './App.css';
import { Header } from './Composants/Header.Composants';
import { TchatFormulaire } from './Composants/Tchat.Formulaire.Composants';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import { DeforestationActuelle } from './Pages/Deforestation/Actuel/DeforestationActuelle';





const App = () => {

  return (
    <>
      <Router>
        <div>
          <Route path="/"element={Accueil} />
          <Route path="/deforestation"element={DeforestationActuelle} />


        </div>

      </Router>
         {/* <h2>ECODIRECT TCHAT</h2>
           <h1>Tchat</h1>
           <h3>Thèmes</h3>
                <h4 className='choix'><i className="fa-solid fa-droplet"> </i>EAUX</h4>   */}
                {/* <br/><br/><br/><br/><br/><br/> */}
      {/* <TchatFormulaire/> */}
      {/* <Tchat/>
      <Tchat/> */}
      

    </>
  );
  const Header = () => {
    <ul>
      <li>
        <Link to="/">Accueil</Link>
      </li>
    </ul>
  }
}//open weach

export default App;
