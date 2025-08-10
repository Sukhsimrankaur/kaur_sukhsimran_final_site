import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        'JavaScript',
        'React',
        'PHP',
        'SQL',
        'HTML',
        'CSS',
        'Ruby on Rails',
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'VSCode', 'Postman', 'MySQL'],
    },
    {
      title: 'Soft Skills',
      skills: [
        'Problem Solving',
        'Team Collaboration',
        'Time Management',
        'Agile Development',
        'Communication',
      ],
    },
    {
      title: 'Other Expertise',
      skills: [
        'Responsive Design',
        'REST API Integration',
        'Unit Testing',
        'Web Security Basics',
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2>Skills</h2>

      {/* Add your image here */}
      <img
        src="/images/Languages.jpg"
        alt="Skills Banner"
        className="skills-banner"
      />

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skills-card" key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
