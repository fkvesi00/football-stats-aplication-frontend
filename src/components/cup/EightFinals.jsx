import React from 'react';
import CupMatch from './CupMatch';

function EightFinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--eightfinals">
            <h3 className="tournament-bracket__round-title">Eight Finals</h3>
            <ul className="tournament-bracket__list">
                <CupMatch
                    date="1998-02-16"
                    team1="Brazil"
                    team1Score={3}
                    team1Code="BRA"
                    team1Flag="br"
                    team2="Norway"
                    team2Score={1}
                    team2Code="NOR"
                    team2Flag="no"
                />
                <CupMatch
                    date="1998-02-16"
                    team1="Italy"
                    team1Score={2}
                    team1Code="ITA"
                    team1Flag="it"
                    team2="Chile"
                    team2Score={0}
                    team2Code="CHI"
                    team2Flag="cl"
                />
                <CupMatch
                    date="1998-02-17"
                    team1="Germany"
                    team1Score={1}
                    team1Code="GER"
                    team1Flag="de"
                    team2="South Africa"
                    team2Score={0}
                    team2Code="ZAF"
                    team2Flag="za"
                />
                <CupMatch
                    date="1998-02-17"
                    team1="Spain"
                    team1Score={2}
                    team1Code="ESP"
                    team1Flag="es"
                    team2="Nigeria"
                    team2Score={1}
                    team2Code="NGA"
                    team2Flag="ng"
                />
                <CupMatch
                    date="1998-02-18"
                    team1="England"
                    team1Score={2}
                    team1Code="ENG"
                    team1Flag="gb"
                    team2="Japan"
                    team2Score={0}
                    team2Code="JPN"
                    team2Flag="jp"
                />
                <CupMatch
                    date="1998-02-18"
                    team1="France"
                    team1Score={3}
                    team1Code="FRA"
                    team1Flag="fr"
                    team2="USA"
                    team2Score={1}
                    team2Code="USA"
                    team2Flag="us"
                />
                <CupMatch
                    date="1998-02-19"
                    team1="Netherlands"
                    team1Score={2}
                    team1Code="NED"
                    team1Flag="nl"
                    team2="Iran"
                    team2Score={0}
                    team2Code="IRN"
                    team2Flag="ir"
                />
                <CupMatch
                    date="1998-02-19"
                    team1="Portugal"
                    team1Score={1}
                    team1Code="POR"
                    team1Flag="pt"
                    team2="Morocco"
                    team2Score={1}
                    team2Code="MAR"
                    team2Flag="ma"
                />
            </ul>
        </div>
    );
}

export default EightFinals;
