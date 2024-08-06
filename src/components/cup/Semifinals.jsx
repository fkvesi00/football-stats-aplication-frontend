import React from 'react'
import CupMatch from './CupMatch';
 
function Semifinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--semifinals">
            <h3 className="tournament-bracket__round-title">Semifinals</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="1998-02-20"
                    team1="Klada"
                    team1Score={3}
                    team1Code="KLA"
                    team1Flag=""
                    team2="Opuzen"
                    team2Score={2}
                    team2Code="OPZ"
                    team2Flag=""
                />
                <CupMatch
                    date="1998-02-20"
                    team1="Vid"
                    team1Score={4}
                    team1Code="VID"
                    team1Flag=""
                    team2="Sv. Nikola"
                    team2Score={5}
                    team2Code="SVN"
                    team2Flag=""
                />
            </ul>
        </div>
    );
}

export default Semifinals
