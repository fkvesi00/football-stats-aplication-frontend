import React from 'react';
import CupMatch from './CupMatch';

function EightFinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--eightfinals">
            <h3 className="tournament-bracket__round-title">OSMINA FINALA</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="22.01.2024"
                    team1="Klada"
                    team1Score={null}
                    team1Code="KLADA"
                    team1Flag="br"
                    team2="slobodan"
                    team2Score={null}
                    team2Code="/"
                    team2Flag=""
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Neum"
                    team1Score={0}
                    team1Code="NEUM"
                    team1Flag="it"
                    team2="MRŠAVI PSI"
                    team2Score={3}
                    team2Code="MRSAVI PSI"
                    team2Flag="cl"
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Crni put"
                    team1Score={3}
                    team1Code="CRNI PUT"
                    team1Flag="de"
                    team2="Doljani"
                    team2Score={2}
                    team2Code="DOLJANI"
                    team2Flag="za"
                />
                <CupMatch
                    date="22.01.2024"
                    team1="slobodan"
                    team1Score={null}
                    team1Code="/"
                    team1Flag=""
                    team2="OPUZEN"
                    team2Score={null}
                    team2Code="OPUZEN"
                    team2Flag=""
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Škrapa"
                    team1Score={null}
                    team1Code="ŠKRAPA"
                    team1Flag="gb"
                    team2="slobodan"
                    team2Score={null}
                    team2Code="/"
                    team2Flag=""
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Ispod strehe"
                    team1Score={1}
                    team1Code="ISPOD STREHE"
                    team1Flag=""
                    team2="VID"
                    team2Score={2}
                    team2Code="VID"
                    team2Flag=""
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Sv. Nikola"
                    team1Score={0}
                    team1Code="SV. NIKOLA"
                    team1Flag=""
                    team2="Prud"
                    team2Score={5}
                    team2Code="PRUD"
                    team2Flag=""
                />
                <CupMatch
                    date="22.01.2024"
                    team1="slobodan"
                    team1Score={null}
                    team1Code="/"
                    team1Flag=""
                    team2="Sv. Roko Podrujnica"
                    team2Score={null}
                    team2Code="Sv. R. PODRUJNICA"
                    team2Flag=""
                />
            </ul>
        </div>
    );
}

export default EightFinals;
