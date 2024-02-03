import React from 'react'
import{useState,useEffect} from 'react'

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
        AAAA {console.log(statistika)}
    </div>
  )
}

export default Statistika
