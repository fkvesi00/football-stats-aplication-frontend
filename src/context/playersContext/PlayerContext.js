import {createContext, useReducer} from 'react'
import {
  fetchPlayers,
  calculatePlayerAge} from './PlayerActions'
import PlayerReducer from './PlayerReducer';

const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
  const initialState = {
    players: [],
    app: [],
    player: [],
    goals: []
  }

  const [state, dispatch] = useReducer(PlayerReducer, initialState)

  const loadPlayers = async () => {
    const players = await fetchPlayers();
    
    dispatch({
      type:'GET_ALL_PLAYERS',
      payload: players
    })
  };


  return (
    <PlayerContext.Provider
      value={{
        players: state.players,
        player: state.player,
        app: state.app,
        goals: state.goals,
        loadPlayers,
        calculatePlayerAge,
        dispatch
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;