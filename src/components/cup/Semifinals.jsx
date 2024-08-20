import React from 'react'
import CupMatch from './CupMatch';
 
function Semifinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--semifinals">
            <h3 className="tournament-bracket__round-title">POLUFINALE</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="29.04.2024"
                    team1ID={5}
                    team1Score={7}
                    team1Code="OPUZEN"
                    team2ID={8}
                    team2Score={3}
                    team2Code="MRSAVI PSI"
                />
                <CupMatch
                    date="29.04.2024"
                    team1ID={3}
                    team1Score={3}
                    team1Code="VID"
                    team2ID={9}
                    team2Score={1}
                    team2Code="PRUD"
                />
            </ul>
        </div>
    );
}

export default Semifinals
