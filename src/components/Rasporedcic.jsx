import React, { useState } from 'react'

function Rasporedcic({time,date,home,away,id}) {
  
  
  return (
    <tr>
          <td>{date}</td>
          <td style={{textAlign:'center'}}>{time}</td>
          <td style={{textAlign:'end'}}>{home}</td>
          <td style={{backgroundColor:'#130F2A', fontSize:'20px',fontWeight: 'bold',color:'white',textAlign:'center'}}> VS </td>
          <td >{away}</td>
    </tr>
  )
}

export default Rasporedcic
