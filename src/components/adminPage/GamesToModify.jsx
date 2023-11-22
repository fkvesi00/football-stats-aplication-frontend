import React,{useState} from 'react'

function GamesToModify({time,date,home,away, h_id, a_id, match_id}) {
  const [home_id, seth_id] = useState(h_id)
  const [away_id, seta_id] = useState(a_id)
  const [m_id, setm_id] = useState(match_id)
  return (
       <tr>
            <td>{date}</td>
            <td style={{textAlign:'center'}}>{time}</td>
            <td style={{textAlign:'end'}}>{home}</td>
            <td style={{backgroundColor:'#130F2A', fontSize:'20px',fontWeight: 'bold',color:'white',textAlign:'center'}}> VS </td>
            <td >{away}</td>
            <td><button>Click me</button></td>
      </tr>
  )
}

export default GamesToModify