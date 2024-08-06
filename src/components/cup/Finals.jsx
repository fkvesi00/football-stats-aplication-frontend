import React from 'react'
import CupMatch from './CupMatch';

function Finals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--finals">
            <h3 className="tournament-bracket__round-title">Finals</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="1998-02-22"
                    team1="Klada"
                    team1Score={2}
                    team1Code="KLA"
                    team1Flag=""
                    team2="Sv. Nikola"
                    team2Score={3}
                    team2Code="SVN"
                    team2Flag=""
                />
            </ul>
        </div>
    );
}

export default Finals
