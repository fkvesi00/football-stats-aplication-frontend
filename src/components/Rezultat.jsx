import React from 'react';

const Rezultat = ({ matchID, date, time, homeTeamName, score, awayTeamName, a_id, h_id }) => {
    const h_logo = `/images/${h_id}.jpg`
    const a_logo = `/images/${a_id}.jpg`

    return (
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-center">
            {/* Home Team Section */}
            <div className="sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 text-center sm:mr-0 md:mr-16 lg:mr-16 xl:mr-16 mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                {/* Home Team Logo (Large & Rounded) */}
                <img src={h_logo} alt={homeTeamName} className="w-100 h-100 rounded-full mx-auto mb-2" />

                {/* Home Team Name (Medium & Centered) */}
                <p className="text-base text-center">{homeTeamName}</p>
            </div>

            {/* Match Information Section (Small) */}
            <div className="sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 text-center sm:mr-0 md:mr-16 lg:mr-16 xl:mr-16 mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                {/* Date (Small) */}
                <p className="text-xs">{date}</p>

                {/* Time (Small) */}
                <p className="text-xs">{time}</p>

                {/* Score (Extra Large & Centered) */}
                <p className="mt-2 text-xl text-center">{score}</p>
            </div>

            {/* Away Team Section */}
            <div className="sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 text-center sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                {/* Away Team Logo (Large & Rounded) */}
                <img src={a_logo} alt={awayTeamName} className="w-100 h-100 rounded-full mx-auto mb-2" />

                {/* Away Team Name (Medium & Centered) */}
                <p className="text-base text-center">{awayTeamName}</p>
            </div>
        </div>
    );
};

export default Rezultat;