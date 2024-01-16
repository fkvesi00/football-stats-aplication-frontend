import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
function Utakmica({ MatchID,Date, HomeTeamID, HomeTeamScore, AwayTeamName, }){
 

  return (
    <tr>
      <td className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{Date}</td>
      <td style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'Arial, Helvetica, sans-serif'}}>{HomeTeamID}</div>
       <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{AwayTeamName}</div>
      </td>
      <td className="text-center p-2 text-center text-sm sm:text-m md:text-base lg:text-lg xl:text-lg 2xl:text-xl " style={{backgroundColor:'#130F2A',fontWeight: 'bold',color:'white',textAlign:'center'}}>
        <div>{HomeTeamScore[0]}</div>
        <div>{HomeTeamScore[2]}</div>
      </td>
      <td className="flex justify-center items-center">
        <Link to={`/utakmica/${MatchID}`}>
          <FontAwesomeIcon icon={faPlayCircle} />
        </Link>
      </td>
    </tr>
  )
}

export default Utakmica