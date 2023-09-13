import React from 'react'
import Utakmica from './Utakmica'

function Utakmice({utakmice}) {

  const nizUtakmica = utakmice.map((utakmica,i)=>{
    console.log(utakmica)
    const birthDate = new Date(utakmica.date);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = birthDate.toLocaleDateString('en-US', options);
    return <Utakmica key={i} MatchID={utakmica.match_id} Date={formattedDate} Time={utakmica.time}  
    HomeTeamID= {utakmica.h_team}  HomeTeamScore={utakmica.score} AwayTeamName = {utakmica.a_team} 
    />
  })

  
  return (
    
    <div className="overflow-x-auto mt-20 mb-10" >
      <div className='flex gap-4 justify-center p-10'>
        <h2 className="header">Utakmice</h2>
   {/*        <select className='select'>
            <option value="option1">Kolo 1</option>
            <option value="option2">Kolo 2</option>
            <option value="option3">Kolo 3</option>
         </select> */}
      </div>
    <div className="table-responsive">
    <table className="table table-compact mx-auto" style={{width:"50%"}} data-theme="retro">
      {/* head */}
      <thead>
        <tr>
          <th>Date</th>
          <th style={{textAlign:'center'}}>Time</th>
          <th style={{textAlign:'end'}}>Home Team</th>
          <th style={{textAlign:'center'}}>Score</th>
          <th>Away Team</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       {nizUtakmica}
      </tbody>
    </table>
  </div>
  </div>
  )
}

export default Utakmice
