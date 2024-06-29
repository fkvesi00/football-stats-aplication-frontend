import React, {  useState } from 'react';
import '../layout/header.css';
import Rasporedcic from './Rasporedcic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar  } from '@fortawesome/free-solid-svg-icons';
import {sortAndFormatSchedule} from '../../context/scheduleContext/ScheduleActions'

function Raspored({ raspored }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const formattedSchedule = sortAndFormatSchedule(raspored).map((raspored) => (
    <Rasporedcic
      key={raspored.key}
      date={raspored.date}
      time={raspored.time}
      home={raspored.home}
      away={raspored.away}
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
        <h2 className="header">{'Raspored'} <FontAwesomeIcon icon={faCalendar} style={{ color: 'black' }}/></h2>
      </div>
      <div className="table-responsive">
        <table className="table table-compact mx-auto" style={{ width: '50%' }} data-theme="dark">
          {/* head */}
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
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-gray-700">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Raspored;