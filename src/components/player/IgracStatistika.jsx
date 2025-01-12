import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';

import IgracTable from './IgracTable';
import { mergeAppearancesWithGoals, formatPlayer } from '../../context/playersContext/PlayerActions.js'
import PlayerContext from '../../context/playersContext/PlayerContext.js';
import { fetchPlayerInfo, fetchPlayerAppearances, fetchPlayerGoals} from '../../context/playersContext/PlayerActions.js';
import PlayerCard2 from '../../shared/PlayerCard2.jsx';

function IgracStatistika() {
    const {id} = useParams();
    const {player, app, goals, dispatch } = useContext(PlayerContext);
  
    useEffect(() => {
      const loadPlayerData = async (playerID) => {
        try {
            const player = await fetchPlayerInfo(playerID)
            dispatch({
              type:'GET_PLAYER',
              payload: player
            })
            
            const app = await fetchPlayerAppearances(playerID)
            dispatch({
              type: 'GET_PLAYER_APP',
              payload: app
            })
            
            const playerGoals = await fetchPlayerGoals(playerID)
            dispatch({
              type: 'GET_PLAYER_GOALS',
              payload: playerGoals
            })
        } catch (error) {
          console.error('Error fetching player data', error)
        }
        
      };
      loadPlayerData(id)
    }, [id]);
  
    const mergedArray = mergeAppearancesWithGoals(app, goals);

    const rows = mergedArray.map((mergedArray, i) => {
      const { seasonname, teamname, app, goals: mergedGoals } = mergedArray;
      const goals = mergedGoals !== undefined ? mergedGoals : 0;

      return <IgracTable key={i} sezona={seasonname} tim={teamname} app={app} goals={goals} />;
    });

    const playerFormatted = formatPlayer(player);

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {playerFormatted && (
            <PlayerCard2
              key={playerFormatted.playerid}
              ime={playerFormatted.playername}
              godine={playerFormatted.playerAge}
              nacionalnost={playerFormatted.playernationality}
              slika={playerFormatted.PlayerPhoto}
              id={playerFormatted.playerid}
            />
          )}
        </div>
  
        <div className="overflow-x-auto w-full my-10">
          <div className='header'>Statistika</div>
          <table className="table table-compact mx-auto" style={{ width: "60%" }} data-theme='night'>
            <thead>
              <tr>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>Sezona</th>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>Tim</th>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>Nastupi</th>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>Golovi</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default IgracStatistika;