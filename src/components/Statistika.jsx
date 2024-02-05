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
        <h2 className="text-4xl font-extrabold mb-6 text-green-700 text-center tracking-wide shadow-lg bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg">
          Ljestvica strijelaca
        </h2>
        <Strijelci statistika={statistika}/>
    </div>
  )
}

export default Statistika
