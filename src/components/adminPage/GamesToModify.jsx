import React from 'react';

function GamesToModify({ time, date, home, away, handleInputHomeScore, handleInputAwayScore }) {

  return (
    <tr>
      <td>{date}</td>
      <td style={{ textAlign: 'center' }}>{time}</td>
      <td>{home}</td>
      <td style={{ textAlign: 'center', backgroundColor: '#130F2A', fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label htmlFor="homeScore" style={{ marginBottom: '5px' }}>H Score:</label>
          <input id="homeScore" type="number" min='0' style={{ textAlign: 'center', width: '50px' }} onChange={handleInputHomeScore} />
          <label htmlFor="awayScore" style={{ marginTop: '5px' }}>A Score:</label>
          <input id="awayScore" type='number' min='0' style={{ textAlign: 'center', width: '50px' }} onChange={handleInputAwayScore} />
        </div>
      </td>
      <td>{away}</td>
    </tr>
  );
}

export default GamesToModify;