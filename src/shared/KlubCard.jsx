import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

function KlubCard({ id, ime, logo }) {
  return (
    <Link 
      to={`/klub/${id}`} 
      className="card w-64 bg-base-100 shadow-xl p-4 m-4 grow-on-hover hover:scale-105 hover:shadow-2xl transition-all duration-300" 
      data-theme="light"
    >
      <div className="card-body">
        <figure style={{ height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ maxHeight: "100%", maxWidth: "100%" }} />
        </figure>
        <h2 className="card-title text-center mt-4">{ime}</h2>
        <p className="text-center text-gray-600 mt-2">Pritisni za detalje kluba</p>
      </div>
    </Link>
  );
}

export default KlubCard;
