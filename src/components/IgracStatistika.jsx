import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import IgracTable from './IgracTable';
import PlayerCard from '../shared/PlayerCard';

function IgracStatistika() {
    const {id} = useParams();
    const [nastupi, setNastupi] = useState([])
    const [igrac, setIgrac] = useState([])
    const [golovi, setGolovi] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
         
          const nastupi = await fetch("http://52.59.252.228:5001/players/playerApp",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              playerID:Number(id)
            })
          })
          
          
          const igrac = await fetch("http://52.59.252.228:5001/players/player",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              playerID:Number(id)
            })
          })

          const golovi = await fetch("http://52.59.252.228:5001/goals/player",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              playerID:Number(id)
            })
          })
          const json2 = await igrac.json()
          const json1 = await nastupi.json()
          const json3 = await golovi.json()

          setIgrac(json2)
          setNastupi(json1)
          setGolovi(json3)
        }
        fetchData()
        
       },[])

       const mergedArray = nastupi.map((nastup) => {
  const matchingItem = golovi.find((gol) => gol.seasonid === nastup.seasonid && gol.teamid === nastup.teamid);
  return {
    ...nastup,
    ...(matchingItem && { goals: matchingItem.goals })
  };
});

       const rows = mergedArray.map((mergedArray,i) =>{
         const {seasonname, teamname, app} = mergedArray
         const goalExist = 'goals' in mergedArray
         const goals = []
         if(goalExist){
          goals.push(mergedArray.goals)
         }else{
          goals.push(0)
         }
          
         return <IgracTable key={i} sezona={seasonname} tim={teamname} app={app} goals = {goals[0]}
        />
       } 
        
      ); 
       
      const player = (igrac) => {
        if(igrac.length>0){
            const {playerid,playername,playerbirth,playernationality,PlayerPhoto} = igrac[0];
            const birthDate = new Date(playerbirth);
            const today = new Date();
            const diffTime = Math.abs(today.getTime() - birthDate.getTime());
            const playerAge = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
            
            return <PlayerCard  ime={playername} godine={playerAge} nacionalnost={playernationality} slika={PlayerPhoto} id={playerid}/>
        }
      }

      const player1 = player(igrac)

    return (
        <div>
           
           <div style ={{display: "flex",  justifyContent: "center",  alignItems: "center"}}>
               {player1}
               {console.log(igrac)}
               {console.log(nastupi)}
               {console.log(golovi)}
           </div>
        
        <div className="overflow-x-auto w-full my-10 ">
          <div className='header'>Statistika</div>
          <table className="table table-compact mx-auto" style={{width:"60%"}} data-theme='night' >
            <thead>
              <tr>
                <th style={{borderRight: "1px solid black", textAlign:'center'}}>Sezona</th> 
                <th style={{borderRight: "1px solid black", textAlign:'center'}}>Tim</th>  
                <th style={{borderRight: "1px solid black", textAlign:'center'}}>Nastupi</th> 
                <th style={{borderRight: "1px solid black", textAlign:'center'}}>Golovi</th>
              </tr>
            </thead> 
            <tbody>
                {rows}
            </tbody> 
          </table>
          </div>
          </div>
          );
}

export default IgracStatistika
