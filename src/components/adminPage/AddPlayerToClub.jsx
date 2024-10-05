import React, { useState, useEffect } from 'react';

function AddPlayerToClub() {
  const [clubs, setClubs] = useState([]);
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({
    playerid: '',
    teamid: '',
    seasonid: 2,
  });

  useEffect(() => {
    const fetchClubs = async () => {
      const response = await fetch("https://www.umadomena.com/clubs", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const clubsJSON = await response.json();
      setClubs(clubsJSON);
    };

    fetchClubs();

    fetch("https://www.umadomena.com/players", {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleSelectChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(formData);
  
    fetch('https://www.umadomena.com/players/addPlayerToClub', {
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
  
        // Reset the form fields
        setFormData({
          playerid: '',
          teamid: '',
          seasonid: 1,
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // Filter players based on selected team
  const filteredPlayers = players.filter((player) => {
    const teamId = parseInt(formData.teamid, 10);
    const playerId = parseInt(player.playerid, 10);
  
    if (teamId >= 1 && teamId <= 9) {
      return playerId >= teamId * 100 && playerId < (teamId + 1) * 100;
    } else if (teamId >= 10 && teamId <= 99) {
      return playerId >= teamId * 100 && playerId < (teamId + 1) * 100;
    } else {
      return false;
    }
  });

  return (
    <div style={{ width: '60%' }} className="flex flex-wrap justify-center mx-1 border border-solid border-black p-4 mb-10 mt-10 mx-auto">
      <div className="header">Add player to club</div>
      <form onSubmit={handleSubmit} className="flex flex-wrap w-full max-w-lg">
        <select className="select select-bordered w-full max-w-xs" defaultValue={formData.teamid} onChange={(e) => handleSelectChange('teamid', parseInt(e.target.value, 10))}>
          <option disabled selected>Izaberi klub</option>
          {clubs.map((value, index) => (
            <option key={index} value={value.teamid}>
              {value.teamname}
            </option>
          ))}
        </select>
        <select className="select select-bordered w-full max-w-xs" defaultValue={formData.playerid} onChange={(e) => handleSelectChange('playerid', parseInt(e.target.value, 10))}>
          <option disabled selected>Izaberi igraca</option>
          {filteredPlayers.map((value, index) => (
            <option key={index} value={value.playerid}>
              {value.playername}
            </option>
          ))}
        </select>
        <select className="select select-bordered w-full max-w-xs" defaultValue={formData.seasonid} onChange={(e) => handleSelectChange('seasonid', e.target.value)}>
          <option disabled selected>Izaberi sezonu</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPlayerToClub;