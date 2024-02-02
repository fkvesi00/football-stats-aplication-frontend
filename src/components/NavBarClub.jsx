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
    <div className="bg-base-100 m-10" data-theme="garden">
     <div style={rowStyle}>
        <ul className="menu menu-horizontal px-1" style={{textAlign:'center', justifyContent:'center'}} data-theme="night">
          <li><div className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Raspored')}>Raspored</div></li>
          <li><div className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Utakmice')}>Utakmice</div></li>
          <li><div className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Igrači')}>Igrači</div></li>
          <li><div className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Statistika')}>Statistika</div></li>
          <li><div className="btn btn-ghost" style={textStyle} onClick={()=> handleClick('Galerija')}>Galerija</div></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBarClub
