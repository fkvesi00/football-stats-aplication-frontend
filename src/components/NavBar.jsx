import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ klubovi }) {
  const textStyle = {
    color: 'white', // Set text color to white
    fontFamily: 'Lucida Console, Monaco, monospace', // Set font family
  };

  return (
    <div className="navbar bg-base-100 mb" data-theme="night">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl" >
          UMA Metković
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <Link to='#' style={textStyle}>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
              </svg>
            </Link>
            <ul className="p-2 bg-base-100">
              <li><Link to='/klubovi' style={textStyle}>Klubovi</Link></li>
              <li><Link to='/igraci' style={textStyle}>Igrači</Link></li>
            </ul>
          </li>
          <li><Link to='/ ' style={textStyle}>Liga</Link></li>
          <li><Link to='/signIn' style={textStyle}>Sign in</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
