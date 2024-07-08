import {createContext, useReducer} from 'react'
import { fetchClubs, fetchPlayersOfClub, fetchPlayerStats, fetchMatchesOfClub, teamMatches } from './ClubActions';
import { matchFormat } from '../matchContext/MatchesActions';
import ClubReducer from './ClubReducer';

const ClubContext = createContext()

export const ClubProvider =  ({children})  => {
    const initialState = {
      clubs: [],
      playersOfClub: [],
      matchesOfClub: [],
      playerStats: []
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
      dispatch({
        type: 'GET_PLAYERS_OF_CLUB',
        payload: players
      })
      dispatch({
        type: 'GET_MATCHES_OF_CLUB',
        payload: matchFormat(matches)
      })
      dispatch({
        type: 'GET_CLUB_PLAYERS_APPERANCES_AND_GOALS',
        payload: stats
      })
    };


  return <ClubContext.Provider value={{
    clubs: state.clubs,
    playersOfClub:state.playersOfClub,
    matchesOfClub:state.matchesOfClub,
    playerStats: state.playerStats,
    loadClubs,
    fetchClubsPlayersAndMatches,
    teamMatches,
    dispatch
  }}>
    {children}
  </ClubContext.Provider>
}

export default ClubContext