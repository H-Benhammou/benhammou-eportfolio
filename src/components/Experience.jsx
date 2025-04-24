import React from 'react';
import { experienceData } from '../data';

function Experience() {
    return (
        <section className="experience-section">
            <h2 className="section-title">Expérience Professionnelle</h2>
            <div className="timeline">
                {experienceData.map(experience => (
                    <div key={experience.id} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>{experience.title} - {experience.company}</h3>
                            <p className="period">{experience.period}</p>
                            <ul className="responsibilities">
                                {experience.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
