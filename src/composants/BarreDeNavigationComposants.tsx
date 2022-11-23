import React from "react";
import { Link } from "react-router-dom";
import '../css/BarreDeNavigation.css'

import Logo from '../images/LogoEcoDirect.png'
import Facebook from '../images/Facebook.png'
import Instagram from '../images/Instagram.png'
import Twitter from '../images/Twitter.png'


function BarreDeNavigation(props: any) {

    console.log(props);

    return (
        <section className='menu'>
            <div className="navbar">
                <div className='logo'>
                    <Link to="/" className="lien">
                        <img src={Logo} className="logo" alt="Logo" />
                    </Link>
                </div>
                <div className='reseauSociaux'>
                    <Link to="/" className="lien">
                        <div className="ecoDirect">
                            Eco Direct
                        </div>
                    </Link>
                    <div className='iconeReseauSociaux'>
                        <div>
                            <Link to="/facebook" className="boxFacebook">
                                <img src={Facebook} className="icone" alt="Facebook" />
                            </Link>
                        </div>
                        <div>
                            <Link to="/twitter" className="boxTwitter">
                                <img src={Twitter} className="icone" alt="Twitter" />
                            </Link>
                        </div>
                        <div>
                            <Link to="/Instagram" className="boxInstagram">
                                <img src={Instagram} className="icone" alt="Instagram" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='lienPages'>
                    <div>
                        <Link to="/AboutUs" className="lien">
                            About Us
                        </Link>
                    </div>
                    <div>
                        <Link to="/ContactezNousPages" className="lien">
                            Contactez Nous
                        </Link>
                    </div>
                    <div>
                        <Link to="/IncriptionConnexion" className="lien">
                            S'incrire | Se connecter
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BarreDeNavigation;