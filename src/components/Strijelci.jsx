import React from 'react'
import StrijelciTable from './StrijelciTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol,faUser } from '@fortawesome/free-solid-svg-icons';

function Strijelci({statistika}) {

    const playerStatistic = statistika.map((player,i) => {
        const {playerid, playername, appearances, goals, teamname} = player
        return <StrijelciTable counter={i} playerid={playerid} playerName={playername} app={appearances} goals={goals} teamName={teamname}/>
      })

  return (
    <div>
        <div className='flex justify-center flex-wrap'>
          <table className="table table-compact mx-auto rounded-lg shadow-lg" style={{ width: "60%", backgroundColor: "#556B2F", color: "white" }} data-theme='night'>
            <thead>
              <tr>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>#
                </th>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>
                <FontAwesomeIcon icon={faUser} />
                </th>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>
                <FontAwesomeIcon icon={faFutbol} />
                </th>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>Nastupi
                </th>
              </tr>
            </thead>
            <tbody>
              {playerStatistic}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Strijelci
