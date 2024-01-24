import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ klubovi }) {
  const textStyle = {
    color: 'white',
    fontFamily: 'Lucida Console, Monaco, monospace',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <div className="navbar bg-base-100 mb" data-theme="night">
      {/* First Row */}
      <div style={{ ...rowStyle, marginBottom: '8px' }}>
        <Link to='/' className="btn btn-ghost normal-case text-xl" style={{color:'white'}}>
          UMA Metković
        </Link>
      </div>

      {/* Second Row */}
      <div style={rowStyle}>
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/klubovi' style={textStyle}>Klubovi</Link></li>
          <li><Link to='/igraci' style={textStyle}>Igrači</Link></li>
          <li><Link to='/signIn' style={textStyle}>Sign In</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;