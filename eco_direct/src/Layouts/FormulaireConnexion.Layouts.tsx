import React from "react";
import '../css/Layouts/FormulaireInscription.css';

export const FormulaireInscription = () =>{

    return (
        <>
            <form className={"fomulaire"}>
                <label htmlFor={"email"}>Adresse mail:</label>
                <input type="email" id="email" name="email"/>
                <label htmlFor={"motsDePasse"}>Nom d'utilisateur</label>
                <input type="text" id={"motsDePasse"} name={"motsDePasse"} placeholder={"Ex: Jean"}/>
            </form>
        </>
)
}