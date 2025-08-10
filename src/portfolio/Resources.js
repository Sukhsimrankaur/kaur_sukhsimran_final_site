import React from 'react';
import './Resources.css';

const resources = [
  {
    title: 'React Official Docs',
    image: '/images/React.png',
    summary:
      'The official React documentation is a comprehensive and well-maintained resource that covers everything from basic concepts to advanced topics. Perfect for beginners and experienced developers alike.',
    link: 'https://reactjs.org/',
  },
  {
    title: 'Docker Documentation',
    image: '/images/Docker.png',
    summary:
      'The Docker docs provide detailed explanations on containerization, best practices, and tutorials to help you build, ship, and run distributed applications efficiently.',
    link: 'https://docs.docker.com/',
  },
  {
    title: 'MDN Web Docs',
    image: '/images/MDN.webp',
    summary:
      'Mozilla Developer Network offers thorough and up-to-date documentation on web standards like HTML, CSS, JavaScript, and APIs. It’s an essential resource for front-end developers.',
    link: 'https://developer.mozilla.org/',
  },
  {
    title: 'FreeCodeCamp',
    image: '/images/OIP.webp',
    summary:
      'FreeCodeCamp offers interactive coding lessons and projects that cover full-stack web development, algorithms, data structures, and more.',
    link: 'https://www.freecodecamp.org/',
  },
];

function Resources() {
  return (
    <section className="resources-section">
      <h2>Resources</h2>
      {resources.map((res, i) => (
        <div className="resource-card" key={i}>
          <img src={res.image} alt={res.title} className="resource-image" />
          <div className="resource-content">
            <h3>{res.title}</h3>
            <p>{res.summary}</p>
            <a href={res.link} target="_blank" rel="noopener noreferrer" className="resource-link">
              Learn More
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Resources;
