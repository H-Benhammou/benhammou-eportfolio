import React, { useState } from 'react';
import { profileData } from '../data';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, submitted: false, error: null });

        // This would normally connect to your Spring Boot backend
        try {
            // Simulated API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setFormStatus({ submitting: false, submitted: true, error: null });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setFormStatus({ submitting: false, submitted: false, error: 'Une erreur est survenue. Veuillez réessayer.' });
        }
    };

    return (
        <section className="contact-section">
            <h2 className="section-title">Me Contacter</h2>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="icon location"></i>
                        <p>{profileData.location}</p>
                    </div>
                    <div className="contact-item">
                        <i className="icon phone"></i>
                        <p>{profileData.phone}</p>
                    </div>
                    <div className="contact-item">
                        <i className="icon email"></i>
                        <p>{profileData.email}</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    {formStatus.submitted ? (
                        <div className="success-message">
                            <h3>Message envoyé avec succès!</h3>
                            <p>Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
                            <button onClick={() => setFormStatus({...formStatus, submitted: false})}>Envoyer un autre message</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Sujet</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            {formStatus.error && <p className="error-message">{formStatus.error}</p>}

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={formStatus.submitting}
                            >
                                {formStatus.submitting ? 'Envoi en cours...' : 'Envoyer'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;