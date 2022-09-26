import { useState } from 'react';
import React from 'react';
import '../tchat.css';


export const Tchat = () => {



    return(
        <>
            <form className='informations'>    
                    <div className='texte'>
                    <div className='image'></div>
                        <textarea className="textera"placeholder='Veuillez écrire'>                              
                        </textarea>
                        
                        {/* <br/><br/> */}
                    </div>                             
            </form>   
            {/* <br/> */}
            <div className='button'>
                 <button className='envoie' type="button">Répondre au commentaire</button> 
            </div>
          
            <i className="fa-solid fa-thumbs-up"></i>            
        </>
    );
};
        
    
