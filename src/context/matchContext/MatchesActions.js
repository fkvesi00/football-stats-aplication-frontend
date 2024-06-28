export const matchFormat = (utakmica) => {
    const result = [];
    
    utakmica.forEach((utakmica2, j) => {
      let match = {};
      
      for (let i = j + 1; i < utakmica.length; i++) {
        if (utakmica2.matchid === utakmica[i].matchid) {
          if (utakmica2.home) {
            match = {
              match_id: utakmica2.matchid,
              date: utakmica2.date,
              time: utakmica2.time,
              h_team: utakmica2.teamname,
              h_id: utakmica2.teamid,
              score: utakmica2.score,
              a_team: utakmica[i].teamname,
              a_id: utakmica[i].teamid
            };
          } else {
            match = {
              date: utakmica2.date,
              time: utakmica2.time,
              h_team: utakmica[i].teamname,
              h_id: utakmica[i].teamid,
              score: utakmica2.score,
              a_team: utakmica2.teamname,
              a_id: utakmica2.teamid
            };
          }
          
          result.push(match);
        }
      }
    });
    
    return result;
  };