import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const textStyle = {
    color: 'white',
    fontFamily: 'Lucida Console, Monaco, monospace',
  };

  const containerStyle = {
    marginBottom: '8px',
    padding:'10px'
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  };

  return (
    <div className="bg-base-100 mb" data-theme="night">
      {/* First Row */}
      <div style={{ ...containerStyle, textAlign: 'center' }}>
        <Link to='/' className="btn btn-ghost normal-case text-xl" style={{color:'white',fontSize: '1.5rem'}}>
          UMA Metković
        </Link>
      </div>

      {/* Second Row */}
      <div style={rowStyle}>
        <ul className="menu menu-horizontal px-1" style={rowStyle}>
          <li><Link to='/klubovi' style={textStyle}>Klubovi</Link></li>
          <li><Link to='/igraci' style={textStyle}>Igrači</Link></li>
          <li><Link to='/statstika' style={textStyle}>Statistika</Link></li>
          <li><Link to='/galerija' style={textStyle}>Galerija</Link></li>
          <li><Link to='/signIn' style={textStyle}>Sign In</Link></li>
          <li><Link to='/about' style={textStyle}>About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;