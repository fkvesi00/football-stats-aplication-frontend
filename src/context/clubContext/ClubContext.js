import {createContext, useReducer} from 'react'
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



  return <ClubContext.Provider value={{
    clubs: state.clubs,
    playersOfClub:state.playersOfClub,
    matchesOfClub:state.matchesOfClub,
    playerStats: state.playerStats,
    dispatch
  }}>
    {children}
  </ClubContext.Provider>
}

export default ClubContext