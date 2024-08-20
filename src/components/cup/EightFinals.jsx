import React from 'react';
import CupMatch from './CupMatch';

function EightFinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--eightfinals">
            <h3 className="tournament-bracket__round-title">OSMINA FINALA</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="22.01.2024"
                    team1ID={2}
                    team1Score={null}
                    team1Code="KLADA"
                    team2ID={null}
                    team2Score={null}
                    team2Code="/"
                />
                <CupMatch
                    date="22.01.2024"
                    team1ID={10}
                    team1Score={0}
                    team1Code="NEUM"
                    team2ID={8}
                    team2Score={3}
                    team2Code="MRSAVI PSI"
                />
                <CupMatch
                    date="22.01.2024"
                    team1ID={7}
                    team1Score={3}
                    team1Code="CRNI PUT"
                    team2ID={12}
                    team2Score={2}
                    team2Code="DOLJANI"
                />
                <CupMatch
                    date="22.01.2024"
                    team1ID={null}
                    team1Score={null}
                    team1Code="/"
                    team2ID={5}
                    team2Score={null}
                    team2Code="OPUZEN"
                />
                <CupMatch
                    date="22.01.2024"
                    team1ID={6}
                    team1Score={null}
                    team1Code="ŠKRAPA"
                    team2ID={null}
                    team2Score={null}
                    team2Code="/"
                />
                <CupMatch
                    date="22.01.2024"
                    team1ID={11}
                    team1Score={1}
                    team1Code="ISPOD STREHE"
                    team2ID={3}
                    team2Score={2}
                    team2Code="VID"
                />
                <CupMatch
                    date="22.01.2024"
                    team1ID={1}
                    team1Score={0}
                    team1Code="SV. NIKOLA"
                    team2ID={9}
                    team2Score={5}
                    team2Code="PRUD"
                />
                <CupMatch
                    date="22.01.2024"
                    team1ID={null}
                    team1Score={null}
                    team1Code="/"
                    team2ID={4}
                    team2Score={null}
                    team2Code="Sv. R. PODRUJNICA"
                />
            </ul>
        </div>
    );
}

export default EightFinals;
