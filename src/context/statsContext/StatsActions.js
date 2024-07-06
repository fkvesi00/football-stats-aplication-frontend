export const fetchScorers = async setScorers => {
    const statistika = await fetch("https://www.umadomena.com/scorers",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          seasonid:1
          })
        })
      
        const jsonStatistika = await statistika.json();
     
        setScorers(jsonStatistika)
}

export const calculateTable = allGamesByClub => {
  const stats = []
  
  allGamesByClub.forEach(club =>{
    const clubStats = {
      id:0,
      won: 0,
      draw: 0,
      lost: 0,
      points: 0,
      gf: 0,
      ga: 0,
      pm: 0,
      name: '',
      rank:''
    }
    
  clubStats.id = club.id
  clubStats.name = club.name
    for (const utakmica of club.matches){
     
    if(utakmica.h_id === club.id){
      clubStats.gf+=parseInt(utakmica.score[0])
      clubStats.ga+=parseInt(utakmica.score[2])
      clubStats.pm=clubStats.gf-clubStats.ga
      if(utakmica.score[0] > utakmica.score[2]){
        clubStats.points+=3
        clubStats.won++;
      }
      else if(utakmica.score[0] < utakmica.score[2]){
        clubStats.lost++
      }
      else {
        clubStats.draw++;
        clubStats.points++;
      }
    }else{
      clubStats.gf+=parseInt(utakmica.score[2])
      clubStats.ga+=parseInt(utakmica.score[0])
      clubStats.pm= clubStats.gf - clubStats.ga
      if(utakmica.score[2] > utakmica.score[0]){
        clubStats.won++;
        clubStats.points+=3;
      }else if(utakmica.score[2] < utakmica.score[0]){
        clubStats.lost++
      }else{
        clubStats.draw++;
        clubStats.points++;
      }
    }
  }
    if(clubStats.id === 10){
      clubStats.points -=6
    }
    stats.push(clubStats)
  })

  return stats
}