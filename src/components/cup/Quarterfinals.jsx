import React from 'react';
import CupMatch from './CupMatch';

function Quarterfinals() {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
          <h3 className="tournament-bracket__round-title">Quarterfinals</h3>
          <ul className="tournament-bracket__list">
            <CupMatch
              date="1998-02-18"
              team1="Canada"
              team1Score={4}
              team1Code="CAN"
              team1Flag="ca"
              team2="Kazakhstan"
              team2Score={1}
              team2Code="KAZ"
              team2Flag="kz"
            />
            <CupMatch
              date="1998-02-18"
              team1="Czech Republic"
              team1Score={4}
              team1Code="CZE"
              team1Flag="cz"
              team2="USA"
              team2Score={1}
              team2Code="USA"
              team2Flag="us"
            />
            <CupMatch
              date="1998-02-18"
              team1="Finland"
              team1Score={2}
              team1Code="FIN"
              team1Flag="fi"
              team2="Sweden"
              team2Score={1}
              team2Code="SWE"
              team2Flag="se"
            />
            <CupMatch
              date="1998-02-18"
              team1="Russia"
              team1Score={4}
              team1Code="RUS"
              team1Flag="ru"
              team2="Belarus"
              team2Score={1}
              team2Code="BLR"
              team2Flag="by"
            />
          </ul>
        </div>
      );
}

export default Quarterfinals;
