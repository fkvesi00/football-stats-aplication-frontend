import React from 'react';
import Table from './Table';

const StandingsTable = ({tablica}) => {
   const rows = tablica.map((clubStats,i) => (
    <Table key={i} rank={i+1} name={clubStats.name} played={clubStats.won+clubStats.lost+clubStats.draw} 
      w={clubStats.won} d={clubStats.draw} l={clubStats.lost}
      gf={clubStats.gf} ga={clubStats.ga} points={clubStats.points}  id={clubStats.id}
    />
  )); 

  return (
<div className="overflow-x-auto w-full my-10 ">
  <div className='header'>TABLICA</div>
  <table className="table table-compact mx-auto" style={{width:"60%"}} data-theme='night' >
    <thead>
      <tr>
        <th>#</th> 
        <th>Name</th> 
        <th>P</th>
        <th>W</th> 
        <th>D</th> 
        <th>L</th> 
        <th>GF</th> 
        <th>GA</th>
        <th>+-</th>
        <th>Pts</th>
      </tr>
    </thead> 
    <tbody>
      {rows}
    </tbody> 
  </table>
  </div>
  );
};

export default StandingsTable;