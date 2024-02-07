import React from 'react';
import {motion} from 'framer-motion'
import Table from './Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrophy   } from '@fortawesome/free-solid-svg-icons';

const StandingsTable = ({ tablica }) => {
  const rows = tablica.map((clubStats, i) => (
    <motion.tr
      key={i}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Table
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
    </motion.tr>
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
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hidden sm:table-cell">GF</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hidden sm:table-cell">GA</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">±</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Pts</th>
          </tr>
        </thead>
        <motion.tbody
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="divide-y divide-gray-300"
        >
          {rows}
        </motion.tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
