import React from 'react'

function Rasporedcic({time,date,home,away,id}) {
  return (
    <tr className="align-middle" data-theme="fantasy">
      <td className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{date}</td>
      <td className="text-center">{time}</td>
      <td className="text-center">
        <div className="p-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{home}</div>
        <div className="p-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{away}</div>
      </td>
    </tr>
  )
}

export default Rasporedcic
