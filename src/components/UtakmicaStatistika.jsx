import React from 'react'
import {  useParams } from 'react-router-dom';
import{useState,useEffect} from 'react'
import Utakmica from './Utakmica';
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
    function mergeMatches(matches) {
      let result = {};
  
      for (const match of matches) {
        const isHomeMatch = match.home;
        const teamKey = isHomeMatch ? 'h' : 'a';
  
        result = {
          ...result,
          match_id: match.matchid,
          date: match.date,
          time: match.time,
          [`${teamKey}_team`]: match.teamname,
          [`${teamKey}_id`]: match.teamid,
          score: match.score
        };
      }
  
      return result;
    }
  
    const mergedMatch = mergeMatches(utakmica1); 
    setMatches([mergedMatch])
  }, [utakmica1]);

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
      console.log(home)
    },[igraci,home,utakmica1])
      


  return (
    <div>
      <table className="table table-compact mx-auto mt-10 mb-10" style={{width:"50%"}} data-theme="retro">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th style={{textAlign:'end'}}>Home Team</th>
          <th style={{textAlign:'center'}}>Score</th>
          <th>Away Team</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {matches[0] ? <Utakmica MatchID={matches[0].match_id} Date={matches[0].date} Time={matches[0].time}  
      HomeTeamID= {matches[0].h_team}  HomeTeamScore={matches[0].score} AwayTeamName = {matches[0].a_team} a_id = {matches[0].a_id} h_id = {matches[0].h_id}
      /> : <tr></tr>}
      </tbody>
      </table>

      <div>
      <div className="overflow-x-auto mt-10 mb-10">
  <table className="table table-compact mx-auto" style={{width:"70%"}} data-theme="retro">
    {/* head */}
    <thead>
      <tr>
        <th style={{textAlign:'center'}}> Igrac</th>
        <th style={{textAlign:'center'}}>  Gol </th>
      </tr>
    </thead>
    <tbody>
      <tr >
        <td>Home</td>
      </tr>
       {homeTeamRows}
      <tr >
        <td>Away</td>
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
