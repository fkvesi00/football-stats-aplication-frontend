import React from 'react';

const Rezultat = ({ matchID, date, time, homeTeamName, score, awayTeamName, a_id, h_id }) => {
    const h_logo = `/images/${h_id}.jpg`;
    const a_logo = `/images/${a_id}.jpg`;

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Home Team Section */}
            <div className="text-center mb-4">
                {/* Home Team Logo (Responsive) */}
                <img src={h_logo} alt={homeTeamName} className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 rounded-full mx-auto mb-2" />

                {/* Home Team Name (Medium & Centered) */}
                <p className="text-base">{homeTeamName}</p>
            </div>

            {/* Match Information Section (Small) */}
            <div className="text-center mb-4">
                {/* Date (Small) */}
                <p className="text-xs">{date}</p>

                {/* Time (Small) */}
                <p className="text-xs">{time}</p>

                {/* Score (Extra Large & Centered) */}
                <p className="mt-2 text-xl">{score}</p>
            </div>

            {/* Away Team Section */}
            <div className="text-center">
                {/* Away Team Logo (Responsive) */}
                <img src={a_logo} alt={awayTeamName} className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 rounded-full mx-auto mb-2" />

                {/* Away Team Name (Medium & Centered) */}
                <p className="text-base">{awayTeamName}</p>
            </div>
        </div>
    );
};

export default Rezultat;