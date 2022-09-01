import React from "react";
import {MenuSelection} from "../Composants/MenuSelection.Composants";
import '../css/Composants/SousMenu.css';

export const SousMenu = () =>{

    return (
        <>
            <div className={"menuSelection"}>
                <MenuSelection titre={"En direct"} lienImg={"./images/Sous-Menu/direct.png"}/>
                <MenuSelection titre={"A travers le temps"} lienImg={"./images/Sous-Menu/time.png"}/>
                <MenuSelection titre={"Solution Alternatif"} lienImg={"./images/Accueil/solution.png"}/>
            </div>
        </>
    )
}