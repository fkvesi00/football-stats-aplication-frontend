import React from 'react'

function GamesToModify({ time, date, home, away, handleInputHomeScore, handleInputAwayScore }) {

  return (
    <tr>
      <td>{date}</td>
      <td style={{ textAlign: 'center' }}>{time}</td>
      <td style={{ textAlign: 'end' }}>{home}</td>
      <td style={{ backgroundColor: '#130F2A', fontSize: '20px', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="homeScore">H Score:</label>
          <input id="homeScore" type="number" min='0' style={{ textAlign: 'center', marginBottom: '5px' }} onChange={handleInputHomeScore} />
          <label htmlFor="awayScore">A Score:</label>
          <input id="awayScore" type='number' min='0' style={{ textAlign: 'center' }} onChange={handleInputAwayScore} />
        </div>
      </td>
      <td>{away}</td>
    </tr>
  )
}

export default GamesToModify
