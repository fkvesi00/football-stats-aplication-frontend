//promjeni u dohvati sve ligaske utakmice npr. fetchLeaugeGaemsBySeason
export const fetchGamesBySeason = async (seasonID) => {
  const response = await fetch("https://www.umadomena.com/matches/allMatches",{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      seasonID,
      tournamentid:1
    })
  })

  return response.json()
}

export const sortAndFormatSchedule = (raspored) => {
    return raspored.sort((a, b) => {
      const dateComparison = a.date.localeCompare(b.date);
      if (dateComparison !== 0) {
        return dateComparison;
      } else {
        return a.time.localeCompare(b.time);
      }
    }).map((game, i) => {
      return {
        key: i,
        date: game.date,
        time: game.time,
        home: game.h_team,
        away: game.a_team
      };
    });
  };