import React from 'react';

const Rezultat = ({ matchID, date, time, homeTeamName, score, awayTeamName, a_id, h_id }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Home Team Section */}
      <div style={{ flex: '1', textAlign: 'center', marginRight: '16px' }}>
        {/* Home Team Logo (Large) */}
        <img src={h_id} alt={homeTeamName} style={{ width: '100px', height: '100px' }} />

        {/* Home Team Name (Medium) */}
        <p style={{ fontSize: 'medium', marginTop: '8px' }}>{homeTeamName}</p>
      </div>

      {/* Match Information Section (Small) */}
      <div style={{ flex: '1', textAlign: 'center', marginRight: '16px' }}>
        {/* Date (Small) */}
        <p style={{ fontSize: 'small' }}>{date}</p>

        {/* Time (Small) */}
        <p style={{ fontSize: 'small' }}>{time}</p>

        {/* Score (Large) */}
        <p style={{ fontSize: 'large', marginTop: '8px' }}>{score}</p>
      </div>

      {/* Away Team Section */}
      <div style={{ flex: '1', textAlign: 'center' }}>
        {/* Away Team Logo (Large) */}
        <img src={a_id} alt={awayTeamName} style={{ width: '100px', height: '100px' }} />

        {/* Away Team Name (Medium) */}
        <p style={{ fontSize: 'medium', marginTop: '8px' }}>{awayTeamName}</p>
      </div>
    </div>
  );
};

export default Rezultat;