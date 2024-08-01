import {useEffect, useContext, useState} from 'react';
import Table from './Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrophy   } from '@fortawesome/free-solid-svg-icons';
import MatchContext from '../../context/matchContext/MatchContext';
import ClubContext from '../../context/clubContext/ClubContext';
import StatsContext from '../../context/statsContext/StatsContext';
import { fetchClubs } from '../../context/clubContext/ClubActions';
import { fetchAllMatches, matchFormat } from '../../context/matchContext/MatchesActions';
import { calculateTable } from '../../context/statsContext/StatsActions';

const StandingsTable = () => {
  const {allMatches, dispatch: matchDispatch} = useContext(MatchContext)
  const {clubs, teamMatches, dispatch: clubDispatch} = useContext(ClubContext)
  const {table, dispatch: statsDispatch} = useContext(StatsContext)
  const [allGamesByClub, setAllGamesByClub] = useState([])
  
  useEffect(() => {
    const loadAllMatches = async () => {
      try {
        const allMatches = await fetchAllMatches();
        matchDispatch({
          type: 'GET_ALL_MATCHES',
          payload: matchFormat(allMatches),
        });
      } catch (error) {
        console.error('Error fetching all matches', error);
      }
    };

    const loadClubs = async () => {
      try {
        const clubsData = await fetchClubs();
        clubDispatch({
          type: 'GET_CLUBS',
          payload: clubsData,
        });
      } catch (error) {
        console.error('Error fetching clubs', error);
      }
    };

    loadAllMatches();
    loadClubs();
  }, [matchDispatch, clubDispatch]);
  

  useEffect(() => {
    if (allMatches.length > 0 && clubs.length > 0) {
      const playedMatches = allMatches.filter(utakmica => utakmica.score !== null);
      const sortedMatches = playedMatches.sort((a, b) => new Date(b.date) - new Date(a.date));
      const gamesByClub = teamMatches(clubs, sortedMatches);
      setAllGamesByClub(gamesByClub);
    }
  }, [allMatches, clubs]);

  useEffect(() => {
    if (allGamesByClub.length > 0) {
      statsDispatch({
        type:'SET_TABLE',
        payload: calculateTable(allGamesByClub)
    })
    }
  }, [allGamesByClub]); 

  const sortedStats = table.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    } else {
      const clubB = b.gf - b.ga;
      const clubA = a.gf - a.ga;
      return clubA - clubB;
    }
  });

  const rows = sortedStats.map((clubStats, i) => (
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
          <div>Međusobni ogled glavno mjerilo</div>
          <div>za dvije momčadi sa istim brojem bodova</div> 
          <div>*za drugo i treće mjesto:</div>
          <div>AMNK OPUZEN - MNK VID 2:0/0:0</div>
        </div>
      </div>
    </div>
  );
};

export default StandingsTable;