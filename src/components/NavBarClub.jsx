import React from 'react';

function NavBarClub({ handleClick }) {
    const textStyle = {
        color: '#311432',
        fontFamily: 'Lucida Console, Monaco, monospace',
        margin: '7px',
        padding: '7px'
    };

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const handleLiClick = (section) => {
      // Call handleClick function passed from parent component
      handleClick(section);
  
      // Scroll to the parent <div> wrapping the <ul> element
      const divElement = document.querySelector('ul');
      if (divElement) {
          divElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  };

    return (
        <div className="m-10">
            <div style={rowStyle}>
                <ul className="menu menu-horizontal px-1" style={{ textAlign: 'center', justifyContent: 'center' }} data-theme='fantasy'>
                    <li className="btn btn-ghost" style={textStyle} onClick={() => handleLiClick('Raspored')}>Raspored</li>
                    <li className="btn btn-ghost" style={textStyle} onClick={() => handleLiClick('Utakmice')}>Utakmice</li>
                    <li className="btn btn-ghost" style={textStyle} onClick={() => handleLiClick('Igrači')}>Igrači</li>
                    <li className="btn btn-ghost" style={textStyle} onClick={() => handleLiClick('Statistika')}>Statistika</li>
                    <li className="btn btn-ghost" style={textStyle} onClick={() => handleLiClick('Galerija')}>Galerija</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBarClub;