import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Rasporedcic from './Rasporedcic'; // Assuming this component is properly defined
import { formatMatchDate } from '../../context/matchContext/MatchesActions';

function RasporedKluba({ raspored }) {
  const formattedSchedule = raspored.map((rasporedItem) => {
    const formattedDate = formatMatchDate(rasporedItem.Date);

    return (
      <Rasporedcic
        key={rasporedItem.MatchID}
        date={formattedDate}       // Ensure proper capitalization
        time={rasporedItem.Time || '--:--'}   // Assuming you may have a time field, or fallback to placeholder
        home={rasporedItem.HomeTeamName}
        away={rasporedItem.AwayTeamName}
      />
    );
  });

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
          <tbody>{formattedSchedule}</tbody>
        </table>
      </div>
    </div>
  );
}

export default RasporedKluba;
