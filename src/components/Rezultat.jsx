import React from 'react';

const Rezultat = ({ matchID, date, time, homeTeamName, score, awayTeamName, a_id, h_id }) => {
    const h_logo = `/images/${h_id}.jpg`;
    const a_logo = `/images/${a_id}.jpg`;

    return (
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-center">
            {/* Home Team Section */}
            <div className="flex-1 text-center mb-4 sm:mb-0">
                {/* Home Team Logo (Responsive) */}
                <img src={h_logo} alt={homeTeamName} className="w-full sm:w-16 md:w-24 lg:w-32 xl:w-40 rounded-full mx-auto mb-2" />

                {/* Home Team Name (Medium & Centered) */}
                <p className="text-base text-center">{homeTeamName}</p>
            </div>

            {/* Match Information Section (Small) */}
            <div className="flex-1 text-center mb-4 sm:mb-0">
                {/* Date (Small) */}
                <p className="text-xs">{date}</p>

                {/* Time (Small) */}
                <p className="text-xs">{time}</p>

                {/* Score (Extra Large & Centered) */}
                <p className="mt-2 text-xl text-center">{score}</p>
            </div>

            {/* Away Team Section */}
            <div className="flex-1 text-center">
                {/* Away Team Logo (Responsive) */}
                <img src={a_logo} alt={awayTeamName} className="w-full sm:w-16 md:w-24 lg:w-32 xl:w-40 rounded-full mx-auto mb-2" />

                {/* Away Team Name (Medium & Centered) */}
                <p className="text-base text-center">{awayTeamName}</p>
            </div>
        </div>
    );
};

export default Rezultat;