import React from 'react'
import { useContext, useEffect} from 'react';
import Utakmice from './Utakmica';
import Raspored from './Raspored';
import { matchFormat } from '../../context/matchContext/MatchesActions';
import ScheduleContext from '../../context/scheduleContext/ScheduleContext';

function ListaUtakmica() {
      const {schedule, loadGamesBySeason} = useContext(ScheduleContext)
      
      useEffect(() => {
        loadGamesBySeason()
      },[])

      const matches = matchFormat(schedule)
      
      //u sljedece dvije linije nalazimo utakmice koje su odigrane i koje ce se odigrati
      const matchesplayed = matches.filter(utakmica => utakmica.score !== null)
      const matchesToPlay = matches.filter(utakmica => utakmica.score == null)

  return (
    <div>
       <Utakmice utakmice={matchesplayed}/>
       <Raspored raspored={matchesToPlay}/>
    </div>
  )
}

export default ListaUtakmica
