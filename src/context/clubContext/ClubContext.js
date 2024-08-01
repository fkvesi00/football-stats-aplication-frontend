import {createContext, useReducer} from 'react'
import { fetchClubs, teamMatches } from './ClubActions';
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

  return <ClubContext.Provider value={{
    clubs: state.clubs,
    playersOfClub:state.playersOfClub,
    matchesOfClub:state.matchesOfClub,
    playerStats: state.playerStats,
    loadClubs,
    teamMatches,
    dispatch
  }}>
    {children}
  </ClubContext.Provider>
}

export default ClubContext