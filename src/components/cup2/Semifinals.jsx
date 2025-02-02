import React from 'react'
import CupMatch from './CupMatch';
 
function Semifinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--semifinals">
            <h3 className="tournament-bracket__round-title">POLUFINALE</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                     date=""
                     team1ID={null}
                     team1Score={null}
                     team1Code=""
                     team2ID={null}
                     team2Score={null}
                     team2Code=""
                />
                <CupMatch
                    date=""
                    team1ID={null}
                    team1Score={null}
                    team1Code=""
                    team2ID={null}
                    team2Score={null}
                    team2Code=""
                />
            </ul>
        </div>
    );
}

export default Semifinals
