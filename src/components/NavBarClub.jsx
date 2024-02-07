import React from 'react';

function NavBarClub({ handleClick }) {
    const textStyle = {
        color: 'white',
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

        // Scroll the window to the top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bg-base-100 m-10">
            <div style={rowStyle}>
                <ul className="menu menu-horizontal px-1" style={{ textAlign: 'center', justifyContent: 'center' }} data-theme='dark'>
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