import React from "react";
import {MenuSelection} from "../Composants/MenuSelection.Composants";
import '../css/Composants/Accueil.css';
import deforestation from "../Images/Accueil/deforestation.png"
import aire from "../Images/Accueil/pollution-air.png"
import eau from "../Images/Accueil/pollution-eau.png"


export const Acceuil = () =>{

    return (
        <>
            <div className={"menuSelection"}>
                <MenuSelection titre={"Deforestation"} lienImg={deforestation}/>
                <MenuSelection titre={"Pollution de l'eau"} lienImg={aire}/>
                <MenuSelection titre={"pollution de l'aire"} lienImg={eau}/>
            </div>
        </>
    )
}