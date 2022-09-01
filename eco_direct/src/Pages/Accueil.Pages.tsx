import React from "react";
import {MenuSelection} from "../Composants/MenuSelection.Composants";
import '../css/Composants/Accueil.css';

export const Acceuil = () =>{

    return (
        <>
            <div className={"menuSelection"}>
                <MenuSelection titre={"Deforestation"} lienImg={"./images/Accueil/deforestation.png"}/>
                <MenuSelection titre={"Pollution de l'eau"} lienImg={"./images/Accueil/pollution-air.png"}/>
                <MenuSelection titre={"pollution de l'aire"} lienImg={"./images/Accueil/pollution-eau.png"}/>
            </div>
        </>
    )
}