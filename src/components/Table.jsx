import React from 'react'
import {Link} from 'react-router-dom';

function Table({rank,name,played,w,d,l,gf,ga,points,id}) {
  return (
    <tr data-theme='fantasy' className='p-2 m-2'>
    <td className='bg-neutral text-white w-8 h-8 rounded-full flex items-center justify-center'>{rank}</td>
    <td ><Link to={`klub/${id}`}>{name}</Link></td>
    <td className='text-center'>{played}</td>
    <td className='text-center'>{w}</td>
    <td className='text-center'>{d}</td>
    <td className='text-center'>{l}</td>
    <td className='text-center'>{gf}</td>
    <td className='text-center'>{ga}</td>
    <td className='text-center'>{gf - ga}</td>
    <td data-theme='retro' className='text-center'>{points}</td>
  </tr>
  )
}

export default Table
