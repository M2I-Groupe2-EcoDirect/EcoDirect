import React from "react";
import {MenuSelection} from "../Composants/MenuSelection.Composants";
import '../css/Composants/Accueil.css';

export const Acceuil = () =>{

    return (
        <>
            <div className={"menuSelection"}>
                <MenuSelection titre={"Solution 1"} lienImg={"./images/Accueil/deforestation.png"}/>
                <MenuSelection titre={"Solution 2"} lienImg={"./images/Accueil/pollution-air.png"}/>
                <MenuSelection titre={"Solution 3"} lienImg={"./images/Accueil/pollution-eau.png"}/>
            </div>
        </>
    )
}