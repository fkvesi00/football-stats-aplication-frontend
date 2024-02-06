import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './about.css'

function Kup() {
    return (
        <Card>
            <div className="about">
                <h1>U izradi</h1>
                <p>
                    <Link to='/'>Back to home</Link>
                </p>
            </div>
            
        </Card>
      )
}

export default Kup
