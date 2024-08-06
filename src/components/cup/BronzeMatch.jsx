import React from 'react';
import CupMatch from './CupMatch';

function BronzeMatch() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--bronze">
            <h3 className="tournament-bracket__round-title">Bronze Match</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="2024-08-06"
                    team1="Canada"
                    team1Score={2}
                    team1Code="CAN"
                    team1Flag="ca"
                    team2="USA"
                    team2Score={1}
                    team2Code="USA"
                    team2Flag="us"
                />
            </ul>
        </div>
    );
}

export default BronzeMatch;
