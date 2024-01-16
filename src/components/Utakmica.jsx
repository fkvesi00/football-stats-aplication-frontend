import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
function Utakmica({ MatchID,Date, HomeTeamID, HomeTeamScore, AwayTeamName, }){
 

  return (
    <tr>
    <td style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '16px' }}>{Date}</td>
    <td style={{ textAlign: 'center' }}>
       <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '16px' }}>{HomeTeamID}</div>
       <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '16px' }}>{AwayTeamName}</div>
    </td>
    <td style={{backgroundColor:'#130F2A', fontSize:'20px',fontWeight: 'bold',color:'white',textAlign:'center'}}>
      <div>{HomeTeamScore[0]}</div>
      <div>{HomeTeamScore[2]}</div>
    </td>
          <td><Link to={`/utakmica/${MatchID}`}><FontAwesomeIcon icon={faPlayCircle} /></Link></td>
    </tr>
  )
}

export default Utakmica
