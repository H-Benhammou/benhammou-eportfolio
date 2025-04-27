import React from 'react';
import { profileData } from '../data';

function Home() {
    return (
        <section className="home-section">
            <div className="profile-card">
                <div className="profile-image">
                    <div className="avatar-placeholder">HB</div>
                </div>
                <div className="profile-info">
                    <h1>{profileData.name}</h1>
                    <h2>{profileData.title}</h2>
                    <p className="location">{profileData.location}</p>
                    <div className="contact-info">
                        <p><i className="icon phone"></i> {profileData.phone}</p>
                        <p><i className="icon email"></i> {profileData.email}</p>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <h2>À propos de moi</h2>
                <p>{profileData.about}</p>
            </div>

            <div className="cta-section">
                <button className="cta-button" onClick={() => window.open('resume.pdf', '_blank')}>
                    Télécharger CV
                </button>
                
            </div>
        </section>
    );
}

export default Home;
