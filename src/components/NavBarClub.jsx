import React from 'react'

function NavBarClub({handleClick}) {
    const textStyle = {
        color: 'white',
        fontFamily: 'Lucida Console, Monaco, monospace',
        backgroundColor: '#5a0960',
        margin:'7px',
        padding:'7px'
      };
    
      const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
  return (
    <div className="bg-base-100 mb" data-theme="garden">
     <div style={rowStyle}>
        <ul className="menu menu-horizontal px-1" style={{textAlign:'center', justifyContent:'center'}}>
          <li><div style={textStyle} onClick={()=> handleClick('Raspored')}>Raspored</div></li>
          <li><div style={textStyle} onClick={()=> handleClick('Utakmice')}>Utakmice</div></li>
          <li><div style={textStyle} onClick={()=> handleClick('Igrači')}>Igrači</div></li>
          <li><div style={textStyle} onClick={()=> handleClick('Statistika')}>Statistika</div></li>
          <li><div style={textStyle} onClick={()=> handleClick('Galerija')}>Galerija</div></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBarClub
