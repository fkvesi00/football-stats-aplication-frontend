import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
function Utakmica({ MatchID,Date, Time, HomeTeamID, HomeTeamScore, AwayTeamName, }){
 

  return (
    <tr>
          <td>{Date}</td>
          <td style={{textAlign:'center'}}>{Time}</td>
          <td style={{textAlign:'end'}}>{HomeTeamID}</td>
          <td style={{backgroundColor:'#130F2A', fontSize:'20px',fontWeight: 'bold',color:'white',textAlign:'center'}}> {HomeTeamScore} </td>
          <td >{AwayTeamName}</td>
          <td><Link to={`/utakmica/${MatchID}`}><FontAwesomeIcon icon={faPlayCircle} /></Link></td>
    </tr>
  )
}

export default Utakmica
