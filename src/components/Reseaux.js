import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa'
import '../styles/Reseaux.css'

function Reseaux() {
    return (
        <div className='reseaux text-center pt-5 pb-5 px-3'>
            <h2 className='pb-3'>RESEAUX SOCIAUX</h2>
            <p><span className='question'>Suivez-nous sur les réseaux sociaux pour ne rien manquer de l'actualité du festival</span></p>
            <div className="d-flex align-items-center justify-content-evenly pt-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                    <FaFacebook className="icones" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                    <FaInstagram className="icones" /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                    <FaTwitter className="icones" /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                    <FaYoutube className="icones" /></a>
                <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                    <FaSnapchat className="icones" /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                    <FaLinkedin className="icones" /></a>
            </div>
            <p className='pt-5'>Sur nos réseaux sociaux, vous pouvez :</p>
            <ul className='pt-3 ps-0'>
                <li>Découvrir la programmation complète du festival</li>
                <li className='pt-3'>Rester informés des dernières news et des artistes surprises</li>
                <li className='pt-3'>Participer à des jeux concours et gagner des places</li>
                <li className='pt-3'>Partager vos photos et vidéos du festival avec la communauté</li>
                <li className='pt-3'>Vivre l'expérience du festival en direct avec des stories immersives</li>
            </ul>
        </div>

    )
}

export default Reseaux