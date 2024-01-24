import React from 'react'
import { Link } from 'react-router-dom'
function PlayerCard({ime,godine,nacionalnost,slika,id}) {
  return (
    <Link to={`/igrac/${id}`}>
      
    <div className="card w-64 bg-base-100 shadow-xl p-4 m-2 " >
    <figure style={{height:"100px"}}><img src="/images/dummy-profile.jpg" alt="" /></figure>
    <div className="card-body">
      <h2 className="card-title">{ime}</h2>
      <p>Godina: {godine}</p>
      <p>Nacionalnost: {nacionalnost}</p>
    </div>
    
  </div>
  </Link>
  )
}

export default PlayerCard