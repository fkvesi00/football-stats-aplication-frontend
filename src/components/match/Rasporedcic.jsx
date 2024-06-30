import React from 'react';
import { motion } from 'framer-motion';

function Rasporedcic({ time, date, home, away }) {
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="align-middle"
      data-theme="fantasy"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} // Set fontFamily once here
    >
      <td className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{date}</td>
      <td className="text-center p-3">{time}</td>
      <td className="text-center">
        <div className="p-1">{home}</div>
        <div className="p-1">vs</div>
        <div className="p-1">{away}</div>
      </td>
    </motion.tr>
  );
}

export default Rasporedcic;