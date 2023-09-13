import React, { useEffect,useState } from 'react'
import KlubCard from '../shared/KlubCard'
import './header.css';


function ListaKlubova() {
  const [clubs, setClubs] = useState([]);

  useEffect(()=>{
    
    const fetchClubs= async () => {
      const clubs = await fetch("http://localhost:3000/clubs",{ 
        method:'GET',
        headers:{'Content-Type':'application/json'}
      });
      const clubsJSON = await clubs.json()
      setClubs(clubsJSON)
    }

    fetchClubs()
  })
  
  const listaKlubova = clubs.map((klub,id) => {
        return <KlubCard key={id} id={klub.teamid} ime={klub.teamname}/> //logo={klub.team_logo}
    })

    return (
    <div data-theme='garden'>
      <div className='header'>Klubovi</div>
      <div className='flex justify-center flex-wrap' >
       {listaKlubova}
      </div>
    </div>
  )
}

export default ListaKlubova