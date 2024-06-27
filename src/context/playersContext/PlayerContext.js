import {createContext, useEffect, useState} from 'react'

const PlayerContext = createContext()

export const PlayerProvider = ({children}) =>{
    const [players, setPlayers] = useState([])


    const fetchPlayers = async () => {
        try {
          const response = await fetch("https://www.umadomena.com/players", { 
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          const data = await response.json();
          setPlayers(data)
        } catch (error) {
          console.error('Error fetching players:', error);
          return [];
        }
      };

      useEffect(() => {
        fetchPlayers();
      }, []);

    return <PlayerContext.Provider value={{
        players,
        
    }}>
        {children}
    </PlayerContext.Provider>
}

export default PlayerContext