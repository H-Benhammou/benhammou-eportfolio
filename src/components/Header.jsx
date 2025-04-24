import React from 'react';
import { profileData } from '../data';

function Header({ setCurrentPage, currentPage }) {
    const navLinks = [
        { id: 'home', label: 'Accueil' },
        { id: 'experience', label: 'Expérience' },
        { id: 'education', label: 'Formation' },
        { id: 'projects', label: 'Projets' },
        { id: 'skills', label: 'Compétences' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">{profileData.name}</h1>
                <nav className="main-nav">
                    <ul className="nav-links">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <button
                                    className={currentPage === link.id ? 'active' : ''}
                                    onClick={() => setCurrentPage(link.id)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
