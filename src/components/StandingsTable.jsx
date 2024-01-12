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
    <div className="overflow-x-auto my-10 p-2">
      <div className="header text-center">TABLICA</div>
      <table className="table table-compact mx-auto w-full" data-theme="night">
        <thead>
          <tr>
            <th className="p-2 text-xs">Rank</th>
            <th className="p-2 text-xs">Name</th>
            <th className="p-2 text-xs">P</th>
            <th className="p-2 text-xs">W</th>
            <th className="p-2 text-xs">D</th>
            <th className="p-2 text-xs">L</th>
            <th className="p-2 text-xs">GF</th>
            <th className="p-2 text-xs">GA</th>
            <th className="p-2 text-xs">+-</th>
            <th className="p-2 text-xs">Pts</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default StandingsTable;