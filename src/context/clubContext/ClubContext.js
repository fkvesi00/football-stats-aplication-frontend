import {createContext, useState} from 'react'
import { fetchClubs, fetchPlayersOfClub, fetchPlayerStats, fetchMatchesOfClub, teamMatches } from './ClubActions';
import { matchFormat } from '../matchContext/MatchesActions';
const ClubContext = createContext()

export const ClubProvider =  ({children})  => {
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [playersOfClub, setPlayersOfClub] = useState([]);
    const [matchesOfClub, setMatchesOfClub] = useState([]);
    const [playerStats, setPlayerStats] = useState([]);
    const [allGamesByClub, setAllGamesByClub] = useState([])

    const loadClubs = async () => {
      const clubsData = await fetchClubs();
      setClubs(clubsData);
    };
  
    const fetchClubsPlayersAndMatches = async (teamID) => {
      const [players, stats, matches] = await Promise.all([
        fetchPlayersOfClub(teamID),
        fetchPlayerStats(teamID),
        fetchMatchesOfClub(teamID)
      ]);
      setPlayersOfClub(players);
      setPlayerStats(stats);
      setMatchesOfClub(matchFormat(matches));
    };


  return <ClubContext.Provider value={{
    clubs,
    loading,
    playersOfClub,
    matchesOfClub,
    playerStats,
    setLoading,
    loadClubs,
    fetchClubsPlayersAndMatches,
    teamMatches
  }}>
    {children}
  </ClubContext.Provider>
}

export default ClubContext