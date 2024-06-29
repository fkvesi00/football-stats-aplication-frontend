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