import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
function Table({rank,name,played,w,d,l,gf,ga,points,id}) {

  const a = <td className='bg-success text-white w-8 h-8 rounded-full flex items-center justify-center'>{rank}</td>
  const b = <td className='bg-neutral text-white w-8 h-8 rounded-full flex items-center justify-center'>{rank}</td>
  const c = <td className='bg-error text-white w-8 h-8 rounded-full flex items-center justify-center'>{rank}</td>
  return (
    <tr data-theme='fantasy'>
      {rank === 1 ? a : rank===5 ? c : b}
      <td><Link to={`klub/${id}`}>{name}</Link></td>
      <td>{played}</td>
      <td>{w}</td>
      <td>{d}</td>
      <td>{l}</td>
      <td>{gf}</td>
      <td>{ga}</td>
      <td>{gf-ga}</td>
      <td data-theme='retro'>{points}</td>
    </tr>
  )
}

export default Table
