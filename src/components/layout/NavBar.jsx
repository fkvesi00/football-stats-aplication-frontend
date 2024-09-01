import React from 'react';
import { Link,useLocation  } from 'react-router-dom';

function NavBar({seasonid,setSeasonid}) {
  const location = useLocation();

  const handleSeasonChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "2023/24") {
      setSeasonid(1);
    } else if (selectedValue === "2024/25") {
      setSeasonid(2);
    }
  };
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
        {/* Conditionally render the select only on the root page */}
        {location.pathname === '/' && (
          <select value={seasonid === 1 ? "2023/24" : "2024/25"} onChange={handleSeasonChange}>
            <option value="2023/24">2023/24</option>
            <option value="2024/25">2024/25</option>
          </select>
        )}
      </div>

      {/* Second Row */}
      <div style={rowStyle}>
        
        <ul className="menu menu-horizontal px-1" style={rowStyle}>
          <li><Link to='/klubovi' style={textStyle}>Klubovi</Link></li>
          <li><Link to='/igraci' style={textStyle}>Igrači</Link></li>
          <li><Link to='/statstika' style={textStyle}>Statistika</Link></li>
          <li><Link to='/galerija' style={textStyle}>Kup</Link></li>
          {/* <li><Link to='/signIn' style={textStyle}>Sign In</Link></li> */}
          <li><Link to='/about' style={textStyle}>About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;