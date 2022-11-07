import React from "react";
import Logo from '../images/LogoEcoDirect.png'
import Facebook from '../images/Facebook.png'
import Instagram from '../images/Instagram.png'
import Twitter from '../images/Twitter.png'
import '../App.css'
import '../css/BarreDeNavigation.css'
import { BrowserRouter as Router } from "react-router-dom"

//Barre de Navigation
export const BarreDeNavigation = () => {
    return (
        <Router>
            <div className="menu">
                <div className="menuLogo">

                    {/* Logo haut de page */}
                    <a href="http://localhost:3000/">
                        <img src={Logo} className="logo" alt="Logo" />
                    </a>

                </div>

                <div className="menuEcoDirect">

                    {/* Lien EcoDirect */}
                    <a href="http://localhost:3000/">
                        Eco Direct
                    </a>

                    <div className="menuReseau">

                        {/* Icône Facebook */}
                        <a href="facebook">
                            <img src={Facebook} className="icone" alt="Facebook" />
                        </a>

                        {/* Icône Twitter */}
                        <a href="twitter">
                            <img src={Twitter} className="icone" alt="Twitter" />
                        </a>

                        {/* Icône Instagram */}
                        <a href="Instagram">
                            <img src={Instagram} className="icone" alt="Instagram" />
                        </a>
                    </div>
                </div>

                <div className="menuAutre">

                    {/* Lien About Us */}
                    <a href="AboutUs">
                        About Us
                    </a>

                    {/* Lien Contactez-Nous */}
                    <a href="ContactezNous">
                        Contactez Nous
                    </a>

                    {/* Lien Inscription et Connexion */}
                    <a href="Inscription-Connexion">
                        S'inscrire | Se connecter
                    </a>
                </div>
            </div>
        </Router>
    )
}