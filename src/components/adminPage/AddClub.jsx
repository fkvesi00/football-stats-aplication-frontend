import React from 'react'
import { useState } from 'react';
function AddClub() {
    const [clubID, setClubID] = useState('');
    const [teamName, setTeamName] = useState('');

    const handleClubIDChange = (event) => {
        setClubID(event.target.value);
    };

    const handleTeamNameChange = (event) => {
        setTeamName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle the form submission here or send the data to an API.
        const formData = {
            clubID: parseInt(clubID, 10),
            teamName: teamName,
        };
        console.log(typeof clubID, typeof teamName)
        // Send a POST request to your Node.js server
        fetch('https://www.umadomena.com/clubs/addClub', {
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

    };

    return (
        <div  style={{width:"60%"}} className="flex flex-wrap justify-center mx-1 border border-solid border-black p-4 mb-10 mt-10 mx-auto" >
            <div className='header'>Add Club</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="clubID">Club ID:</label>
                <input
                    type="number"
                    id="clubID"
                    name="clubID"
                    value={clubID}
                    onChange={handleClubIDChange}
                    required
                />
                <br /><br />

                <label htmlFor="teamName">Team Name:</label>
                <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    value={teamName}
                    onChange={handleTeamNameChange}
                    required
                />
                <br /><br />

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleSubmit}>
          Submit
        </button>
            </form>
            
        </div>
    );
}

export default AddClub
