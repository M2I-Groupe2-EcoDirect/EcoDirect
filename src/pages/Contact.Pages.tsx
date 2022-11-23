import React from "react"
import '../css/Contact.css'
export const Contact = () => {
    return (
        <>
            <div className="ensembleContact">
                <div className="contactezNous">
                    <p>Contactez Nous</p>
                </div>
                <div className="boiteFormulaire">
                    <div className="entrerEmail">
                        <p>Entrez votre email :</p>
                        <input type="email" className="email" placeholder="Votre email..." required />
                    </div>
                    <div className="texteFormulaire">
                        <form>
                            <p>Entrez votre message :</p>
                            <div className="entrerTexte">
                                <textarea name="texte" className="zoneTexte" placeholder="Votre message... (limite 300 caractère)" maxLength={300} required />
                            </div>
                            <div className="buttonEnvoyer">
                                <input type="submit" value="Envoyer" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}