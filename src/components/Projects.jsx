import React, { useState } from 'react';
import { projectsData } from '../data';

function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section className="projects-section">
            <h2 className="section-title">Projets Réalisés</h2>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div
                        key={project.id}
                        className={`project-card ${activeProject === project.id ? 'active' : ''}`}
                        onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    >
                        <h3>{project.title}</h3>
                        <p className="period">{project.period}</p>
                        <div className={`project-details ${activeProject === project.id ? 'show' : ''}`}>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;