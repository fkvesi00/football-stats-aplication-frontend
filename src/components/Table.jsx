import React from 'react'
import {Link} from 'react-router-dom';

function Table({rank,name,played,w,d,l,gf,ga,points,id}) {
  return (
    <tr data-theme='fantasy' className='p-2 m-2'>
    <td className='bg-neutral text-white w-4 h-4 rounded-full text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
  <div className="flex items-center justify-center p-2">
    {rank}
  </div>
</td>
    <td className='p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'><Link to={`klub/${id}`}>{name}</Link></td>
    <td className='text-center p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{played}</td>
    <td className='text-center p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{w}</td>
    <td className='text-center p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{d}</td>
    <td className='text-center p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{l}</td>
    <td className='text-center p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{gf}</td>
    <td className='text-center p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{ga}</td>
    <td className='text-center p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>{gf - ga}</td>
    <td data-theme='retro' className='text-center'>{points}</td>
  </tr>
  )
}

export default Table
