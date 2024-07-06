export const fetchAllMatches = async () => {
  const response = await fetch("https://www.umadomena.com/matches/allMatches",{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      seasonID:1
    })
  })

  return response.json()
}

export const fetchGameById = async (id) => {
  const response = await fetch("https://www.umadomena.com/matches/id",{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      matchID:Number(id)
    })
  })
  return response.json();
}


export const fetchPlayersInMatch = async (id) => {
  const response = await fetch("https://www.umadomena.com/teamPlayerMatch/getApp", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ matchID: Number(id) })
  });
  return response.json();
};

export const fetchGoalsInMatch = async (id) => {
  const response = await fetch("https://www.umadomena.com/goals/matchGoals", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ matchID: Number(id) })
  });
  return response.json();
};

export const matchFormat = (utakmica) => {
  const matches = {};

  utakmica.forEach((utakmica2) => {
      if (!matches[utakmica2.matchid]) {
          matches[utakmica2.matchid] = {
              match_id: utakmica2.matchid,
              date: formatMatchDate(utakmica2.date),
              time: utakmica2.time,
              score: utakmica2.score,
              h_team: utakmica2.home ? utakmica2.teamname : null,
              h_id: utakmica2.home ? utakmica2.teamid : null,
              a_team: !utakmica2.home ? utakmica2.teamname : null,
              a_id: !utakmica2.home ? utakmica2.teamid : null
          };
      } else {
          if (utakmica2.home) {
              matches[utakmica2.matchid].h_team = utakmica2.teamname;
              matches[utakmica2.matchid].h_id = utakmica2.teamid;
          } else {
              matches[utakmica2.matchid].a_team = utakmica2.teamname;
              matches[utakmica2.matchid].a_id = utakmica2.teamid;
          }
      }
  });

  return Object.values(matches);
};

  export const formatMatchDate = (dateString) => {
    const matchDate = new Date(dateString);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return matchDate.toLocaleDateString('hr-HR', options);
  };


  export const  compareMatchesByDate = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
  
    return dateB - dateA;
  };

  export const matchesplayed = (allMatches) => allMatches.filter(utakmica => utakmica.score !== null)

  export const matchesSortedByDate = (matchesplayed) => matchesplayed.sort(compareMatchesByDate);

  export const a = (allMatches) => {
    const final = matchesplayed(matchesSortedByDate(allMatches))

    return final
  }