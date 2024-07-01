export const fetchGamesBySeason = async () => {
  const response = await fetch("https://www.umadomena.com/matches/allMatches",{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      seasonID:1
    })
  })

  return response.json()
};

export const sortAndFormatSchedule = (raspored) => {
    return raspored.sort((a, b) => {
      const dateComparison = a.date.localeCompare(b.date);
      if (dateComparison !== 0) {
        return dateComparison;
      } else {
        return a.time.localeCompare(b.time);
      }
    }).map((game, i) => {
      const birthDate = new Date(game.date);
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const formattedDate = birthDate.toLocaleDateString('hr-HR', options);
      return {
        key: i,
        date: formattedDate,
        time: game.time,
        home: game.h_team,
        away: game.a_team
      };
    });
  };