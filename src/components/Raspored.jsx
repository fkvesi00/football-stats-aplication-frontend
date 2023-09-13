import React, { useEffect, useState } from 'react'
import './header.css'
import Rasporedcic from './Rasporedcic'

function Raspored({raspored}) {
  
  const nizRasporeda = raspored.map((raspored, i) => {
    const birthDate = new Date(raspored.date);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = birthDate.toLocaleDateString('en-US', options);
    return <Rasporedcic key={i} date={formattedDate} time={raspored.time} home={raspored.h_team}  away={raspored.a_team}/>     
})

  return (
    <div className="overflow-x-auto m-0 mb-10 mt-10" >
      <div className='flex gap-4 justify-center p-10'>
      <h2 className="header">Raspored</h2>
      {/* <select className='select'>
            <option value="option1">Kolo 1</option>
            <option value="option2">Kolo 2</option>
            <option value="option3">Kolo 3</option>
         </select> */}
      </div>
    <div className="table-responsive">
    <table className="table table-compact mx-auto" style={{width:"50%"}} data-theme="dark">
    {/* head */}
    <thead>
      <tr>
        <th>Date</th>
        <th style={{textAlign:'center'}}>Time</th>
        <th style={{textAlign:'end'}}>Home Team</th>
        <th></th>
        <th>Away Team</th>
      </tr>
    </thead>
    <tbody>
      {nizRasporeda}
    </tbody>
  </table>
</div>
</div>
  )
}

export default Raspored
