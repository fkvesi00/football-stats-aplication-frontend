import React from 'react';
import './cup.css';

function CupMatch({ date, team1, team1Score, team1Code, team1Flag, team2, team2Score, team2Code, team2Flag }) {
    return (
        <li className="tournament-bracket__item">
            <div className="tournament-bracket__match" tabIndex="0">
                <table className="tournament-bracket__table">
                    <caption className="tournament-bracket__caption">
                        <time dateTime={date}>{date}</time>
                    </caption>
                    <thead className="sr-only">
                        <tr>
                            <th>Country</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody className="tournament-bracket__content">
                        <tr className={`tournament-bracket__team ${team1Score > team2Score ? 'tournament-bracket__team--winner' : ''}`}>
                            <td className="tournament-bracket__country">
                                <abbr className="tournament-bracket__code" title={team1}> {team1Code} </abbr>
                            </td>
                            <td className="tournament-bracket__score">
                                <span className="tournament-bracket__number"> {team1Score} </span>
                            </td>
                            <td className="tournament-bracket__separator">:</td>
                            <td className="tournament-bracket__score">
                                <span className="tournament-bracket__number"> {team2Score} </span>
                            </td>
                            <td className="tournament-bracket__country">
                                <abbr className="tournament-bracket__code" title={team2}> {team2Code} </abbr>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
}

export default CupMatch;