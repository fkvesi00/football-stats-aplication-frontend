import React from 'react';
import CupMatch from './CupMatch';

function EightFinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--eightfinals">
            <h3 className="tournament-bracket__round-title">OSMINA FINALA</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="03.02.2025"
                    team1ID={3}
                    team1Score={null}
                    team1Code="VID"
                    team2ID={null}
                    team2Score={null}
                    team2Code="slobodan"
                />
                <CupMatch
                    date="03.02.2025"
                    team1ID={1}
                    team1Score={1}
                    team1Code="SV. NIKOLA"
                    team2ID={2}
                    team2Score={4}
                    team2Code="KLADA"
                />
                <CupMatch
                    date="03.02.2025"
                    team1ID={11}
                    team1Score={null}
                    team1Code="ISPOD STREHE"
                    team2ID={null}
                    team2Score={null}
                    team2Code="slobodan"
                />
                <CupMatch
                    date="03.02.2025"
                    team1ID={null}
                    team1Score={null}
                    team1Code="slobodan"
                    team2ID={8}
                    team2Score={null}
                    team2Code="MRŠAVI PSI"
                />
                <CupMatch
                    date="03.02.2025"
                    team1ID={9}
                    team1Score={null}
                    team1Code="PRUD"
                    team2ID={null}
                    team2Score={null}
                    team2Code="slobodan"
                />
                <CupMatch
                    date="03.02.2025"
                    team1ID={6}
                    team1Score={0}
                    team1Code="ŠKRAPA"
                    team2ID={13}
                    team2Score={2}
                    team2Code="BOBOVIŠTE"
                />
                <CupMatch
                    date="03.02.2025"
                    team1ID={4}
                    team1Score={2}
                    team1Code="PODRUJNICA"
                    team2ID={7}
                    team2Score={5}
                    team2Code="CRNI PUT"
                />
                <CupMatch
                    date="03.02.2025"
                    team1ID={null}
                    team1Score={null}
                    team1Code="slobodan"
                    team2ID={5}
                    team2Score={null}
                    team2Code="OPUZEN"
                />
            </ul>
        </div>
    );
}

export default EightFinals;
