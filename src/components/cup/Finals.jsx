import React from 'react'
import CupMatch from './CupMatch';

function Finals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--finals">
            <h3 className="tournament-bracket__round-title">FINALE</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="05.04.2024"
                    team1ID={5}
                    team1Score={0}
                    team1Code="OPUZEN"
                    team2ID={3}
                    team2Score={6}
                    team2Code="VID"
                />
            </ul>
        </div>
    );
}

export default Finals
