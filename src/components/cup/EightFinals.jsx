import React from 'react';
import CupMatch from './CupMatch';

function EightFinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--eightfinals">
            <h3 className="tournament-bracket__round-title">Eight Finals</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="22.01.2024"
                    team1="Klada"
                    team1Score={null}
                    team1Code="KLA"
                    team1Flag="br"
                    team2="slobodan"
                    team2Score={null}
                    team2Code="/"
                    team2Flag=""
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Neum"
                    team1Score={2}
                    team1Code="NEU"
                    team1Flag="it"
                    team2="Mrsavi psi"
                    team2Score={5}
                    team2Code="MRP"
                    team2Flag="cl"
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Crni put"
                    team1Score={4}
                    team1Code="CRP"
                    team1Flag="de"
                    team2="Doljani"
                    team2Score={1}
                    team2Code="DOLJ"
                    team2Flag="za"
                />
                <CupMatch
                    date="22.01.2024"
                    team1="slobodan"
                    team1Score={null}
                    team1Code="/"
                    team1Flag=""
                    team2="Opuzen"
                    team2Score={null}
                    team2Code="OPZ"
                    team2Flag=""
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Škrapa"
                    team1Score={null}
                    team1Code="ŠKM"
                    team1Flag="gb"
                    team2="slobodan"
                    team2Score={null}
                    team2Code="/"
                    team2Flag=""
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Ispod strehe"
                    team1Score={2}
                    team1Code="ISS"
                    team1Flag=""
                    team2="Vid"
                    team2Score={3}
                    team2Code="VID"
                    team2Flag=""
                />
                <CupMatch
                    date="22.01.2024"
                    team1="Sv. Nikola"
                    team1Score={3}
                    team1Code="SVN"
                    team1Flag=""
                    team2="Prud"
                    team2Score={1}
                    team2Code="PRD"
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
                    team2Code="SVR"
                    team2Flag=""
                />
            </ul>
        </div>
    );
}

export default EightFinals;
