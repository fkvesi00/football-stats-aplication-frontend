import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ klubovi }) {
  return (
    <div className="navbar bg-base-100 mb" data-theme="retro">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">
          UMA Metković
        </Link>
      </div>

      {/* Place for Image */}
      <div className="flex-1 flex items-center justify-center">
        <img src="/images/0.jpg" alt="Logo" className="w-16 h-16 rounded-full" />
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <Link to='#'>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
              </svg>
            </Link>
            <ul className="p-2 bg-base-100">
              <li><Link to='/klubovi'>Klubovi</Link></li>
              <li><Link to='/igraci'>Igrači</Link></li>
            </ul>
          </li>
          <li><Link to='/ '>Liga</Link></li>
          <li><Link to='/signIn'>Admin</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
