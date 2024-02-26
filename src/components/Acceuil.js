import React from 'react';
import accueil from '../images/accueil.jpg'
import '../styles/Acceuil.css'
import Programmation from './Programmation';
import Concerts from './Concerts';
import { NavLink } from 'react-router-dom';


function Acceuil() {

    return (
        <div className=''>
            <div>
                <img src={accueil} alt="accueil" className="accueil" />
                <h1 className='titre text-center'>CONCRETE<br /> JUNGLE<br /> FESTIVAL</h1>
                <p className='date text-center'>15 JUILLET 2024</p>
            </div>
            <NavLink to="/Billetterie" className="bouton-billetterie py-2 px-3">BILLETTERIE</NavLink>
            <Programmation />
            <Concerts />
            <div className='billet text-center px-3 pt-3'>
                <h2 className='mb-0'>BILLETTERIE</h2>
                <p className='pt-0'><span className='date-billet'>2024</span></p><hr />
                <p>BILLETS 1 JOUR</p>
                <p>PASS 2 JOURS</p>
                <p className='mb-4'>PASS 3 JOURS</p>
                <NavLink to="/Billetterie" className="bouton-billet py-2 px-3 mt-5">ACCÉDER À LA BILLETTERIE</NavLink>
            </div>
            <div className='faq text-center mt-5 pt-5 pb-5 px-3'>
                <h2 className='pb-3'>FOIRE AUX QUESTIONS</h2>
                <p><span className='question'>UNE QUESTION ?</span></p>
                <p className='pt-3 pb-3'>Nous avons sûrement la réponse</p>
                <NavLink to="/FAQ" className="bouton-billet py-2 px-3">FAQ</NavLink><hr />
            </div>
            <div className='infos text-center pt-2 pb-5 px-3'>
                <h2 className='pb-3'>INFORMATIONS PRATIQUES</h2>
                <p className='pt-3 pb-3'>Retrouvez ici toutes les informations nécessaires pour profiter pleinement du festival </p>
                <NavLink to="/Informations Pratiques" className="bouton-billet py-2 px-3">INFORMATIONS PRATIQUES</NavLink>
            </div>
        </div>
    );
}

export default Acceuil;