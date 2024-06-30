// PlayerActions.js

/**
 * Calculate the age of a player based on their birth date.
 * @param {string} playerbirth - The birth date of the player in ISO format.
 * @returns {number} - The calculated age of the player.
 */
export const calculatePlayerAge = (playerbirth) => {
    const birthDate = new Date(playerbirth);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - birthDate.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
  };

  export const fetchPlayers = async () => {
      const response = await fetch("https://www.umadomena.com/players", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      return response.json();    
  }

export const fetchPlayerAppearances = async (playerID) => {
  const response = await fetch("https://www.umadomena.com/players/playerApp", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playerID: Number(playerID) })
  });
  return response.json();
};

export const fetchPlayerInfo = async (playerID) => {
  const response = await fetch("https://www.umadomena.com/players/player", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playerID: Number(playerID) })
  });
  return response.json();
};

export const fetchPlayerGoals = async (playerID) => {
  const response = await fetch("https://www.umadomena.com/goals/player", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playerID: Number(playerID) })
  });
  return response.json();
};

export const mergeAppearancesWithGoals = (appearances, goals) => {
  return appearances.map((nastup) => {
    const matchingItem = goals.find((gol) => gol.seasonid === nastup.seasonid && gol.teamid === nastup.teamid);
    return {
      ...nastup,
      ...(matchingItem && { goals: matchingItem.goals })
    };
  });
};

export const formatPlayer = (player) => {
  if (player.length > 0) {
    const { playerid, playername, playerbirth, playernationality, PlayerPhoto } = player[0];
    const playerAge = calculatePlayerAge(playerbirth);
    return {
      playerid,
      playername,
      playerAge,
      playernationality,
      PlayerPhoto
    };
  }
};