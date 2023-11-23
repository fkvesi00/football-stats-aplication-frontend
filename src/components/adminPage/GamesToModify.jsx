import React,{useState} from 'react'

function GamesToModify({time,date,home,away, handleInputHomeScore, handleInputAwayScore}) {

  return (
       <tr>
            <td>{date}</td>
            <td style={{textAlign:'center'}}>{time}</td>
            <td style={{textAlign:'end'}}>{home}</td>
            <td style={{backgroundColor:'#130F2A', fontSize:'20px',fontWeight: 'bold',color:'white',textAlign:'center'}}> 
            <input type="number" min='0' style={{ textAlign: 'center' }} onChange={handleInputHomeScore}/>
            VS 
            <input type='number' min='0' style={{ textAlign: 'center' }} onChange={handleInputAwayScore}/>
            </td>
            <td >{away}</td>
      </tr>
  )
}

export default GamesToModify