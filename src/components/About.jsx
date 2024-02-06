import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
  const text = `Web aplikacija koja pruža informacije i statistiku o malonogometnoj ligi koja se igra na području Metkovića pod nazivom UMA-Metković`;

  return (
    <div>
      <div className="about">
        <h1 style={{ textAlign: 'center', margin: '10px', padding:'5px' }}>UMA Metković</h1>
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '100%', padding:'10px' }}>
        <img
            src="/images/0.jpg"
            alt="About"
            style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto', margin:'10px', padding:'10px' }}
          />
        </div>
        <p style={{ fontFamily: '"Times New Roman", Times, serif;', margin: '10px', padding:'5px' }}>{text}</p>
        
        <p>Version: 1.0.0</p>
        
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </div>
  );
}

export default About;