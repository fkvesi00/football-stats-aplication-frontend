import React from 'react'
import CupMatch from './CupMatch';
 
function Semifinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--semifinals">
            <h3 className="tournament-bracket__round-title">POLUFINALE</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="29.04.2024"
                    team1="OPUZEN"
                    team1Score={7}
                    team1Code="OPUZEN"
                    team1Flag=""
                    team2="MRSAVI PSI"
                    team2Score={3}
                    team2Code="MRSAVI PSI"
                    team2Flag=""
                />
                <CupMatch
                    date="29.04.2024"
                    team1="VID"
                    team1Score={3}
                    team1Code="VID"
                    team1Flag=""
                    team2="PRUD"
                    team2Score={1}
                    team2Code="PRUD"
                    team2Flag=""
                />
            </ul>
        </div>
    );
}

export default Semifinals
