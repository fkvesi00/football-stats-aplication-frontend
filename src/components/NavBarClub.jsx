import React from 'react'
import { Link } from 'react-router-dom'

function NavBarClub() {
    const textStyle = {
        color: 'white',
        fontFamily: 'Lucida Console, Monaco, monospace',
      };
    
      const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
  return (
    <div className="bg-base-100 mb" data-theme="fantasy">
     <div style={rowStyle}>
        <ul className="menu menu-horizontal px-1" style={{textAlign:'center'}}>
          <li><Link to='/' style={textStyle}>Raspored</Link></li>
          <li><Link to='/' style={textStyle}>Utakmice</Link></li>
          <li><Link to='/' style={textStyle}>Igrači</Link></li>
          <li><Link to='/' style={textStyle}>Igrači statistika</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBarClub
