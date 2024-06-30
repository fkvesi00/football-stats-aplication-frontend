import {createContext, useState} from 'react'
import {
  fetchPlayers,
  fetchPlayerAppearances,
  fetchPlayerInfo,
  fetchPlayerGoals,
  calculatePlayerAge} from './PlayerActions'

const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [appearances, setAppearances] = useState([]);
  const [player, setPlayer] = useState([]);
  const [goals, setGoals] = useState([]);

  const loadPlayers = async () => {
    const players = await fetchPlayers();
    setPlayers(players)
  };

  const loadPlayerData = async (playerID) => {
    const [info, apps, playerGoals] = await Promise.all([
      fetchPlayerInfo(playerID),
      fetchPlayerAppearances(playerID),
      fetchPlayerGoals(playerID)
    ]);
    setPlayer(info);
    setAppearances(apps);
    setGoals(playerGoals);
  };

  return (
    <PlayerContext.Provider
      value={{
        players,
        player,
        appearances,
        goals,
        loadPlayers,
        loadPlayerData,
        calculatePlayerAge
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;