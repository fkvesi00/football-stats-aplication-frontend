import React from 'react'

function IgraciTimaStatistika({counter,playerid, playerName, app, goals}) {
  return (
    <tr data-theme='fantasy' style={{padding:'10px'}} >
        <td style={{borderRight: "1px solid black", textAlign:'center'}}>{counter+1}</td>
        <td style={{borderRight: "1px solid black", textAlign:'center'}}>{playerName}</td>
        <td style={{borderRight: "1px solid black", textAlign:'center'}}>{goals}</td>
        <td style={{borderRight: "1px solid black", textAlign:'center'}}>{app}</td>
    </tr>
  )
}

export default IgraciTimaStatistika
