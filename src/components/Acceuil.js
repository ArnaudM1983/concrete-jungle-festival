import React from 'react';
import accueil from '../images/accueil.jpg'
import '../styles/Acceuil.css'
import Programmation from './Programmation';
import Concerts from './Concerts';

function Acceuil() {

    return (
        <div className=''>
            <img src={accueil} alt="accueil" className="accueil" />
            <h1 className='titre'>CONCRETE<br /> JUNGLE<br /> FESTIVAL</h1>
            <Programmation />
            <Concerts />
        </div>
    );
}

export default Acceuil;