import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MatchContext from '../../context/matchContext/MatchContext';
import Rezultat from '../table/Rezultat';
import PlayerTable from '../player/PlayerTable';

function UtakmicaStatistika() {
  const { id } = useParams();
  const { match, homePlayers, awayPlayers, goals, loadData } = useContext(MatchContext);

  useEffect(() => {
    loadData(id);
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
      <table className="table table-compact mx-auto mt-10 mb-10" style={{ width: "70%" }} data-theme="light">
        <tbody>
          {match.length > 0 ? (
              <Rezultat
                matchID={match[0].match_id}
                date={match[0].date}
                time={match[0].time}
                homeTeamName={match[0].h_team}
                score={match[0].score}
                awayTeamName={match[0].a_team}
                a_id={match[0].a_id}
                h_id={match[0].h_id}
              />
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>

      <div className="overflow-x-auto mt-10 mb-10">
        <table className="table table-compact mx-auto" style={{ width: "70%" }} data-theme="retro">
          <thead>
            <tr>
              <th style={{ textAlign: 'center', fontFamily: "Impact, sans-serif" }}>Igrač</th>
              <th style={{ textAlign: 'center', fontFamily: "Impact, sans-serif" }}>Gol</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontFamily: "Impact, sans-serif" }}>
              {match.length > 0 ? <td colSpan={2}>{match[0].h_team}</td> : <></>}
            </tr>
            {renderTeamRows(homePlayers)}
            <tr style={{ fontFamily: "Impact, sans-serif" }}>
              {match.length > 0 ? <td colSpan={2}>{match[0].a_team}</td> : <></>}
            </tr>
            {renderTeamRows(awayPlayers)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UtakmicaStatistika;
