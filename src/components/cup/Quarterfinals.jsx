import React from 'react';
import CupMatch from './CupMatch';

function Quarterfinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
          <h3 className="tournament-bracket__round-title">Quarterfinals</h3>
          <ul className="tournament-bracket__list">
            <CupMatch
              date="29.01.2024"
              team1="Klada"
              team1Score={2}
              team1Code="KLA"
              team1Flag=""
              team2="Mrsavi psi"
              team2Score={1}
              team2Code="MRP"
              team2Flag=""
            />
            <CupMatch
              date="29.01.2024"
              team1="Crni put"
              team1Score={4}
              team1Code="CRP"
              team1Flag=""
              team2="Opuzen"
              team2Score={5}
              team2Code="OPZ"
              team2Flag=""
            />
            <CupMatch
              date="29.01.2024"
              team1="Škrapa"
              team1Score={4}
              team1Code="ŠKM"
              team1Flag=""
              team2="Vid"
              team2Score={6}
              team2Code="VID"
              team2Flag=""
            />
            <CupMatch
              date="29.01.2024"
              team1="Sv. Nikola"
              team1Score={2}
              team1Code="SVN"
              team1Flag=""
              team2="Sv. Roko Podrujinca"
              team2Score={1}
              team2Code="SVR"
              team2Flag=""
            />
          </ul>
        </div>
      );
}

export default Quarterfinals;
