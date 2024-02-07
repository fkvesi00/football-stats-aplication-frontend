import React from 'react'
import Utakmica from './Utakmica';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol,faUser } from '@fortawesome/free-solid-svg-icons';

function UtakmiceKluba({utakmice}) {
    const nizUtakmica = utakmice.map((utakmica,i)=>{
    
        //console.log(utakmica)
        const birthDate = new Date(utakmica.date);
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const formattedDate = birthDate.toLocaleDateString('hr-HR', options);
        return <Utakmica key={i} MatchID={utakmica.match_id} Date={formattedDate} Time={utakmica.time}  
        HomeTeamID= {utakmica.h_team}  HomeTeamScore={utakmica.score} AwayTeamName = {utakmica.a_team} a_id = {utakmica.a_id} h_id = {utakmica.h_id}
        />
      })

  return (
      <div className="overflow-x-auto m-0 mt-10 mb-10">
      <div className="flex gap-4 justify-center p-3">
        <h2 className="header">{'Utakmice'} <FontAwesomeIcon icon={faFutbol} style={{color:'black'}}/></h2>
      </div>
      <div className="table-responsive">
      <table className="table table-compact mx-auto m-2 p-2 sm:w-6/7 md:w-6/7 lg:w-2/3 " data-theme="dark">
          <thead>
            <tr>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Date</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Matchup</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ textAlign: 'center' }}>Score</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ textAlign: 'center' }}>Link</th>
            </tr>
          </thead>
          <tbody>{nizUtakmica}</tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4">
      </div>
    </div>
  )
}

export default UtakmiceKluba
