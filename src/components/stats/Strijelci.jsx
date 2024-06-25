import React from 'react';
import StrijelciTable from '../table/StrijelciTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFutbol } from '@fortawesome/free-solid-svg-icons';

const tableContainerStyles = "overflow-x-auto";
const tableStyles = "w-full table-compact mx-auto rounded-lg shadow-lg text-white";
const stickyHeaderStyles = "sticky left-0 z-10";

const mobileStyles = `
  @media (max-width: 600px) {
    .${tableContainerStyles} {
      overflow-x: auto;
    }

    .${tableStyles} {
      width: 100%;
    }

    .${stickyHeaderStyles} {
      position: relative !important;
      color: white;
    }
  }
`;

const Strijelci = ({ statistika }) => {
  const playerStatistic = statistika.map((player, i) => (
    <StrijelciTable
      key={player.playerid}
      counter={i}
      playerid={player.playerid}
      playerName={player.playername}
      app={player.appearances}
      goals={player.goals}
      teamName={player.teamname}
    />
  ));

  return (
    <div className='flex justify-center flex-wrap m-5'>
      <style>{mobileStyles}</style>
      <div className={tableContainerStyles}>
        <table className={tableStyles} data-theme='night'>
          <thead>
            <tr>
              <th className={stickyHeaderStyles}>#</th>
              <th className={stickyHeaderStyles}>
                <FontAwesomeIcon icon={faUser} />
              </th>
              <th>Tim</th>
              <th>Nastupi</th>
              <th>
                  <FontAwesomeIcon icon={faFutbol}    />
              </th>
            </tr>
          </thead>
          <tbody>{playerStatistic}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Strijelci;