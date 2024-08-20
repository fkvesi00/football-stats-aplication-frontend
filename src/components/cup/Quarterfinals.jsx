import React from 'react';
import CupMatch from './CupMatch';

function Quarterfinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
          <h3 className="tournament-bracket__round-title">ČETVRTFINALE</h3>
          <ul className="tournament-bracket__list">
            <CupMatch
              date="29.01.2024"
              team1ID={2}
              team1Score={2}
              team1Code="KLADA"
              team2ID={8}
              team2Score={5}
              team2Code="MRSAVI PSI"
            />
            <CupMatch
              date="29.01.2024"
              team1ID={5}
              team1Score={6}
              team1Code="OPUZEN"
              team2ID={7}
              team2Score={4}
              team2Code="CRNI PUT"
            />
            <CupMatch
              date="29.01.2024"
              team1ID={6}
              team1Score={2}
              team1Code="ŠKRAPA"
              team2ID={3}
              team2Score={4}
              team2Code="VID"
            />
            <CupMatch
              date="29.01.2024"
              team1ID={9}
              team1Score={10}
              team1Code="PRUD"
              team2ID={4}
              team2Score={11}
              team2Code="SV. R. PODRUJNICA"
            />
          </ul>
        </div>
      );
}

export default Quarterfinals;
