import React from 'react';
import { motion } from 'framer-motion';

function StrijelciTable({ counter, playerName, teamName, goals, app }) {
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="border-b border-gray-300"
      data-theme='fantasy'
      style={{ padding: '10px' }}
    >
      <td style={{ borderRight: "1px solid black", textAlign: 'center', fontFamily: 'Lucida Console, Monaco, monospace' }}>{counter + 1}</td>
      <td style={{ borderRight: "1px solid black", textAlign: 'left', fontFamily: 'Lucida Console, Monaco, monospace', backgroundColor: '#0b5437', color: 'white' }}>{playerName}</td>
      <td style={{ borderRight: "1px solid black", textAlign: 'left', fontFamily: 'Montserrat' }}>{teamName}</td>
      <td style={{ borderRight: "1px solid black", textAlign: 'center', fontFamily: 'Montserrat' }}>{app}</td>
      <td style={{ borderRight: "1px solid black", textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 'bold' }} data-theme="garden">{goals}</td>
    </motion.tr>
  )
}

export default StrijelciTable;