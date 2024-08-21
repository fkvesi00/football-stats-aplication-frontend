import React from 'react'
import { useState } from 'react';
function AddGame() {

    const [formData, setFormData] = useState({
        MatchID:'',
        Date: '',
        Time: '',
        Home: '',
        Score: '',
        Away: '',
        tournamentID: '',
      });

  
    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
          });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
       
        fetch('https://www.umadomena.com/matches/addMatch', {
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

  return (
    <div style={{width:"60%"}} className="flex flex-wrap justify-center mx-1 border border-solid border-black p-4 mb-10 mt-10 mx-auto">
      <div className='header'>Add Match</div>
      <div className="text-xs bg-gray-300 p-1 rounded">
  
</div>
        <form onSubmit={ handleSubmit } className="flex flex-wrap w-full max-w-lg" >
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="date">MatchID:</label>
          <input type="number" id="MatchID" name="MatchID" className="w-full" onChange={(e) => handleInputChange('MatchID', e.target.value)} />
        </div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" className="w-full" onChange={(e) => handleInputChange('Date', e.target.value)} />
        </div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="home">Home:</label>
          <input type="text" id="home" name="home" className="w-full" onChange={(e) => handleInputChange('Home', e.target.value)}/>
        </div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="score">Score:</label>
          <input type="text" id="score" name="score" pattern="\d+:\d+" className="w-full" onChange={(e) => handleInputChange('Score', e.target.value)}/>
        </div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="away">Away:</label>
          <input type="text" id="away" name="away" className="w-full" onChange={(e) => handleInputChange('Away', e.target.value)}/>
        </div>
         <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" className="w-full" onChange={(e) => handleInputChange('Time', e.target.value)}/>
        </div>
        <div className="w-full md:w-1/5 mb-2 md:mb-0 text-center border p-1">
          <label htmlFor="tournamentID">tournament ID</label>
          <input type="number" id="tournamentID" name="tournamentID" className="w-full" onChange={(e) => handleInputChange('tournamentID', e.target.value)} />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddGame
