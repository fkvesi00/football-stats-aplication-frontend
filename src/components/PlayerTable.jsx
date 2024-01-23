import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

function PlayerTable({ igrac, gol }) {
  // Create an array with the length equal to the number of goals
  const goalsArray = Array.from({ length: gol }, (_, index) => index);

  return (
    <tr data-theme='fantasy' style={{ padding: '10px', textAlign: 'center' }}>
      <td style={{ borderRight: '1px solid black', textAlign: 'center' }}>{igrac}</td>
      <td style={{ borderRight: '1px solid black', textAlign: 'center' }}>
        {/* Map over the goalsArray to render the football icons */}
        {goalsArray.map((goalIndex) => (
          <FontAwesomeIcon key={goalIndex} icon={faFutbol} style={{ margin: '0 2px' }} />
        ))}
      </td>
    </tr>
  );
}

export default PlayerTable;