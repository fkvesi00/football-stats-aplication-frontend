import React from "react"

function IgracTable({sezona, tim , app, goals}) {
   
    
   
    return (
        <tr data-theme='fantasy' style={{padding:'10px'}} >
          <td style={{borderRight: "1px solid black", textAlign:'center'}}>{sezona}</td>
          <td style={{borderRight: "1px solid black", textAlign:'center'}}>{tim}</td>
          <td style={{borderRight: "1px solid black", textAlign:'center'}}>{app}</td>
          <td style={{ textAlign:'center'}}>{goals}</td>
        </tr>
      )
}

export default IgracTable
