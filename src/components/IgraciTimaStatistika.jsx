import React from 'react'

function IgraciTimaStatistika({counter,playerid, playerName, app, goals}) {
  return (
    <tr data-theme='fantasy' style={{padding:'10px'}} >
        <td style={{borderRight: "1px solid black", textAlign:'center', fontFamily: 'Lucida Console, Monaco, monospace'}}>{counter+1}</td>
        <td style={{borderRight: "1px solid black", textAlign: 'center', fontFamily: 'Lucida Console, Monaco, monospace', backgroundColor: '#0b5437', color: 'white',display:'flex',flexWrap:'wrap'}}>{playerName}</td>
        <td style={{borderRight: "1px solid black", textAlign:'center', fontFamily: 'Montserrat',fontWeight: 'bold'}} data-theme="garden">{goals}</td>
        <td style={{borderRight: "1px solid black", textAlign:'center', fontFamily: 'Montserrat'}}>{app}</td>
    </tr>
  )
}

export default IgraciTimaStatistika
