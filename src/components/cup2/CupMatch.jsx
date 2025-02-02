import React from 'react';
import './cup.css';

function CupMatch({ date, team1ID, team1Score, team1Code, team2ID, team2Score, team2Code }) {
    // Determine the winner
    const team1IsWinner = team1Score > team2Score;
    const team2IsWinner = team2Score > team1Score;



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
                    <tr className={`tournament-bracket__team ${team1IsWinner ? 'tournament-bracket__team--winner' : ''}`}>
                        <td className={`tournament-bracket__country ${team1IsWinner ? 'tournament-bracket__bold' : ''}`}>
                                <img src={`/images/${team1ID}.jpg`} alt={''} width="25" height="25" style={{ display: 'block', margin: '0 auto' }}  className="tournament-bracket__logo" />
                                <abbr className="tournament-bracket__code" title={team1Code}>{team1Code}</abbr>
                        </td>
                        <td className={`tournament-bracket__score ${team1IsWinner ? 'tournament-bracket__bold' : ''}`}>
                            <span className="tournament-bracket__number">{team1Score}</span>
                        </td>
                        <td className="tournament-bracket__separator">:</td>
                        <td className={`tournament-bracket__score ${team2IsWinner ? 'tournament-bracket__bold' : ''}`}>
                            <span className="tournament-bracket__number">{team2Score}</span>
                        </td>
                        <td className={`tournament-bracket__country ${team2IsWinner ? 'tournament-bracket__bold' : ''}`}>
                                <img src={`/images/${team2ID}.jpg`} alt={``} style={{ display: 'block', margin: '0 auto' }}  width="25" height="25" className="tournament-bracket__logo" />
                                <abbr className="tournament-bracket__code" title={team2Code}>{team2Code}</abbr>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </li>
    
    );
}

export default CupMatch;
