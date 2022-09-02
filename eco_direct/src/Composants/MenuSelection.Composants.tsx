import React from 'react';

type MenuSelectionType = {
    titre: string,
    lienImg: string
}

export const MenuSelection = (props: MenuSelectionType) =>{

    return (
        <>
            <div>
                <a href={"./"}>
                    <h1>{props.titre}</h1>
                    <img src={props.lienImg} alt={"Selection"}/>
                </a>
            </div>
        </>
    );
}

