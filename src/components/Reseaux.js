import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import '../styles/Reseaux.css'

function Reseaux() {
    return (
        <div className='reseaux text-center pt-5 pb-5 px-3'>
            <h2 className='pb-3'>RESEAUX SOCIAUX</h2>
            <p><span className='question'>Suivez-nous sur les réseaux sociaux pour ne rien manquer de l'actualité du festival</span></p>
            <div className="d-flex align-items-center justify-content-evenly pt-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                    <FaFacebook className="facebook-icon icones" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                    <FaInstagram className="instagram-icon icones" /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                    <FaTwitter className="twitter-icon icones" /></a>
            </div>
        </div>

    )
}

export default Reseaux