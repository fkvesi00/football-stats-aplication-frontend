import React, { useContext, useEffect, useState } from 'react';
import '../layout/header.css';
import Rasporedcic from './Rasporedcic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { sortAndFormatSchedule } from '../../context/scheduleContext/ScheduleActions';
import Pagination from '../calculations/Paganation';
import ScheduleContext from '../../context/scheduleContext/ScheduleContext';
import { matchFormat } from '../../context/matchContext/MatchesActions';
import { fetchGamesBySeason } from '../../context/scheduleContext/ScheduleActions';

function Raspored( ) {
  const {schedule, dispatch} = useContext(ScheduleContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [seasonid, setSeasonid] = useState(1)
  
  useEffect(() => {
    const loadGamesBySeason = async () => {
      const scheduleBySeason = await fetchGamesBySeason(seasonid)

      dispatch({
          type: 'GET_SCHEDULE',
          payload: matchFormat(scheduleBySeason)
      })
    }
    loadGamesBySeason()
  },[])

  const allSchedule = schedule.filter(utakmica => utakmica.score === null)

  const formattedSchedule = sortAndFormatSchedule(allSchedule).map((rasporedItem) => (
    <Rasporedcic
      key={rasporedItem.key}
      date={rasporedItem.date}
      time={rasporedItem.time}
      home={rasporedItem.home}
      away={rasporedItem.away}
    />
  ));

  const totalGames = formattedSchedule.length;
  const totalPages = Math.ceil(totalGames / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = formattedSchedule.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="overflow-x-auto m-0 mb-10 mt-10">
      <div className="flex gap-4 justify-center p-5">
        <h2 className="header">
          {'Raspored'} <FontAwesomeIcon icon={faCalendar} style={{ color: 'black' }} />
        </h2>
      </div>
      <div className="table-responsive">
        <table className="table table-compact mx-auto" style={{ width: '50%' }} data-theme="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th style={{ textAlign: 'center' }}>Time</th>
              <th style={{ textAlign: 'center' }}>Matchup</th>
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

export default Raspored;