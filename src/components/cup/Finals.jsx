import React from 'react'
import CupMatch from './CupMatch';

function Finals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--finals">
            <h3 className="tournament-bracket__round-title">Finals</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="1998-02-22"
                    team1="Canada"
                    team1Score={2}
                    team1Code="CAN"
                    team1Flag="ca"
                    team2="Finland"
                    team2Score={3}
                    team2Code="FIN"
                    team2Flag="fi"
                />
            </ul>
        </div>
    );
}

export default Finals
