import React from 'react'
import{useContext,useEffect} from 'react'
import Strijelci from './Strijelci';
import StasContext from '../../context/statsContext/StatsContext';
import { fetchScorers } from '../../context/statsContext/StatsActions';

function Statistika() {
    const {scorers, dispatch} = useContext(StasContext)
    
    useEffect(()=>{
      const loadScorers = async () => {
        try {
          const scorers = await fetchScorers()
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
  
  return (
    <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold m-5 text-black-700 text-center text-center" >Ljestvica strijelaca</h2>
        <Strijelci statistika={scorers}/>
    </div>
  )
}

export default Statistika
