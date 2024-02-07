import React from 'react'

function IgraciTimaStatistika({counter,playerid, playerName, app, goals}) {
 // Split player name by spaces into an array of words
 const words = playerName.split(' ');

 // Check if the player name exceeds a certain length
 const maxLength = 18; // You can adjust this value as needed
 const isNameTooLong = playerName.length > maxLength;

 // If the name is too long, wrap the last word in a new row
 const playerNameContent = isNameTooLong
   ? <>
       {words.slice(0, -1).join(' ')}<br/>{words.slice(-1)}
     </>
   : playerName;

 return (
   <tr data-theme='fantasy' style={{ padding: '10px' }} >
       <td style={{ borderRight: "1px solid black", textAlign:'center', fontFamily: 'Lucida Console, Monaco, monospace' }}>{counter+1}</td>
       <td style={{ borderRight: "1px solid black", textAlign: 'left', fontFamily: 'Lucida Console, Monaco, monospace', backgroundColor: '#0b5437', color: 'white', display: 'flex', flexWrap: 'wrap' }}>{playerNameContent}</td>
       <td style={{ borderRight: "1px solid black", textAlign:'center', fontFamily: 'Montserrat', fontWeight: 'bold' }} data-theme="garden">{goals}</td>
       <td style={{ borderRight: "1px solid black", textAlign:'center', fontFamily: 'Montserrat' }}>{app}</td>
   </tr>
 )
}
export default IgraciTimaStatistika
