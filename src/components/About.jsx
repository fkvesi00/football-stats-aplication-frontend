import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
  const text = `Web aplikacija koja pruža informacije i statistiku o malonogometnoj ligi koja se igra na području Metkovića pod nazivom UMA-Metković`;
  const logo = '/images/0.jpg'
  return (
    <div>
      <div className="about">
        <div className="m5-4 md:mb-0 md:mr-8 flex justify-center items-center"
  style={{
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    overflow: 'hidden',
  }}
>
  <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
    <img
      src={logo}
      alt="Club Logo"
      className="w-40 h-auto md:w-40"
      style={{ borderRadius: '10px 10px 0 0', objectFit: 'cover' }}
    />
  </div>
</div>
        <p style={{ fontFamily: '"Times New Roman", Times, serif;', margin: '10px', padding:'5px' }}>{text}</p>
        
        <p style={{ fontFamily: '"Times New Roman", Times, serif;', margin: '10px', padding:'5px' }}>Verzija: 1.0</p>
        
        <p style={{ fontFamily: '"Times New Roman", Times, serif;', margin: '10px', padding:'5px' }}>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </div>
  );
}

export default About;