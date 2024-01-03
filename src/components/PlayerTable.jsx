import React from 'react'

function PlayerTable({igrac, gol}) {
    return (
        <tr data-theme='fantasy' style={{padding:'10px'}} >
          <td style={{borderRight: "1px solid black", textAlign:'center'}}>{igrac}</td>
          <td style={{borderRight: "1px solid black", textAlign:'center'}}>{gol}</td>
        </tr>
      )
}

export default PlayerTable
