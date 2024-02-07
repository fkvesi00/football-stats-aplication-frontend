import React from 'react'
import { motion } from 'framer-motion';

function Rasporedcic({ time, date, home, away, id }) {
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="align-middle"
      data-theme="fantasy"
    >
      <td className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{date}</td>
      <td className="text-center p-3">{time}</td>
      <td className="text-center">
        <div className="p-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{home}</div>
        <div className="p-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>vs</div>
        <div className="p-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{away}</div>
      </td>
    </motion.tr>
  );
}

export default Rasporedcic;