import React from 'react';
import Table from './Table';

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
    <div className="overflow-x-auto my-10">
      <div className="header text-center text-sm mb-2 mt2">TABLICA</div>
      <table className="table-auto w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto mx-auto" style={{width:'60&'}} data-theme="night">
        <thead>
          <tr>
            <th className="p-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Rank</th>
            <th className="p-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Name</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">P</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">W</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">D</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">L</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">GF</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">GA</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">±</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Pts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">{rows}</tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
