import {createContext, useReducer} from 'react'
import {
  fetchPlayers,
  fetchPlayerAppearances,
  fetchPlayerInfo,
  fetchPlayerGoals,
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

  const loadPlayerData = async (playerID) => {
    const [player, app, playerGoals] = await Promise.all([
      fetchPlayerInfo(playerID),
      fetchPlayerAppearances(playerID),
      fetchPlayerGoals(playerID)
    ]);
    
    dispatch({
      type:'GET_PLAYER',
      payload: player
    })
    dispatch({
      type: 'GET_PLAYER_APP',
      payload: app
    })
    dispatch({
      type: 'GET_PLAYER_GOALS',
      payload: playerGoals
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
        loadPlayerData,
        calculatePlayerAge,
        dispatch
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;