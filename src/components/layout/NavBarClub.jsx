import React from 'react';

function NavBarClub({ handleClick, target }) {
    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const handleLiClick = (section) => {
        handleClick(section);

        const divElement = document.querySelector('.m-10');
        if (divElement) {
            divElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="m-10">
            <div style={rowStyle}>
                <ul
                    className="menu menu-horizontal px-1"
                    style={{ textAlign: 'center', justifyContent: 'center' }}
                    data-theme="fantasy"
                >
                    <li
                        className={`btn btn-ghost m-2 p-2 transition-all duration-300 rounded-md ${
                            target === 'Utakmice'
                                ? 'shadow-lg bg-gray-300 text-black'
                                : 'hover:shadow-md'
                        }`}
                        onClick={() => handleLiClick('Utakmice')}
                    >
                        Utakmice
                    </li>
                    <li
                        className={`btn btn-ghost m-2 p-2 transition-all duration-300 rounded-md ${
                            target === 'Raspored'
                                ? 'shadow-lg bg-gray-300 text-black'
                                : 'hover:shadow-md'
                        }`}
                        onClick={() => handleLiClick('Raspored')}
                    >
                        Raspored
                    </li>
                    <li
                        className={`btn btn-ghost m-2 p-2 transition-all duration-300 rounded-md ${
                            target === 'Igrači'
                                ? 'shadow-lg bg-gray-300 text-black'
                                : 'hover:shadow-md'
                        }`}
                        onClick={() => handleLiClick('Igrači')}
                    >
                        Igrači
                    </li>
                    <li
                        className={`btn btn-ghost m-2 p-2 transition-all duration-300 rounded-md ${
                            target === 'Statistika'
                                ? 'shadow-lg bg-gray-300 text-black'
                                : 'hover:shadow-md'
                        }`}
                        onClick={() => handleLiClick('Statistika')}
                    >
                        Statistika
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBarClub;