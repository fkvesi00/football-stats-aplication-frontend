import React from 'react';

const Rezultat = ({ matchID, date, time, homeTeamName, score, awayTeamName, a_id, h_id }) => {
    const h_logo = `/images/${h_id}.jpg`;
    const a_logo = `/images/${a_id}.jpg`;
    
    let adjustedScore = score;
    if (matchID === 452) {
      adjustedScore = '10' + score.slice(1);
    } else if (matchID === 458) {
      adjustedScore = '11' + score.slice(1);
    }
    return (
        <div className="flex flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-between">
            <div className="text-center mb-2 p-4">
                <img src={h_logo} alt={homeTeamName} className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 rounded-full mx-auto mb-1" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Lucida Console, Monaco, monospace' }}>{homeTeamName}</p>
            </div>
            <div className="flex flex-col items-center mb-2 p-4">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{date}</p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{time}</p>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-1" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bold' }}>{adjustedScore}</h1>
            </div>
            <div className="text-center p-4">
                <img src={a_logo} alt={awayTeamName} className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 rounded-full mx-auto mb-1" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl " style={{ fontFamily: 'Lucida Console, Monaco, monospace' }}>{awayTeamName}</p>
            </div>
        </div>
    );
};

export default Rezultat;