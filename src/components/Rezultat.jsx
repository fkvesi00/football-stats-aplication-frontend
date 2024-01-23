import React from 'react';

const Rezultat = ({ matchID, date, time, homeTeamName, score, awayTeamName, a_id, h_id }) => {
    const h_logo = `/images/${h_id}.jpg`;
    const a_logo = `/images/${a_id}.jpg`;

    return (
        <div className="flex flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-between">
            {/* Home Team Section */}
            <div className="text-center mb-2 p-4">
                {/* Home Team Logo (Responsive) */}
                <img src={h_logo} alt={homeTeamName} className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 rounded-full mx-auto mb-1" />

                {/* Home Team Name (Medium & Centered) */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{homeTeamName}</p>
            </div>

            {/* Score Section (Responsive) */}
            <div className="flex flex-col items-center mb-2 p-4">
                  {/* Match Information Section (Small) */}
                  <div className="text-center">
                    {/* Date (Small) */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{date}</p>

                    {/* Time (Small) */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{time}</p>
                </div>
                {/* Score (Extra Large & Centered) */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{score}</h1>
            </div>

            {/* Away Team Section */}
            <div className="text-center p-4">
                {/* Away Team Logo (Responsive) */}
                <img src={a_logo} alt={awayTeamName} className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 rounded-full mx-auto mb-1" />

                {/* Away Team Name (Medium & Centered) */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl " style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{awayTeamName}</p>
            </div>
        </div>
    );
};

export default Rezultat;