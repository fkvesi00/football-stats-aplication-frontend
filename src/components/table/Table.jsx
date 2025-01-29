import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Table({ rank, name, played, w, d, l, gf, ga, points, id }) {
  const logo = `/images/${id}.jpg`;
// Adjust gf and ga based on id conditions
let adjustedGF = gf;
let adjustedGA = ga;

if (id === 13) adjustedGA += 2;
if (id === 7) adjustedGF += 2;
if (id === 11) adjustedGA++;
if (id === 5) adjustedGF++;
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-theme='fantasy'
      className='p-2 m-2'
    >
      <td className='bg-neutral text-white text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
        <div className="flex items-center justify-center px-2 py-2">
          {rank}
        </div>
      </td>
      <td className='px-1 py-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
         <Link to={`klub/${id}`} className="flex items-center">
            <img src={logo} alt={`Logo for ${name}`} width="30" height="30" className="mr-2 rounded-full" />
            <span>{name} {id === 10 && <strong>(-6)</strong>}</span>
          </Link>
      </td>
      <td className='text-center px-1 py-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{played}</td>
      <td className='text-center px-1 py-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{w}</td>
      <td className='text-center px-1 py-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{d}</td>
      <td className='text-center px-1 py-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{l}</td>
      <td className='text-center px-1 py-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl '>({adjustedGF}:{adjustedGA})</td>
      <td className='text-center px-1 py-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hidden sm:table-cell'>{adjustedGF - adjustedGA}</td>
      <td className='text-center px-1 py-2 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl' style={{ fontWeight: 'bold' }} data-theme="garden">{points}</td>
    </motion.tr>
  )
}

export default Table;