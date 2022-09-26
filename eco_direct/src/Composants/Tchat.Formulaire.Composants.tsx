import { useState } from 'react';
import React from 'react';
import '../tchat.css';


export const Tchat = () => {



    return(
        <>
       
            <form className='informations'>
            <div className='image'></div>    
                    <div className='texte'>  
                        <textarea className="textera"placeholder='Veuillez écrire'>                              
                        </textarea>
                        <div className='button'>
                         <button className='envoie' type="button">Répondre au commentaire</button> 
                        </div>
                        
                         <br/><br/> 
                    </div>  
                                               
            </form>   
             <br/> 
            
          
            <i className="fa-solid fa-thumbs-up"></i>            
        </>
    );
};
        
    
