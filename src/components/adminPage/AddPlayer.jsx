import React from 'react'
import  { useState } from 'react';

function AddPlayer() {
    const [playerID, setPlayerID] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [playerBirth, setPlayerBirth] = useState('');
    const [playerNationality, setPlayerNationality] = useState('');
  
    const handlePlayerIDChange = (event) => {
      setPlayerID(event.target.value);
    };
  
    const handlePlayerNameChange = (event) => {
      setPlayerName(event.target.value);
    };
  
    const handlePlayerBirthChange = (event) => {
      setPlayerBirth(event.target.value);
    };
  
    const handlePlayerNationalityChange = (event) => {
      setPlayerNationality(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Here, you can handle the submission of player information
      console.log('Player ID:', playerID);
      console.log('Player Name:', playerName);
      console.log('Player Birth:', playerBirth);
      console.log('Player Nationality:', playerNationality);
      const formData = {
        playerID: parseInt(playerID, 10),
        playerName,
        playerBirth,
        playerNationality
    };
    console.log(typeof playerID, typeof playerName, typeof playerBirth, typeof playerNationality)
    // Send a POST request to your Node.js server
    fetch('http://localhost:3000/addPlayer', {
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
      setPlayerID('');
      setPlayerName('');
      setPlayerBirth('');
      setPlayerNationality('');
    };
  
    return (
        <div style={{width:"60%"}} className="flex flex-wrap justify-center mx-1 border border-solid border-black p-4 mb-10 mt-10 mx-auto">
          <div className='header'>Add player</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="playerID">Player ID:</label>
        <input
          type="number"
          id="playerID"
          name="playerID"
          value={playerID}
          onChange={handlePlayerIDChange}
          required
        />
        <br /><br />
  
        <label htmlFor="playerName">Player Name:</label>
        <input
          type="text"
          id="playerName"
          name="playerName"
          value={playerName}
          onChange={handlePlayerNameChange}
          required
        />
        <br /><br />
  
        <label htmlFor="playerBirth">Player Birth:</label>
        <input
          type="date"
          id="playerBirth"
          name="playerBirth"
          value={playerBirth}
          onChange={handlePlayerBirthChange}
          required
        />
        <br /><br />
  
        <label htmlFor="playerNationality">Player Nationality:</label>
        <input
          type="text"
          id="playerNationality"
          name="playerNationality"
          value={playerNationality}
          onChange={handlePlayerNationalityChange}
          required
        />
        <br /><br />
  
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      </div>
  )
}

export default AddPlayer
