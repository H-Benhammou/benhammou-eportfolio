import { skillsData } from '../data';

function Skills() {
    const renderSkillCategory = (title, skills) => (
        <div className="skill-category">
            <h3>{title}</h3>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-bar-container">
                            <div className="skill-bar" style={{width: `${skill.level}%`}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="skills-section">
            <h2 className="section-title">Compétences Techniques</h2>

            {renderSkillCategory('Langages de programmation', skillsData.programming)}
            {renderSkillCategory('Développement web & mobile', skillsData.webMobile)}
            {renderSkillCategory('Cloud & DevOps', skillsData.cloudDevOps)}
            {renderSkillCategory('Machine & Deep learning', skillsData.machineLearning)}
            {renderSkillCategory('Data & Databases', skillsData.databases)}
        </section>
    );
}

export default Skills;
