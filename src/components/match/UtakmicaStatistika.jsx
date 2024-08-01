import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MatchContext from '../../context/matchContext/MatchContext';
import Rezultat from '../table/Rezultat';
import PlayerTable from '../player/PlayerTable';
import {fetchGameById, fetchPlayersInMatch, fetchGoalsInMatch} from '../../context/matchContext/MatchesActions'

function UtakmicaStatistika() {
  const { id } = useParams();
  const { match, goals, homePlayers, awayPlayers, dispatch } = useContext(MatchContext);

  useEffect(() => {
    const loadMatchData = async () => {
      try {
        const playerData = await fetchPlayersInMatch(id);
        dispatch({
          type: 'GET_PLAYERS_IN_MATCH',
          payload: playerData
        });
  
        const matchData = await fetchGameById(id);
        dispatch({
          type: 'GET_MATCH_BY_ID',
          payload: matchData
        });
  
        const goalData = await fetchGoalsInMatch(id);
        dispatch({
          type: 'GET_GOALS_IN_MATCH',
          payload: goalData
        });
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };
  
    loadMatchData();
  }, [id]);
  
    
   
  const renderTeamRows = (team) => {
    return team.map((player, index) => {
      const playerGoals = goals.filter(goal => goal.playerid === player.playerid).length;
      return (
        <PlayerTable
          key={index}
          igrac={player.playername}
          gol={playerGoals}
          zuti={null}
          crveni={null}
        />
      );
    });
  };

  return (
    <div>
      <div className="table table-compact mx-auto mt-10 mb-10" style={{ width: "70%" }} data-theme="light">
        <Rezultat
          matchID={match.match_id}
          date={match.date}
          time={match.time}
          homeTeamName={match.h_team}
          score={match.score}
          awayTeamName={match.a_team}
          a_id={match.a_id}
          h_id={match.h_id}
        />
      </div>

      <div className="overflow-x-auto mt-10 mb-10">
        <div style={{ marginBottom: "20px", fontFamily: "Impact, sans-serif", textAlign: 'center' }}>
          {match.h_team && <h2>{match.h_team}</h2>}
        </div>
        <table className="table table-compact mx-auto" style={{ width: "70%", fontFamily: "Impact, sans-serif" }} data-theme="retro">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Igrač</th>
              <th style={{ textAlign: 'center' }}>Gol</th>
            </tr>
          </thead>
          <tbody>
            {renderTeamRows(homePlayers)}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mt-10 mb-10">
        <div style={{ marginBottom: "20px", fontFamily: "Impact, sans-serif", textAlign: 'center' }}>
          {match.a_team && <h2>{match.a_team}</h2>}
        </div>
        <table className="table table-compact mx-auto" style={{ width: "70%", fontFamily: "Impact, sans-serif" }} data-theme="retro">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Igrač</th>
              <th style={{ textAlign: 'center' }}>Gol</th>
            </tr>
          </thead>
          <tbody>
            {renderTeamRows(awayPlayers)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UtakmicaStatistika;