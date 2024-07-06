import {createContext, useReducer, useState} from 'react'
import { fetchClubs, fetchPlayersOfClub, fetchPlayerStats, fetchMatchesOfClub, teamMatches } from './ClubActions';
import { matchFormat } from '../matchContext/MatchesActions';
import ClubReducer from './ClubReducer';

const ClubContext = createContext()

export const ClubProvider =  ({children})  => {
    const [loading, setLoading] = useState(true);
    const [playersOfClub, setPlayersOfClub] = useState([]);
    const [matchesOfClub, setMatchesOfClub] = useState([]);
    const [playerStats, setPlayerStats] = useState([]);

    const initialState = {
      clubs: []
    }
    
    const [state, dispatch] = useReducer(ClubReducer, initialState)

    const loadClubs = async () => {
      const clubsData = await fetchClubs();
      dispatch({
        type: 'GET_CLUBS',
        payload: clubsData
      })
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
    clubs: state.clubs,
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