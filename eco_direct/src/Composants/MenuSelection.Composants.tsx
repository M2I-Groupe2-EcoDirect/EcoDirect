import React from 'react';
import "../css/Composants/Menuselection.css"

type MenuSelectionType = {
    titre: string,
    lienImg: string
}

export const MenuSelection = (props: MenuSelectionType) =>{

    return (
        <>
            <div>
                <a href={"./"} className="lien">
                    <h1 className='titre'>{props.titre}</h1>
                    <img src={props.lienImg} alt={"Selection"} className="image"/>
                </a>
            </div>
        </>
    );
}

