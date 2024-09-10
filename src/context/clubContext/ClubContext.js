import { createContext, useReducer } from 'react';
import ClubReducer from './ClubReducer';

// Create ClubContext
const ClubContext = createContext();

// ClubProvider component to wrap around children components
export const ClubProvider = ({ children }) => {
  
  // Define the initial state
  const initialState = {
    clubs: [],
    playersOfClub: [],
    matchesOfClub: [],
    playerStats: []
  };
  
  // Set up reducer with initial state
  const [state, dispatch] = useReducer(ClubReducer, initialState);

  return (
    <ClubContext.Provider 
      value={{
        clubs: state.clubs,
        playersOfClub: state.playersOfClub,
        matchesOfClub: state.matchesOfClub,
        playerStats: state.playerStats,
        dispatch
      }}
    >
      {children}
    </ClubContext.Provider>
  );
};

export default ClubContext;
