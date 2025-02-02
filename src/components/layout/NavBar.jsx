import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar({ seasonid, setSeasonid }) {
  const location = useLocation();
  const [season, setSeason] = useState(seasonid === 1 ? '2023/24' : '2024/25'); // To track the selected season

  const handleSeasonChange = (event) => {
    const selectedValue = event.target.value;
    setSeason(selectedValue);
    if (selectedValue === '2023/24') {
      setSeasonid(1);
    } else if (selectedValue === '2024/25') {
      setSeasonid(2);
    }
  };

  const textStyle = {
    color: 'white',
    fontFamily: 'Lucida Console, Monaco, monospace',
  };

  const containerStyle = {
    marginBottom: '8px',
    padding: '10px',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div className="bg-base-100 mb" data-theme="night">
      {/* First Row */}
      <div style={{ ...containerStyle, textAlign: 'center' }}>
        <Link to="/" className="btn btn-ghost normal-case text-xl" style={{ color: 'white', fontSize: '1.5rem' }}>
          UMA Metković
        </Link>

        {/* Conditionally render the select only on the root page */}
        {location.pathname === '/' && (
          <select value={season} onChange={handleSeasonChange}>
            <option value="2023/24">2023/24</option>
            <option value="2024/25">2024/25</option>
          </select>
        )}
      </div>

      {/* Second Row */}
      <div style={rowStyle}>
        <ul className="menu menu-horizontal px-1" style={rowStyle}>
          <li><Link to="/klubovi" style={textStyle}>Klubovi</Link></li>
          <li><Link to="/igraci" style={textStyle}>Igrači</Link></li>
          <li><Link to="/statstika" style={textStyle}>Statistika</Link></li>

          {/* Conditionally render Kup link based on selected season */}
          <li>
            {season === '2023/24' ? (
              <Link to="/galerija" style={textStyle}>Kup</Link>
            ) : (
              <Link to="/galerija2" style={textStyle}>Kup</Link>
            )}
          </li>

          <li><Link to="/about" style={textStyle}>About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
