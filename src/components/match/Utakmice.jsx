import React, { useContext, useEffect, useState } from 'react';
import Utakmica from './Utakmica';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../calculations/Paganation'; 
import MatchContext from '../../context/matchContext/MatchContext';
import { fetchAllMatches, matchFormat } from '../../context/matchContext/MatchesActions';

function Utakmice({ seasonid }) {
  const { allMatches, dispatch } = useContext(MatchContext);
  const [currentPage, setCurrentPage] = useState(1);

  // Set items per page conditionally based on seasonid
  const itemsPerPage = seasonid === 2 ? 5 : 6;

  useEffect(() => {
    const loadAllMatches = async () => {
      try {
        const allMatches = await fetchAllMatches(seasonid);
        dispatch({
          type: 'GET_ALL_MATCHES',
          payload: matchFormat(allMatches),
        });
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    loadAllMatches();
  }, [seasonid, dispatch]);

  // Filter, reverse, and format matches
  const formattedMatches = allMatches
    .filter(utakmica => utakmica.score !== null)
    .reverse()
    .map((utakmica, i) => (
      <Utakmica
        key={i}
        MatchID={utakmica.match_id}
        Date={utakmica.date}
        Time={utakmica.time}
        HomeTeamID={utakmica.h_team}
        score={utakmica.score}
        AwayTeamName={utakmica.a_team}
        a_id={utakmica.a_id}
        h_id={utakmica.h_id}
      />
    ));

  // Pagination logic
  const totalGames = formattedMatches.length;
  const totalPages = Math.ceil(totalGames / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = formattedMatches.slice(startIndex, endIndex);

  // Reset to the first page if seasonid changes
  useEffect(() => {
    setCurrentPage(1);
  }, [seasonid]);

  const handlePrevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  const handleNextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));

  return (
    <div className="overflow-x-auto m-0 mt-10 mb-10">
      <div className="flex gap-4 justify-center p-3">
        <h2 className="header">
          {'Utakmice'} <FontAwesomeIcon icon={faFutbol} style={{ color: 'black' }} />
        </h2>
      </div>
      <div className="table-responsive">
        <table className="table table-compact mx-auto m-2 p-2 sm:w-6/7 md:w-6/7 lg:w-2/3" data-theme="dark">
          <thead>
            <tr>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Date</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Matchup</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ textAlign: 'center' }}>Score</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ textAlign: 'center' }}>Link</th>
            </tr>
          </thead>
          <tbody>{currentGames}</tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}

export default Utakmice;