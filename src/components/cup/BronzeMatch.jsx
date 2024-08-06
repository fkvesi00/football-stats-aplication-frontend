import React from 'react';
import CupMatch from './CupMatch';

function BronzeMatch() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--bronze">
            <h3 className="tournament-bracket__round-title">Bronze Match</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="2024-08-06"
                    team1="Opuzem"
                    team1Score={4}
                    team1Code="OPZ"
                    team1Flag=""
                    team2="Sv. Roko Podrujnica"
                    team2Score={3}
                    team2Code="SVR"
                    team2Flag=""
                />
            </ul>
        </div>
    );
}

export default BronzeMatch;
