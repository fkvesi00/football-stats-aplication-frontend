import React from 'react'
import { useState, useEffect} from 'react';
function ListaUtakmica() {

    const [raspored, setRaspored] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {

        const raspored = await fetch("http://52.59.252.228:5001/matchesBySeason",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          id:1
          })
        })
      
          const json2 = await raspored.json();
     
          setRaspored(json2)
        }
    
    fetchData()
    
    },[])

    const matchFormat = utakmica => {
        const matches = [];
      
        utakmica.forEach((utakmica2, j) => {
          for (let i = j + 1; i < utakmica.length; i++) {
            if (utakmica2.matchid === utakmica[i].matchid) {
              const homeTeam = utakmica2.home ? utakmica2 : utakmica[i];
              const awayTeam = utakmica2.home ? utakmica[i] : utakmica2;
      
              const match = {
                match_id: utakmica2.matchid,
                date: utakmica2.date,
                time: utakmica2.time,
                h_team: homeTeam.teamname,
                h_id: homeTeam.teamid,
                score: utakmica2.score,
                a_team: awayTeam.teamname,
                a_id: awayTeam.teamid
              };
      
              matches.push(match);
            }
          }
        });
      
        return matches;
      };
        
        const matches = matchFormat(raspored)
      
      
      //u sljedece dvije linije nalazimo utakmice koje su odigrane i koje ce se odigrati
      const matchesplayed = matches.filter(utakmica => utakmica.score !== null)
      const matchesToPlay = matches.filter(utakmica => utakmica.score == null)

  return (
    <div>
       <Utakmice utakmice={matchesplayed}/>
       <Raspored raspored={matchesToPlay}/>
    </div>
  )
}

export default ListaUtakmica
