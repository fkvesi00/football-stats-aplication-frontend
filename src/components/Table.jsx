import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Table({ rank, name, played, w, d, l, gf, ga, points, id }) {
  const logo = `/images/${id}.jpg`;
  
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-theme='fantasy'
      className='p-2 m-2'
    >
      <td className='bg-neutral text-white w-3 h-3 rounded-full text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
        <div className="flex items-center justify-center p-2 pb-4">
          {rank}
        </div>
      </td>
      <td className='p-1 pb-4 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
         <Link to={`klub/${id}`} className="flex items-center">
            <img src={logo} alt={`Logo for ${name}`} width="30" height="30" className="mr-2 rounded-full" />
            <span>{name} {id === 10 && <strong>(-6)</strong>}</span>
          </Link>
      </td>
      <td className='text-center p-1 pb-4 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{played}</td>
      <td className='text-center p-1 pb-4 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{w}</td>
      <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{d}</td>
      <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{l}</td>
      <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl '>({gf}:{ga})</td>
      <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hidden sm:table-cell'>{gf - ga}</td>
      <td className='text-center p-1 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl' style={{ fontWeight: 'bold' }} data-theme="garden">{points}</td>
    </motion.tr>
  )
}

export default Table;