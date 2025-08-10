import React, { useState } from 'react';
import BasicInfo from './portfolio/BasicInfo';
import Work from './portfolio/Work';
import Skills from './portfolio/Skills';
import Resources from './portfolio/Resources';
import './App.css'; // import the CSS

function App() {
  const [page, setPage] = useState('basic');

  return (
    <div className="app-container">
      <nav>
        <button 
          onClick={() => setPage('basic')} 
          className={page === 'basic' ? 'active' : ''}
        >
          Basic Info
        </button>
        <button 
          onClick={() => setPage('work')} 
          className={page === 'work' ? 'active' : ''}
        >
          Work
        </button>
        <button 
          onClick={() => setPage('skills')} 
          className={page === 'skills' ? 'active' : ''}
        >
          Skills
        </button>
        <button 
          onClick={() => setPage('resources')} 
          className={page === 'resources' ? 'active' : ''}
        >
          Resources
        </button>
      </nav>

      {page === 'basic' && <BasicInfo />}
      {page === 'work' && <Work />}
      {page === 'skills' && <Skills />}
      {page === 'resources' && <Resources />}
    </div>
  );
}

export default App;
