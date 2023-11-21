import React from 'react'
import { useState,useEffect } from 'react';
function AddPlayerToClub() {
    
    //ovdje cemo povuc sve klubove
    const [clubs, setClubs] = useState([]);
    const [igraci, setIgraci] = useState([]);
    const [formData, setFormData] = useState({
      playerid:'',
      teamid: '',
      seasonid:1
    });
    
  useEffect(()=>{
    
    const fetchClubs= async () => {
      const clubs = await fetch("http://localhost:3000/clubs",{ 
        method:'GET',
        headers:{'Content-Type':'application/json'}
      });
      const clubsJSON = await clubs.json()
      setClubs(clubsJSON)
    }
    

    fetchClubs()

    fetch("http://localhost:3000/players",{ 
      method:'get',
      headers:{'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then(data => setIgraci(data))
  }, [])
   
  const handleSelectChange =(key, value) => {
    setFormData({
        ...formData,
        [key]: value
      });
     
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData);
 
  fetch('http://localhost:3000/addPlayerToClub', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
  .then(response => response.json())
  .then(data => {
      console.log('Data sent to the server:', data);
      // You can handle the server response here
  })
  .catch(error => {
      console.error('Error:', error);
  });


// Reset the form fields if needed

}

useEffect(() => {
  console.log(formData);
}, [formData]);
  return (
    <div style={{width:"60%"}} className="flex flex-wrap justify-center mx-1 border border-solid border-black p-4 mb-10 mt-10 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-wrap w-full max-w-lg">
         <select className="select select-bordered w-full max-w-xs" defaultValue={formData.teamid} onChange={(e) => handleSelectChange('teamid', parseInt(e.target.value,10))} >
         <option disabled selected>Izaberi klub</option>
          {clubs.map((value, index) => (
            <option key={index} value={value.teamid} >
              {value.teamname}
            </option>
          ))}
        </select>
        <select className="select select-bordered w-full max-w-xs"  defaultValue={formData.playerid} onChange={(e) => handleSelectChange('playerid',parseInt( e.target.value,10))}>
        <option disabled selected>Izaberi igraca</option>
          {igraci.map((value, index) => (
            <option key={index} value={value.playerid}>
              {value.playername}
            </option>
          ))}
        </select>
        <select className="select select-bordered w-full max-w-xs"  defaultValue={formData.seasonid} onChange={(e) => handleSelectChange('seasonid', e.target.value)}>
        <option disabled selected>Izaberi sezonu</option>
        <option value="1" >1</option>
        <option value="1" > </option>
        </select>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Submit
        </button>
        </form>
    </div>
  )
}

export default AddPlayerToClub
