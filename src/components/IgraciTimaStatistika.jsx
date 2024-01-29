import React from 'react'

function IgraciTimaStatistika({playerid, playerName, app, goals}) {
  return (
    <tr data-theme='fantasy' style={{padding:'10px'}} >
        <td style={{borderRight: "1px solid black", textAlign:'center'}}>{playerName}</td>
        <td style={{borderRight: "1px solid black", textAlign:'center'}}>{app}</td>
        <td style={{borderRight: "1px solid black", textAlign:'center'}}>{goals}</td>
    </tr>
  )
}

export default IgraciTimaStatistika
