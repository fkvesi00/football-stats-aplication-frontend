import React from 'react'
import {Link} from 'react-router-dom';

function Table({rank,name,played,w,d,l,gf,ga,points,id}) {
  const logo = `/images/${id}.jpg`
  return (
    <tr data-theme='fantasy' className='p-2 m-2'>
    <td className='bg-neutral text-white w-3 h-3 rounded-full text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
  <div className="flex items-center justify-center p-2">
    {rank}
  </div>
</td>
<td className='p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
        <Link to={`klub/${id}`} className="flex items-center">
          <img src={logo} alt={`Logo for ${name}`} width="30" height="30" className="mr-2 rounded-full" />
          <span>{name}</span>
        </Link>
      </td>
    <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{played}</td>
    <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{w}</td>
    <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{d}</td>
    <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{l}</td>
    <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hidden sm:table-cell'>{gf}</td>
    <td className='text-center p-1 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hidden sm:table-cell'>{ga}</td>
    <td className='text-center p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{gf - ga}</td>
    <td data-theme='retro' className='text-center p-2 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>{points}</td>
  </tr>
  )
}

export default Table
