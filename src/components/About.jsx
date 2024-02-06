import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './about.css'


function About() {
  const text= `Web aplikacija koja pruža informacije i statistiku o malonogometnoj ligi koja se igra na području Metkovića pod nazivom UMA-Metković`

  return (
    <Card>
        <div className="about">
            <h1>UMA Metković</h1>
            <img src="/images/0.jpg" alt="About" />
            <p>{text}</p>
            
            
            <p>Vaersion: 1.0.0</p>
            <p>
                <Link to='/'>Back to home</Link>
            </p>
        </div>
        
    </Card>
  )
}

export default About