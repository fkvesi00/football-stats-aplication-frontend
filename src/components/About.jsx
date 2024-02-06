import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'


function About() {
  const text= `Web aplikacija koja pruža informacije i statistiku o malonogometnoj ligi koja se igra na području Metkovića pod nazivom UMA-Metković`

  return (
    <div>
        <div className="about">
            <h1 style={{textAlign:'center', margin:'10px'}}>UMA Metković</h1>
            <img src="/images/0.jpg" alt="About" />
            <p style={{fontFamily:'"Times New Roman", Times, serif;', margin :'10px'}}>{text}</p>
            
            
            
            <p>Version: 1.0.0</p>
            <p>
                <Link to='/'>Back to home</Link>
            </p>
        </div>
        
    </div>
  )
}

export default About