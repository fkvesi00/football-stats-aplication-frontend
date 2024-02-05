import React from 'react'

function StrijelciTable({counter,playerid, playerName, app, goals,teamName}) {
  return (
    <tr data-theme='fantasy' style={{padding:'10px'}} >
        <td style={{borderRight: "1px solid black", textAlign:'center', fontFamily: 'Lucida Console, Monaco, monospace'}}>{counter+1}</td>
        <td style={{borderRight: "1px solid black", textAlign: 'left', fontFamily: 'Lucida Console, Monaco, monospace', backgroundColor: '#0b5437', color: 'white'}}>{playerName}</td>
        <td style={{borderRight: "1px solid black", textAlign:'left', fontFamily: 'Montserrat'}}>{teamName}</td>
        <td style={{borderRight: "1px solid black", textAlign:'center', fontFamily: 'Montserrat'}}>{goals}</td>
        <td style={{borderRight: "1px solid black", textAlign:'center', fontFamily: 'Montserrat'}}>{app}</td>
    </tr>
  )
}

export default StrijelciTable
