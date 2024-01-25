import React from 'react'
import {  useParams } from 'react-router-dom';
import{useState,useEffect} from 'react'
import Rezultat from './Rezultat';
import PlayerTable from './PlayerTable';

function UtakmicaStatistika() {
  const {id} = useParams();

  const [utakmica1, setUtakmica1] = useState([]);
  const [matches, setMatches] = useState([]);
  const [igraci, setIgraci] = useState([]);
  const [home, setHome] = useState([]);
  const [away, setAway] = useState([]);
  const [golovi, setGolovi] = useState([])
  
  const homeTeamRows = home.map((igrac, i) => {
    let playerGoals = 0;
    if (golovi.length > 0) {
      golovi.forEach((gol) => {
        if (gol.playerid === igrac.playerid) playerGoals++;
      });
    }
    return (
      <PlayerTable
        key={i}
        igrac={igrac.playername}
        gol={playerGoals}
        zuti={null}
        crveni={null}
      />
    );
  });
  
  const awayTeamRows = away.map((igrac, i) => {
    let playerGoals = 0;
    if (golovi.length > 0) {
      golovi.forEach((gol) => {
        if (gol.playerid === igrac.playerid) playerGoals++;
      });
    }
    return (
      <PlayerTable
        key={i}
        igrac={igrac.playername}
        gol={playerGoals}
        zuti={null}
        crveni={null}
      />
    );
  });
    
  
  useEffect(()=>{
    const fetchData = async () => {
     
      const utakmica = await fetch("https://www.umadomena.com/matches/id",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          matchID:Number(id)
        })
      })
    
      const igraci = await fetch("https://www.umadomena.com/teamPlayerMatch/getApp", {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          matchID:Number(id)
        })
      })

      const golovi = await fetch("https://www.umadomena.com/goals/matchGoals", {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          matchID:Number(id)
        })
      }) 

      const json3 = await golovi.json();
      const json2 = await utakmica.json();
      const json1 = await igraci.json();
      
      setGolovi(json3)
      setUtakmica1(json2)
      setIgraci(json1)
     
    }
   fetchData()
  },[id])


    useEffect(() => {
      if (utakmica1.length > 0) {
        if (utakmica1[0].home) {
          const birthDate = new Date(utakmica1[0].date);
          const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
          const formattedDate = birthDate.toLocaleDateString('hr-HR', options);
          const lima = {
            match_id: utakmica1[0].matchid,
            date: formattedDate,
            time: utakmica1[0].time,
            h_team: utakmica1[0].teamname,
            h_id: utakmica1[0].teamid,
            score: utakmica1[0].score,
            a_team: utakmica1[1].teamname,
            a_id: utakmica1[1].teamid
        
          };
          setMatches([lima]);
        }else{
          const birthDate = new Date(utakmica1[0].date);
          const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
          const formattedDate = birthDate.toLocaleDateString('hr-HR', options);
          const lima = {
            match_id: utakmica1[0].matchid,
            date: formattedDate,
            time: utakmica1[0].time,
            h_team: utakmica1[1].teamname,
            h_id: utakmica1[1].teamid,
            score: utakmica1[0].score,
            a_team: utakmica1[0].teamname,
            a_id: utakmica1[0].teamid
        }
        setMatches([lima]);
      }
    }}, [utakmica1]);
    

    useEffect(() => {
      if (utakmica1.length > 0) {
      if(utakmica1[0].home){
        const homeTeam = igraci.filter(player => player.teamid === utakmica1[0].teamid);
        const awayTeam = igraci.filter(player => player.teamid === utakmica1[1].teamid);
        setAway(awayTeam)
        setHome(homeTeam)
      }else{
        const homeTeam = igraci.filter(player => player.teamid === utakmica1[1].teamid);
        const awayTeam = igraci.filter(player => player.teamid === utakmica1[0].teamid);
        setAway(awayTeam)
        setHome(homeTeam)
      }
    }
      
    },[igraci,home,utakmica1])
      


  return (
    <div>
      <table className="table table-compact mx-auto mt-10 mb-10" style={{width:"80%"}} data-theme="light">
      <tbody>
        {matches[0] ? <Rezultat matchID={matches[0].match_id} date={matches[0].date} time={matches[0].time}  
      homeTeamName= {matches[0].h_team}  score={matches[0].score} awayTeamName = {matches[0].a_team} a_id = {matches[0].a_id} h_id = {matches[0].h_id}
      /> : <tr></tr>}
      </tbody>
      </table>

      <div>
      <div className="overflow-x-auto mt-10 mb-10">
  <table className="table table-compact mx-auto" style={{width:"70%", color:"white"}} data-theme="retro">
    {/* head */}
    <thead>
      <tr>
        <th style={{textAlign:'center'}}> Igrac</th>
        <th style={{textAlign:'center'}}>  Gol </th>
      </tr>
    </thead>
    <tbody>
      <tr>{
        matches[0] ? <td>{matches[0].h_team}</td> : <></>
        }
      </tr>
       {homeTeamRows}
      <tr >
        {
          matches[0] ? <td >{matches[0].a_team}</td> : <></>
        }
        
      </tr>
      {awayTeamRows}
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default UtakmicaStatistika
