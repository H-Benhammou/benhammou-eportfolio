import React from 'react';
import { profileData } from '../data';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} {profileData.name}. Tous droits réservés.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/h-benhammou/" className="social-link">LinkedIn</a>
                    <a href="https://github.com/H-Benhammou" className="social-link">GitHub</a>
                    <a href={`mailto:${profileData.email}`} className="social-link">Email</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;