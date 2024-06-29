import React from 'react'
import{useContext,useEffect} from 'react'
import Strijelci from './Strijelci';
import StasContext from '../../context/statsContext/StatsContext';

function Statistika() {
    const {scorers, loadScorers} = useContext(StasContext)
    
    useEffect(()=>{
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
