// actions.js
export const fetchClubs = async () => {
    const response = await fetch("https://www.umadomena.com/clubs", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json()
  };

export const fetchPlayersOfClub = async (teamID) => {
    const response = await fetch("https://www.umadomena.com/players/clubPlayers", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamID: Number(teamID) })
    });
    return response.json();
  };
  
  export const fetchPlayerStats = async (teamID) => {
    const response = await fetch('https://www.umadomena.com/pga', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamid: Number(teamID), seasonid: 1 })
    });
    return response.json();
  };
  
  export const fetchMatchesOfClub = async (teamID) => {
    const response = await fetch('https://www.umadomena.com/clubs/games', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamID: Number(teamID) })
    });
    return response.json();
  };

  export const teamMatches = (teams, allMatches) => {
    const teamsAndTheirMatches = [];
  
    teams.forEach((team) => {
      const matchesOfTeam = allMatches.reduce((accumulator, match) => {
        if (team.teamid === match.a_id || team.teamid === match.h_id) {
          accumulator.push(match);
        }
        return accumulator;
      }, []);
  
      const object = {
        id: team.teamid,
        name: team.teamname,
        matches: matchesOfTeam,
      };
  
      teamsAndTheirMatches.push(object);
    });
  
    return teamsAndTheirMatches;
  };