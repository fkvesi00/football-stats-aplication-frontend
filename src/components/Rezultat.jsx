import React from 'react';

const Rezultat = ({ matchID, date, time, homeTeamName, score, awayTeamName, a_id, h_id }) => {
    const h_logo = `/images/${h_id}.jpg`;
    const a_logo = `/images/${a_id}.jpg`;

    return (
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-center">
            {/* Home Team Section */}
            <div className="text-center mb-2 sm:mb-0">
                {/* Home Team Logo (Responsive) */}
                <img src={h_logo} alt={homeTeamName} className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 rounded-full mx-auto mb-1" />

                {/* Home Team Name (Medium & Centered) */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{homeTeamName}</p>
            </div>

            {/* Score Section (Responsive) */}
            <div className="text-center mb-2 sm:mb-0">
                {/* Score (Extra Large & Centered) */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{score}</p>
            </div>

            {/* Away Team Section */}
            <div className="text-center">
                {/* Away Team Logo (Responsive) */}
                <img src={a_logo} alt={awayTeamName} className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 rounded-full mx-auto mb-1" />

                {/* Away Team Name (Medium & Centered) */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{awayTeamName}</p>
            </div>

            {/* Match Information Section (Small) */}
            <div className="text-center mt-2">
                {/* Date (Small) */}
                <p className="text-xs">{date}</p>

                {/* Time (Small) */}
                <p className="text-xs">{time}</p>
            </div>
        </div>
    );
};