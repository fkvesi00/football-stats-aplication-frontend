import React from 'react';
import CupMatch from './CupMatch';

function Quarterfinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
          <h3 className="tournament-bracket__round-title">ČETVRTFINALE</h3>
          <ul className="tournament-bracket__list">
            <CupMatch
              date="10.02.2025"
              team1ID={3}
              team1Score={null}
              team1Code="VID"
              team2ID={2}
              team2Score={null}
              team2Code="KLADA"
            />
            <CupMatch
              date="10.02.2025"
              team1ID={11}
              team1Score={11}
              team1Code="ISPOD STREHE"
              team2ID={8}
              team2Score={null}
              team2Code="MRŠAVI PSI"
            />
            <CupMatch
              date="10.02.2025"
              team1ID={9}
              team1Score={null}
              team1Code="PRUD"
              team2ID={13}
              team2Score={null}
              team2Code="BOBOVIŠTE"
            />
            <CupMatch
              date="10.02.2025"
              team1ID={7}
              team1Score={null}
              team1Code="CRNI PUT"
              team2ID={5}
              team2Score={null}
              team2Code="OPUZEN"
            />
          </ul>
        </div>
      );
}

export default Quarterfinals;
