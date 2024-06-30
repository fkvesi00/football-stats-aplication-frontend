import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Utakmica({ MatchID, Date, HomeTeamID, HomeTeamScore, AwayTeamName, a_id, h_id }) {
  const h_logo = `/images/${h_id}.jpg`;
  const a_logo = `/images/${a_id}.jpg`;

  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="align-middle"
      data-theme="fantasy"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} // Set fontFamily once here
    >
      <td className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{Date}</td>
      <td className="text-center">
        <div className="flex items-center p-1">
          <img src={h_logo} alt={`Logo for ${HomeTeamID}`} width="30" height="30" className="mr-2 rounded-full" />
          <span>{HomeTeamID}</span>
        </div>
        <div className="flex items-center p-1">
          <img src={a_logo} alt={`Logo for ${AwayTeamName}`} width="30" height="30" className="mr-2 rounded-full" />
          <span>{AwayTeamName}</span>
        </div>
      </td>
      <td className="text-center p-1 text-sm sm:text-m md:text-base lg:text-lg xl:text-lg 2xl:text-xl" style={{ backgroundColor: '#130F2A', fontWeight: 'bold', color: 'white' }}>
        <div className='p-1'>{HomeTeamScore[0]}</div>
        <div className='p-1'>{HomeTeamScore[2]}</div>
      </td>
      <td className="text-center p-1">
        <Link to={`/utakmica/${MatchID}`}>
          <button className='btn btn-ghost p-2'>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>
      </td>
    </motion.tr>
  );
}

export default Utakmica;