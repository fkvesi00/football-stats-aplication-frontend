import React from 'react'
import{useContext,useEffect} from 'react'
import Strijelci from './Strijelci';
import StasContext from '../../context/statsContext/StatsContext';
import { fetchScorers } from '../../context/statsContext/StatsActions';

function Statistika({seasonid}) {
    const {scorers, dispatch} = useContext(StasContext)
    
    useEffect(()=>{
      const loadScorers = async () => {
        try {
          const scorers = await fetchScorers(seasonid)
          dispatch({
              type:'GET_TOP20_SCORERS',
              payload: scorers
          })
        } catch (error) {
          console.error('Error fetching scorers', error)
        } 
    }
    loadScorers()
  },[])
  
  return scorers && scorers.length > 0? (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold m-5 text-black-700 text-center">
        Ljestvica strijelaca
      </h2>
      <Strijelci statistika={scorers} />
    </div>
  ) : (
    <h1>Nema strijelaca za ovu sezonu</h1> // Fixed the string to "No scorers"
  );
}

export default Statistika
