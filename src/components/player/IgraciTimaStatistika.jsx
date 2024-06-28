import React from 'react';
import { motion } from 'framer-motion';

function IgraciTimaStatistika({ counter, playerName, app, goals }) {
  const words = playerName.split(' ');
  const maxLength = 18; 
  const isNameTooLong = playerName.length > maxLength;

  const playerNameContent = isNameTooLong
    ? <>
        {words.slice(0, -1).join(' ')}<br/>{words.slice(-1)}
      </>
    : playerName;

  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-theme='fantasy'
      style={{ padding: '10px' }}
    >
      <td style={{ borderRight: "1px solid black", textAlign: 'center', fontFamily: 'Lucida Console, Monaco, monospace' }}>{counter + 1}</td>
      <td style={{ borderRight: "1px solid black", textAlign: 'left', fontFamily: 'Lucida Console, Monaco, monospace', backgroundColor: '#0b5437', color: 'white', display: 'flex', flexWrap: 'wrap' }}>{playerNameContent}</td>
      <td style={{ borderRight: "1px solid black", textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 'bold' }} data-theme="garden">{goals}</td>
      <td style={{ borderRight: "1px solid black", textAlign: 'center', fontFamily: 'Montserrat' }}>{app}</td>
    </motion.tr>
  )
}

export default IgraciTimaStatistika;