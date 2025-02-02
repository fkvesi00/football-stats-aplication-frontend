import { HashRouter  as Router,Routes,Route } from "react-router-dom";
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
import IgracStatistika from "./components/player/IgracStatistika";
import SignIn from "./pages/SignIn";
import AdminPage from "./components/adminPage/AdminPage";
import Statistika from "./components/stats/Statistika";
import About from "./pages/About";
import { ClubProvider } from "./context/clubContext/ClubContext";
import { PlayerProvider} from './context/playersContext/PlayerContext'
import { StatsProvider } from "./context/statsContext/StatsContext";
import { ScheduleProvider } from "./context/scheduleContext/ScheduleContext";
import { MatchProvider } from "./context/matchContext/MatchContext";
import Cup2 from "./components/cup2/Cup2";
import Cup from "./components/cup/Cup";
import { useState } from "react";

function App() {
  const [seasonid, setSeasonid] = useState(2)
  
  return (
    <AuthProvider>
      <ClubProvider>
        <PlayerProvider>
          <StatsProvider>
            <ScheduleProvider>
              <MatchProvider>
                <Router>
                  <NavBar seasonid={seasonid} setSeasonid={setSeasonid}/>
                    <Routes>
                      <Route
                        exact path='/'
                        element={
                          <>
                            <StandingsTable key={`StandingsTable-${seasonid}`} seasonid={seasonid}/>
                            <Utakmice key={`Utakmice-${seasonid}`} seasonid={seasonid}/>
                            <Raspored key={`Raspored-${seasonid}`} seasonid={seasonid}/>
                          </>
                        }
                      />
                      <Route exact path={`/utakmica/:id`} element={<UtakmicaStatistika />} />
                      <Route exact path={`/klub/:id`} element={<Klub seasonid={seasonid} />} />
                      <Route exact path={`/klubovi`} element={<ListaKlubova seasonid={seasonid} />} />
                      <Route exact path={`/igraci`} element={<ListaIgraca seasonid={seasonid} />} />
                      <Route exact path={`/igrac/:id`} element={<IgracStatistika />} />
                      <Route exact path={'/signIn'} element={<SignIn />} />
                      <Route exact path={'/adminPage'} element={<AdminPage />} />
                      <Route exact path={'/statstika'} element={<Statistika seasonid={seasonid}/>} />
                      <Route exact path={'/about'} element={<About />} />
                      <Route exact path={'/galerija'} element={<Cup />} />
                      <Route exact path={'/galerija2'} element={<Cup2 />} />
                    </Routes>
                  <Footer />
                </Router>
              </MatchProvider>
            </ScheduleProvider>
           </StatsProvider>
        </PlayerProvider>
      </ClubProvider>
    </AuthProvider>
  );
}

export default App;