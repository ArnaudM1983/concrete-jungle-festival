import React from 'react';
import accueil from '../images/accueil.jpg'
import '../styles/Acceuil.css'

function Acceuil() {

    return (
        <div className='text-center'>
            <img src={accueil} alt="accueil" className="accueil" />
            <h1 className='titre'>CONCRETE<br /> JUNGLE<br /> FESTIVAL</h1>
            <p>lslsl</p>
        </div>
    );
}

export default Acceuil;