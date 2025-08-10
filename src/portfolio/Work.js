import React from 'react';
import './Work.css';

const projects = [
  {
    title: 'Avengers CMS',
    description:
      'A superhero content management system where you can add, edit, and delete superheroes with full authentication features.',
    image: '/images/avenger.webp',
    link: 'https://github.com/Sukhsimrankaur/CRM_Challenge',
    techList: ['PHP', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'React Portfolio',
    description:
      'This very portfolio website — built entirely in React and styled with pure CSS. Dockerized for easy deployment.',
    image: '/images/react.jpg',
    link: 'https://github.com/',
    techList: ['React', 'Docker', 'CSS3'],
  },
  {
    title: 'Web Security PHP Blog',
    description:
      'A secure blogging platform built in PHP that implements user authentication, password hashing, SQL injection prevention, and XSS protection.',
    image: '/images/Web_security.webp',
    link: 'https://github.com/',
    techList: ['PHP', 'MySQL', 'Security Best Practices'],
  },
  {
    title: 'E-Commerce Store',
    description:
      'An online store with shopping cart functionality, product filtering, and order management. Fully responsive design.',
    image: '/images/Ecommerce.png',
    link: 'https://github.com/',
    techList: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    title: 'Intro to Rails Project',
    description:
      'A Ruby on Rails application with CRUD operations, user authentication, and database integration — built as part of Intro to Rails course.',
    image: '/images/Rails.webp',
    link: 'https://github.com/',
    techList: ['Ruby on Rails', 'PostgreSQL', 'HTML/CSS'],
  },
];

function Work() {
  return (
    <section className="work-section">
      <h2>My Work</h2>
      <p className="work-intro">
        Here are some of the projects I’ve worked on during my journey as a
        full-stack web development student. Scroll down to explore!
      </p>

      {projects.map((proj, i) => (
        <a
          key={i}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-row ${i % 2 === 1 ? 'reverse' : ''}`}
        >
          <img
            src={proj.image}
            alt={proj.title}
            className="project-img-vertical"
          />
          <div className="project-text">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-badges">
              {proj.techList.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Work;
