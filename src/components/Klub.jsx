import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Raspored from './Raspored';
import Utakmice from './Utakmice';

function Klub() {
  
  const [igraci, setIgraci] = useState([]);
  const [utakmice, setUtakmice] = useState([])
  const [tablica, setTablica] = useState([])
  const {id} = useParams();
  const [tablicaKluba, setTablicaKluba] = useState([])
  


  //ucitaj raspored tima i njegove igrace, cinimo to pomocu id kluba, koji se nalazi u parametru stranice
  useEffect(()=>{
    const fetchData = async () => {
      
      const igraci = await fetch("https://www.umadomena.com/players/clubPlayers",{ 
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          teamID:Number(id)
        })
      })

      const utakmice = await fetch('https://www.umadomena.com/clubs/games',{ 
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          teamID:Number(id)
        })
      });

      const tablica = await fetch('https://www.umadomena.com/calculations/formatedTable',{ 
        method:'post',
        headers:{'Content-Type':'application/json'},
      });
      
      const json1 = await igraci.json();
      const json3 = await utakmice.json();
      const json4 = await tablica.json()
    
      setIgraci(json1);
      setUtakmice(json3);
      setTablica(json4);
      
    }
   fetchData()
      
  
},[id])


useEffect(() => {
  const filtertablica= tablica.filter((klub => klub.teamid !== id))
  setTablicaKluba(filtertablica)
  console.log(tablicaKluba)
},[tablica,id,tablicaKluba])


 const listaIgraca = igraci.map((igrac, i) => {
  const { playerid, playername } = igrac;
  //const birthDate = new Date(playerbirth);
  //const today = new Date();
  //const diffTime = Math.abs(today.getTime() - birthDate.getTime());
  //const playerAge = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <Link to={`/igrac/${playerid}`} key={i}>
    <div key={i} className="bg-white p-2 m-2 border border-gray-300 rounded-md shadow-md">
      <p className="text-lg font-semibold mb-1">{playername}</p>
    </div>
    </Link>
  );
});


  //ovdje cemo napravit finalnu verziju kako bi match trebao izgledat(H h_s : a_s A time date)
  const matchFormat = utakmica => {
    const result = [];
  
    utakmica.forEach((utakmica2, j) => {
      let match = {};
  
      for (let i = j + 1; i < utakmica.length; i++) {
        if (utakmica2.matchid === utakmica[i].matchid) {
          if (utakmica2.home) {
            match = {
              match_id: utakmica2.matchid,
              date: utakmica2.date,
              time: utakmica2.time,
              h_team: utakmica2.teamname,
              h_id: utakmica2.teamid,
              score: utakmica2.score,
              a_team: utakmica[i].teamname,
              a_id: utakmica[i].teamid
            };
          } else {
            match = {
              date: utakmica2.date,
              time: utakmica2.time,
              h_team: utakmica[i].teamname,
              h_id: utakmica[i].teamid,
              score: utakmica2.score,
              a_team: utakmica2.teamname,
              a_id: utakmica2.teamid
            };
          }
          
          result.push(match);
        }
      }
    });
  
    return result;
  };

  const matches = matchFormat(utakmice)

  //u sljedece dvije linije nalazimo utakmice koje su odigrane i koje ce se odigrati
  const matchesplayed = matches.filter(utakmica => utakmica.score !== null)
  const matchesToPlay = matches.filter(utakmica => utakmica.score == null)
  //console.log(matchesplayed)
  

  
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
  <div className='header'>Igraci</div>
</div>
<div className='flex justify-center flex-wrap' >
      {listaIgraca}
    </div>
      <Raspored raspored={matchesToPlay} />
      <Utakmice utakmice={matchesplayed} />
    </div>
  )
}

export default Klub
