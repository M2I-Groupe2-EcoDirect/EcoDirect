import React from 'react';
import '../css/Composants/Menuselection.css';
import logose from '../images/Sous-Menu/logose.png';


export const MenuSelection = ({ }) => {


    return (
        <>
            <nav className="navbar">
                <div className="navbar__logo">
                    <div className="logo">
                        <img src={logose} height="90px" />
                    </div>
                    <div className="shema">
                        <li className="navbar__item">
                            <a href="/" className="navbar__link"><h2>EcoDirect</h2></a>
                        </li>
                        <div className="navbar__shema">
                            <li className="navbar__items">
                                <i className="fab fa-facebook fa-2x facebook"></i>
                            </li>
                            <li className="navbar__items">
                                <i className="fab fa-twitter fa-2x twitter"></i>
                            </li>
                            <li className="navbar__items">
                                <i className="fab fa-instagram fa-2x instagram"></i>
                            </li>
                        </div>

                    </div>
                </div>
                <ul className="navbar__links">
                    <li className="navbar__ditem">
                        <a href="/" className="navbar__link">      S'inscrire |</a>
                        <a href="/" className="navbar__link">Se connecter       </a>
                    </li>
                    <li className="navbar__ditem">
                        <a href="/" className="navbar__link">Contactez-nous</a>
                    </li>
                    <li className="navbar__ditem">
                        <a href="/" className="navbar__link">About us</a>
                    </li>

                </ul>


            </nav>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quae ab odio autem unde vel sit dolor,
                veritatis eligendi a qui commodi beatae maiores! Quas delectus sapiente provident ratione corrupti?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus dolorem ducimus, debitis
                nostrum ut incidunt cum et quaerat voluptatum! Libero unde adipisci nobis explicabo quam numquam corrupti repudiandae asperiores.</p>
        </>



    )
}