import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import{useState,useEffect} from 'react'
import StandingsTable from "./components/StandingsTable";
import NavBar from "./components/NavBar";
import Klub from "./components/Klub";
import Footer from "./components/Footer";
import Raspored from "./components/Raspored";
import Utakmice from "./components/Utakmice";
import ListaKlubova from "./components/ListaKlubova";
import ListaIgraca from "./components/ListaIgraca";
import UtakmicaStatistika from "./components/UtakmicaStatistika";
import ListaUtakmica from "./components/ListaUtakmica";
import IgracStatistika from "./components/IgracStatistika";
import SignIn from "./components/adminPage/SignIn";
import AdminPage from "./components/adminPage/AdminPage";
function App() {
  const [klubovi, setKlubovi] = useState([]);
   const [raspored, setRaspored] = useState([]);
   const stats = []


  useEffect(()=>{
    const fetchData = async () => {
     
      const raspored = await fetch("http://localhost:3000/matchesBySeason",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          id:1
        })
      })
      
      const team = await fetch("http://localhost:3000/teamBySeason",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
           seasonID:1
        })
      })

      const json1 = await team.json();
      const json2 = await raspored.json();
     
      
      setRaspored(json2)
      setKlubovi(json1)
      
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
//console.log(matchesplayed)
//ovdje cemo stvorit legendarni objekt sa teamid i teamname i svim utakmicama tog tima
const teamMatches = (teams, allMatches) => {
  const arrayOfArrays = []
  teams.map(team =>{
    const matchesOfTeam = allMatches.map(match => {
      if((team.teamid === match.a_id) ||  (team.teamid === match.h_id))
        return match;
    })
    const filteredArray = matchesOfTeam.filter(obj => obj !== undefined);
    const object = {
      id:team.teamid,
      name:team.teamname,
      matches:filteredArray
    }
    
    arrayOfArrays.push(object)
  })
  return arrayOfArrays
}

  const allGamesByClub = teamMatches(klubovi,matchesplayed)
  
  
  allGamesByClub.forEach(club =>{
    const clubStats = {
      id:0,
      name:'',
      won: 0,
      draw: 0,
      lost: 0,
      points: 0,
      gf: 0,
      ga: 0,
      pm: 0,
      name: ''
    }
    
  clubStats.id = club.id
  clubStats.name = club.name
    for (const utakmica of club.matches){
     
    if(utakmica.h_id == club.id){
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
    stats.push(clubStats)
  })

  const sortedStats = stats.sort((a, b) => b.points - a.points)


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={
        <>
        <StandingsTable tablica={sortedStats}/>
        <Utakmice utakmice={matchesplayed}/>
        <Raspored raspored={matchesToPlay}/>
        </>
        }/>
        <Route exact path={`/utakmice`} element={<ListaUtakmica />}/>
        <Route exact path={`/utakmica/:id`} element={<UtakmicaStatistika />}/>
        <Route exact path={`/klub/:id`} element={<Klub />}/>
        <Route exact path={`/klubovi`} element={<ListaKlubova/>}/>
        <Route exact path={`/igraci`} element={<ListaIgraca />}/>
        <Route exact path={`/igrac/:id`} element={<IgracStatistika />}/>
        <Route exact path={'/signIn'} element={<SignIn/>} />
        <Route exact path={'/adminPage'} element={<AdminPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;