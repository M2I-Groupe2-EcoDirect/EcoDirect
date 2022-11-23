import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import BarreDeNavigation from './composants/BarreDeNavigationComposants';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* 1: Ajoutez le path de votre page à Route path='/Exemple' dans App.tsx
                    2: Ajoutez le nom que vous avez entrer dans le path dans le Link to='/Exemple' dans BarreDeNavigationComposants.tsx 
                    3: Ajoutez dans votre return la navigation avec le nom de votre path
                    return (
                        <>
                        <BarreDeNavigation data={"Exemple"}/>
                        </>
                    )
                    */}

                    {/* <Route path='/' element={<AccueilPage/>}/>  */}
                    {/* <Route path='/ContactezNousPages' element={<ContactezNous />} />*/}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
