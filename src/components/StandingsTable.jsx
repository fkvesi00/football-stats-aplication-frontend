import React from 'react';
import Table from './Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrophy   } from '@fortawesome/free-solid-svg-icons';

const StandingsTable = ({ tablica }) => {
  const rows = tablica.map((clubStats, i) => (
    <Table
      key={i}
      rank={i + 1}
      name={clubStats.name}
      played={clubStats.won + clubStats.lost + clubStats.draw}
      w={clubStats.won}
      d={clubStats.draw}
      l={clubStats.lost}
      gf={clubStats.gf}
      ga={clubStats.ga}
      points={clubStats.points}
      id={clubStats.id}
    />
  ));

  return (
    <div className="overflow-x-auto my-10 mr-1 ml-1 mt-5 mb-5 mx-auto max-w-[2/3]">
      <div className="header text-center mb-2 mt-2">
        {'Ljestvica'} <FontAwesomeIcon icon={faTrophy} style={{ color: 'gold' }}/>
      </div>
      <table className="table-auto mx-auto" data-theme="night">
        <thead>
          <tr>
            <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Rank</th>
            <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Name</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">P</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">W</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">D</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">L</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">+-</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hidden sm:table-cell">±</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Pts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">{rows}</tbody>
      </table>
  
      <div className="text-center mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
        <div className="font-bold">Napomena:</div>
        <div className="ml-4 mt-2">
          <div>MNK NEUM -6 bodova;</div>
          <div>Nedolazak na utakmicu dvaput zaredom,</div>
          <div>odustajanje od daljnjeg natjecanja.</div>
        </div>
      </div>
  
      <div className="text-center mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
        <div className="font-bold">Napomena:</div>
        <div className="ml-4 mt-2">
          <div>Glavno mjerilo na kraju prvenstva</div>
          <div>za ekipe sa istim brojem bodova,</div> 
          <div>prvo je međusobni ogled a</div>
          <div>potom ukupna gol razlika.</div>
        </div>
      </div>
    </div>
  );
};

export default StandingsTable;
