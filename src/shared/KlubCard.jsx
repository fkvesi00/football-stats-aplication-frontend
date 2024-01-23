import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

function KlubCard({id,ime,logo}) {
  {console.log(id,ime)}
  return (
    
    <Link to={`/klub/${id}`} className="card w-64 bg-base-100 shadow-xl p-4 m-4 grow-on-hover grow-on-hover:hover" data-theme='light' >
    <div className="card-body" >
    <figure style={{height:"200px"}}><img src={logo} alt={'logo'} /></figure>
      <h2 className="card-title">{ime}</h2>
    </div>
  </Link>
  )
}

export default KlubCard