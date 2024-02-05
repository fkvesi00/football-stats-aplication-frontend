import React from 'react'
import{useState,useEffect} from 'react'
import Strijelci from './Strijelci';

function Statistika() {
    const [statistika, setStatistika] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {

        const statistika = await fetch("https://www.umadomena.com/scorers",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          seasonid:1
          })
        })
      
          const jsonStatistika = await statistika.json();
     
          setStatistika(jsonStatistika)
        }
    
    fetchData()
    
    },[])
  
  return (
    <div>
        <h2 className="text-2xl font-bold m-5 text-green-700">Ljestvica strijelaca</h2>
        <Strijelci statistika={statistika}/>
    </div>
  )
}

export default Statistika
