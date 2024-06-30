import { HashRouter  as Router,Routes,Route } from "react-router-dom";
import{useState,useEffect} from 'react'
import { AuthProvider } from "./context/authContext/AuthContext";
import StandingsTable from "./components/table/StandingsTable";
import NavBar from "./components/layout/NavBar";
import Klub from "./components/club/Klub";
import Footer from "./components/layout/Footer";
import Raspored from "./components/match/Raspored";
import Utakmice from "./components/match/Utakmice";
import ListaKlubova from "./components/club/ListaKlubova";
import ListaIgraca from "./components/player/ListaIgraca";
import UtakmicaStatistika from "./components/match/UtakmicaStatistika";
import ListaUtakmica from "./components/match/ListaUtakmica";
import IgracStatistika from "./components/player/IgracStatistika";
import SignIn from "./pages/SignIn";
import AdminPage from "./components/adminPage/AdminPage";
import Statistika from "./components/stats/Statistika";
import Kup from "./pages/Kup";
import About from "./pages/About";
import { ClubProvider } from "./context/clubContext/ClubContext";
import { PlayerProvider} from './context/playersContext/PlayerContext'
import { StasProvider } from "./context/statsContext/StatsContext";
import { ScheduleProvider } from "./context/scheduleContext/ScheduleContext";
import { MatchProvider } from "./context/matchContext/MatchContext";

function App() {
  const [klubovi, setKlubovi] = useState([]);
   const [raspored, setRaspored] = useState([]);
   const stats = []
   const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulating an asynchronous operation with a 1-second delay
    const delay = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(delay);
  }, []);

  useEffect(()=>{
    const fetchData = async () => {
     
      const raspored = await fetch("https://www.umadomena.com/matches/allMatches",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          seasonID:1
        })
      })
      
      const team = await fetch("https://www.umadomena.com/clubs/season",{
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
const compareByDate = (a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateB - dateA;
};

// Sort the array by date
const mathesPlayedSorted = matchesplayed.sort(compareByDate);



const matchesToPlay = matches.filter(utakmica => utakmica.score === null)

//ovdje cemo stvorit legendarni objekt sa teamid i teamname i svim utakmicama tog tima
const teamMatches = (teams, allMatches) => {
  const arrayOfArrays = [];

  teams.forEach((team) => {
    const matchesOfTeam = allMatches.reduce((accumulator, match) => {
      if (team.teamid === match.a_id || team.teamid === match.h_id) {
        accumulator.push(match);
      }
      return accumulator;
    }, []);

    const object = {
      id: team.teamid,
      name: team.teamname,
      matches: matchesOfTeam,
    };

    arrayOfArrays.push(object);
  });

  return arrayOfArrays;
};

  const allGamesByClub = teamMatches(klubovi, mathesPlayedSorted)
  
  
  allGamesByClub.forEach(club =>{
    const clubStats = {
      id:0,
      won: 0,
      draw: 0,
      lost: 0,
      points: 0,
      gf: 0,
      ga: 0,
      pm: 0,
      name: '',
      rank:''
    }
    
  clubStats.id = club.id
  clubStats.name = club.name
    for (const utakmica of club.matches){
     
    if(utakmica.h_id === club.id){
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
    if(clubStats.id === 10){
      clubStats.points -=6
    }
    stats.push(clubStats)
  })

  const sortedStats = stats.sort((a, b) => {
    if (b.points !== a.points) {
      // Sort by points in descending order
      return b.points - a.points;
    } else {
      const clubB = b.gf - b.ga
      const clubA = a.gf - a.ga
      // If points are the same, sort by gf in ascending order
      return clubA - clubB;
    }
  });
  sortedStats.map((club,i) => club.rank=i)
  

  return (
    <AuthProvider>
      <ClubProvider>
        <PlayerProvider>
          <StasProvider>
            <ScheduleProvider>
              <MatchProvider>
      <Router>
        <NavBar />
      {loading ? (
        // Loading spinner component
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        // Your content once loading is complete
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <StandingsTable tablica={sortedStats} />
                <Utakmice utakmice={mathesPlayedSorted} />
                <Raspored raspored={matchesToPlay} />
              </>
            }
          />
          <Route exact path={`/utakmice`} element={<ListaUtakmica />} />
          <Route exact path={`/utakmica/:id`} element={<UtakmicaStatistika />} />
          <Route exact path={`/klub/:id`} element={<Klub clubRanks={sortedStats} />} />
          <Route exact path={`/klubovi`} element={<ListaKlubova />} />
          <Route exact path={`/igraci`} element={<ListaIgraca />} />
          <Route exact path={`/igrac/:id`} element={<IgracStatistika />} />
          <Route exact path={'/signIn'} element={<SignIn />} />
          <Route exact path={'/adminPage'} element={<AdminPage />} />
          <Route exact path={'/statstika'} element={<Statistika />} />
          <Route exact path={'/about'} element={<About />} />
          <Route exact path={'/galerija'} element={<Kup />} />
        </Routes>
      )}
      <Footer />
      </Router>
          </MatchProvider>
         </ScheduleProvider>
        </StasProvider>
       </PlayerProvider>
      </ClubProvider>
    </AuthProvider>
  );
}

export default App;