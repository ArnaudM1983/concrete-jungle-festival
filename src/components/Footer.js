import React from 'react';
import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaSnapchat, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <>
                <footer className="container-fluid pt-3">
                    <div className="row">
                        <div className="col-12  reseaux-sociaux d-flex align-items-center justify-content-evenly pb-3">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                                <FaFacebook className="facebook-icon" /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                                <FaInstagram className="instagram-icon" /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                                <   FaTwitter className="twitter-icon" /></a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                                <FaYoutube className="youtube-icon" /></a>
                            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                                <FaSnapchat className="snapchat-icon" /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                                <FaLinkedin className="linkedin-icon" /></a>
                        </div>
                        <p className='copyright text-center'>© 2024 - Design by Arnaud Meusy</p>
                    </div>
                </footer>

            </>
        </div>

    )
}

export default Footer
