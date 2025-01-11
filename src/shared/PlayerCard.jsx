import React from 'react'
import { Link } from 'react-router-dom'
function PlayerCard({ime,godine,nacionalnost,slika,id}) {
  const imgPath = id === 106 ? `/images/players/nikola/${id}.jpeg` : "images/dummy-profile.jpg" 
  
  return (
    <Link to={`/igrac/${id}`}>
      
    <div className="card w-64 bg-base-150 shadow-xl p-4 m-2 " >
    <figure style={{height:"150px"}}><img src={imgPath} alt="" /></figure>
    <div className="card-body">
      <h2 className="card-title">{ime}</h2>
      <p className="text-center text-gray-600 mt-2 font-serif italic">Pritisni za detalje igraca</p>
    </div>
    
  </div>
  </Link>
  )
}

export default PlayerCard