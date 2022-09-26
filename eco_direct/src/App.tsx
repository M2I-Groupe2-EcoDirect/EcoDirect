import React from 'react';
import './App.css';
import { Header } from './Composants/Header.Composants';
import { Tchat } from './Composants/Tchat.Formulaire.Composants';




const App = () => {

  return (
    <>
     
           <h2>ECODIRECT TCHAT</h2>
           <h1>Tchat</h1>
           <h3>Thèmes</h3>
                <h4 className='choix'><i className="fa-solid fa-droplet"> </i>EAUX</h4>  
                {/* <br/><br/><br/><br/><br/><br/> */}
      <Tchat/>
      <Tchat/>
      <Tchat/>
      {/* <Tchat/>
      <Tchat/> */}
    </>
  );
}//open weach

export default App;
