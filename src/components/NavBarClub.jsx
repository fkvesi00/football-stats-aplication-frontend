import React from 'react'

function NavBarClub({handleClick}) {
    const textStyle = {
        color: 'white',
        fontFamily: 'Lucida Console, Monaco, monospace',
        margin:'7px',
        padding:'7px'
      };
    
      const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };


  return (
    <div className="bg-base-100 m-10">
     <div style={rowStyle}>
        <ul className="menu menu-horizontal px-1" style={{textAlign:'center', justifyContent:'center'}} data-theme='dark'>
          <li className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Raspored')}>Raspored</li>
          <li className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Utakmice')}>Utakmice</li>
          <li className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Igrači')}>Igrači</li>
          <li className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Statistika')}>Statistika</li>
          <li className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Galerija')}>Galerija</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBarClub
