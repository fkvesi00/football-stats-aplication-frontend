import React from 'react'
import CupMatch from './CupMatch';
 
function Semifinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--semifinals">
            <h3 className="tournament-bracket__round-title">Semifinals</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="1998-02-20"
                    team1="Canada"
                    team1Score={3}
                    team1Code="CAN"
                    team1Flag="ca"
                    team2="Czech Republic"
                    team2Score={2}
                    team2Code="CZE"
                    team2Flag="cz"
                />
                <CupMatch
                    date="1998-02-20"
                    team1="Finland"
                    team1Score={4}
                    team1Code="FIN"
                    team1Flag="fi"
                    team2="Russia"
                    team2Score={3}
                    team2Code="RUS"
                    team2Flag="ru"
                />
            </ul>
        </div>
    );
}

export default Semifinals
