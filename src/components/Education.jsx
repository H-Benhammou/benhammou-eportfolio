import React from 'react';
import { educationData } from '../data';

function Education() {
    return (
        <section className="education-section">
            <h2 className="section-title">Formation</h2>
            <div className="timeline">
                {educationData.map(education => (
                    <div key={education.id} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>{education.degree}</h3>
                            <h4>{education.institution}</h4>
                            <p className="period">{education.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;