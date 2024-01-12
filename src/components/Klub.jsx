import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Raspored from './Raspored';
import Utakmice from './Utakmice';

function Klub({}) {
  
  const [igraci, setIgraci] = useState([]);
  const [utakmice, setUtakmice] = useState([])
  const {id} = useParams();
  //console.log(clubRanks)
  
  
  //console.log(clubStats2)


  //ucitaj raspored tima i njegove igrace, cinimo to pomocu id kluba, koji se nalazi u parametru stranice
  useEffect(()=>{
    const fetchData = async () => {
      
      
      const igraci = await fetch("hhttps://www.umadomena.com/players/clubPlayers",{ 
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
      
      const json1 = await igraci.json();
      const json3 = await utakmice.json();
    
      setIgraci(json1);
      setUtakmice(json3);
      
    }
   fetchData()
      console.log(id)
  
},[id])
const clubStats = {
  won: 0,
  draw: 0,
  lost: 0,
  points: 0,
  gf: 0,
  ga: 0,
  pm: 0,
  name: '',
  rank: ''
}

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
  //pronalazimo ime tima preko id, i racunamo pobjede i ostalu statistiku(koristit useState umjesto globalne varijable)
  if(matchesplayed[0] !== undefined){
      matchesplayed[0].h_id === id ? clubStats.name=matchesplayed[0].h_team : clubStats.name=matchesplayed[0].a_team

    for (const utakmica of matchesplayed){
    if(utakmica.h_id === id){
      clubStats.gf+=parseInt(utakmica.score[0])
      clubStats.ga+=parseInt(utakmica.score[2])
      clubStats.pm=clubStats.gf-clubStats.ga
      if(utakmica.score[0] > utakmica.score[2]){
        clubStats.points+=3
        clubStats.won++;
      }
      else if(utakmica.score[0] < utakmica.score[2]){
        clubStats.lost++
      }
      else {
        clubStats.draw++;
        clubStats.points++;
      }
    }else{
      clubStats.gf+=parseInt(utakmica.score[2])
      clubStats.ga+=parseInt(utakmica.score[0])
      clubStats.pm= clubStats.gf - clubStats.ga
      if(utakmica.score[2] > utakmica.score[0]){
        clubStats.won++;
        clubStats.points+=3;
      }else if(utakmica.score[2] < utakmica.score[0]){
        clubStats.lost++
      }else{
        clubStats.draw++;
        clubStats.points++;
      }
    }
  }
}
  
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
  <h2 style={{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#312952',
    textTransform: 'uppercase',
    borderBottom: '3px solid #312952',
    paddingBottom: '5px',
    marginBottom: '20px'
  }}>
    {clubStats.name}
  </h2>
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
