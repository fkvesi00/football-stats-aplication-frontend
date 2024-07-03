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
import  { ClubProvider } from "./context/clubContext/ClubContext";
import { PlayerProvider} from './context/playersContext/PlayerContext'
import { StasProvider } from "./context/statsContext/StatsContext";
import { ScheduleProvider } from "./context/scheduleContext/ScheduleContext";
import { MatchProvider } from "./context/matchContext/MatchContext";

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation with a 1-second delay
    const delay = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(delay);
  }, []);



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
                <StandingsTable />
                <Utakmice />
                <Raspored />
              </>
            }
          />
          <Route exact path={`/utakmice`} element={<ListaUtakmica />} />
          <Route exact path={`/utakmica/:id`} element={<UtakmicaStatistika />} />
          <Route exact path={`/klub/:id`} element={<Klub />} />
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