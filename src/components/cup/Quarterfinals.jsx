import React from 'react';
import CupMatch from './CupMatch';

function Quarterfinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
          <h3 className="tournament-bracket__round-title">ČETVRTFINALE</h3>
          <ul className="tournament-bracket__list">
            <CupMatch
              date="29.01.2024"
              team1="Klada"
              team1Score={2}
              team1Code="KLADA"
              team1Flag=""
              team2="Mrsavi psi"
              team2Score={5}
              team2Code="MRSAVI PSI"
              team2Flag=""
            />
            <CupMatch
              date="29.01.2024"
              team1="OPUZEN"
              team1Score={6}
              team1Code="OPUZEN"
              team1Flag=""
              team2="CRNI PUT"
              team2Score={4}
              team2Code="CRNI PUT"
              team2Flag=""
            />
            <CupMatch
              date="29.01.2024"
              team1="ŠKRAPA"
              team1Score={2}
              team1Code="ŠKRAPA"
              team1Flag=""
              team2="VID"
              team2Score={4}
              team2Code="VID"
              team2Flag=""
            />
            <CupMatch
              date="29.01.2024"
              team1="PRUD"
              team1Score={10}
              team1Code="PRUD"
              team1Flag=""
              team2="Sv. Roko Podrujinca"
              team2Score={11}
              team2Code="SV. R. PODRUJNICA"
              team2Flag=""
            />
          </ul>
        </div>
      );
}

export default Quarterfinals;
