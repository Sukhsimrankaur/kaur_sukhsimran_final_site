import React from 'react';
import './BasicInfo.css';

function BasicInfo() {
  return (
    <section className="basic-info">
      <h1>Sukhsimran Kaur</h1>
      <p><strong>Email:</strong> sukhsimran@example.com</p>
      <p><strong>Phone:</strong> (123) 456-XXXX</p>

      <p>
        Hello! I’m <strong>Sukhsimran Kaur</strong>, a student at Red River Polytechnic College, Winnipeg.
        I am currently pursuing my studies in full stack web development with a strong passion
        for crafting beautiful and functional digital experiences. My journey into tech has been fueled
        by curiosity, creativity, and a constant desire to improve.
      </p>

      <p>
        My key strengths include strong problem-solving skills, attention to detail, and the ability to
        adapt quickly to new technologies. I particularly enjoy working on projects where I can combine
        <em> clean, responsive design </em> with smooth, efficient functionality.
      </p>

      <h2>Education</h2>
      <div className="education-section">
        <ul>
          <li>
            <strong>Diploma in Full Stack Web Development</strong> – Red River Polytechnic College, Winnipeg  
            <br />
            Expected Graduation: 2026
          </li>
            <li>
                <strong>High School Diploma</strong> – SKS Academy, India  
                <br />
                Graduated: 2023
            </li>
        </ul>

        <div className="education-images">
          <img
            src="/images/RRC.webp"
            alt="Red River College"
            className="education-image"
          />
          <img
            src="/images/SKS_Academy.webp"
            alt="SKS Academy"
            className="education-image"
          />
        </div>
      </div>

      <h2>Technical Highlights</h2>
      <ul>
        <li>Proficient in HTML, CSS, JavaScript, and React</li>
        <li>Basic backend development with Node.js</li>
        <li>Responsive web design and mobile-first development</li>
        <li>Version control with Git and GitHub</li>
        <li>Basic database handling using PostgreSQL</li>
      </ul>

      <h2>Hobbies & Interests</h2>
      <ul>
        <li>Exploring UI/UX design trends</li>
        <li>Photography and image editing</li>
        <li>Contributing to open-source projects</li>
        <li>Traveling and experiencing different cultures</li>
      </ul>

      <h2>Fun Facts</h2>
      <p>
        🌱 I’m currently learning more about <strong>React</strong> and <strong>Node.js</strong>.  
        ☕ I’m a coffee enthusiast and can’t start my day without it.  
        🎯 My goal for this year is to build a fully functional personal project from scratch and deploy it online.
      </p>
    </section>
  );
}

export default BasicInfo;
