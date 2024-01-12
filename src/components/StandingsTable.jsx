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
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">P</th>
            <th className="p-2">W</th>
            <th className="p-2">D</th>
            <th className="p-2">L</th>
            <th className="p-2">GF</th>
            <th className="p-2">GA</th>
            <th className="p-2">+-</th>
            <th className="p-2">Pts</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default StandingsTable;