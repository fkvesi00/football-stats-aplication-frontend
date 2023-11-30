import React from 'react'
import { Link } from 'react-router-dom'

function PlayerTable({igrac, gol, zuti, crveni}) {
   
    
   
    return (
        <tr data-theme='fantasy' style={{padding:'10px'}} >
          <td style={{borderRight: "1px solid black", textAlign:'center'}}>{igrac}</td>
          <td style={{borderRight: "1px solid black", textAlign:'center'}}>{gol}</td>
          
        </tr>
      )
}

export default PlayerTable
