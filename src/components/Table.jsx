import React from 'react'
import {Link} from 'react-router-dom';

function Table({rank,name,played,w,d,l,gf,ga,points,id}) {
  return (
    <tr data-theme='fantasy' className='mb-3'>
      <Link to={`klub/${id}`}>
    <td className='text-center'>{rank}</td>
    <td >{name}</td>
    <td className='text-center'>{played}</td>
    <td className='text-center'>{w}</td>
    <td className='text-center'>{d}</td>
    <td className='text-center'>{l}</td>
    <td className='text-center'>{gf}</td>
    <td className='text-center'>{ga}</td>
    <td className='text-center'>{gf - ga}</td>
    <td data-theme='retro' className='text-center'>{points}</td>
    </Link>
  </tr>
  )
}

export default Table
