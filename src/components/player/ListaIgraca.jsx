import React from 'react'
import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import PlayerCard from '../shared/PlayerCard'

function ListaIgraca() {
  
    const [igraci, setIgraci] = useState([])
    const [input, setInput] = useState('')

    useEffect(()=>{
        fetch("https://www.umadomena.com/players",{ 
          method:'get',
          headers:{'Content-Type':'application/json'}
        })
        .then(res => res.json())
        .then(data => setIgraci(data))
      }, [])
  

      const filterPlayer = igraci.filter(el => {
        return el.playername.toLowerCase().includes(input.toLocaleLowerCase());
      })

      const onSearchChange = (event) =>{
       setInput(event.target.value)
      }


      const listaIgraca = filterPlayer.map((igrac, i) => {
        const { playerid, playername, playerbirth, playernationality, PlayerPhoto } = igrac;
        const birthDate = new Date(playerbirth);
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - birthDate.getTime());
        const playerAge = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
      
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PlayerCard ime={playername} godine={playerAge} nacionalnost={playernationality} slika={PlayerPhoto} id={playerid} />
          </motion.div>
        );
      });

 

    return (
      <div data-theme='garden'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input
        placeholder="Search player..."
        onChange={onSearchChange}
        type="text"
        style={{
          padding: '5px',
          margin:'7px',
          border: '2px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
      <div className='flex justify-center flex-wrap' >
       {listaIgraca}
      </div>
    </div>
    )
}

export default ListaIgraca
