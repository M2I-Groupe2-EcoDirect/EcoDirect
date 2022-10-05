
import React, { useState } from 'react';
import '../tchat.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';




export const Tchat = () => {

    const yupShema = yup.object({
        texte:yup.string().required("Le champs est onligatoire"),
    })


    const { 
        register,
        handleSubmit,
        getValues,
        watch,
        formState: {errors},
     } = useForm({
        defaultValues: {
            texte:"",
        },
        resolver:yupResolver(yupShema),
        
    });

  //  watch('name');
    
    function submit(values: any){
        console.log(values);
    }
    console.log(errors);

    return(
        <>
            <form onSubmit={handleSubmit(submit)}className='informations'>    
                    <div className='texte'>
                    <div className='image'></div>
                        <input
                        {...register("texte",{
                          //  disabled: true,
                          required:{
                            value: true,
                            message: "Le champs est obligatoire"                          }
                        })}
                        id="texte"
                        className="textera"
                        type="text"/>                         
                    </div>   
                    {errors?.texte && <p>{errors.texte.message}</p>}    
                                          
            </form>   
            <div className='button'>
                 <button id="texte"className='envoie' type="button">Répondre au commentaire</button> 
            </div>
          
            <i className="fa-solid fa-thumbs-up"></i>            
        </>
    );
};
        
    
