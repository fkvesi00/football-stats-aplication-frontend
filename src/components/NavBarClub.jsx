import React from 'react'
import { Link } from 'react-router-dom'

function NavBarClub() {
  return (
    <div>
      <ul class="flex border-b">
        <li class="-mb-px mr-1">
            <Link class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" to='/'>Raspored</Link>
        </li>
        <li class="mr-1">
            <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href='/'>Utakmice</Link>
        </li>
        <li class="mr-1">
            <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href='/'>Igrači</Link>
        </li>
        <li class="mr-1">
            <Link class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href='/'>Igrači statistika</Link>
        </li>
        <li class="mr-1">
            <Link class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href='/'>Galerija</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBarClub
