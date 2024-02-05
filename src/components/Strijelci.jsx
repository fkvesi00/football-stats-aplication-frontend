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
<div className='flex justify-center flex-wrap'>
  <div className="overflow-x-auto">
    <table className="w-full table-compact mx-auto rounded-lg shadow-lg bg-green-700 text-white" data-theme='night'>
      <thead>
        <tr>
          <th className="sticky left-0 z-10 bg-green-700">#</th>
          <th className="sticky left-0 z-10 bg-green-700">
            <FontAwesomeIcon icon={faUser} />
          </th>
          <th>
            Tim
          </th>
          <th>
            <FontAwesomeIcon icon={faFutbol} />
          </th>
          <th>Nastupi</th>
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
