import React,{ useState, useEffect } from 'react'
import GamesToModify from './GamesToModify'
import MyComponent from './MyComponent';

function AddGoalApp() {
    const [matches, setMatches] = useState([]);
    const [matchid, setMatchid] = useState('');
    const [homeTeamid, setHomeTeamid] = useState('');
    const [awayTeamid, setAwayTeamid] = useState('')
    const [playersOfHomeTeam, setPlayerOfHomeTeam] = useState([])
    const [playersOfAwayTeam, setPlayersOfAwayTeam] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [homeScore, setHomeScore] = useState('')
    const [awayScore, setAwayScore] = useState('')
    const [selectedValues, setSelectedValues] = useState(
      Array(28).fill().map(() => ({ playerid: '', goals: '' }))
    );
  
  
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://www.umadomena.com/matches/getMatchesFormatted');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMatches(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        
        fetchData();
      }, []);

      useEffect(() => {
        if (matches && matches.length > 0) {
          const fetchData = async () => {
            // Capture the current values of currentIndex, matches, and playersOfHomeTeam
            const currentIndexSnapshot = currentIndex;
            const matchesSnapshot = matches;
      
            // Set state values directly using the captured values
            setMatchid(matchesSnapshot[currentIndexSnapshot].match_id);
            setHomeTeamid(matchesSnapshot[currentIndexSnapshot].h_id);
            setAwayTeamid(matchesSnapshot[currentIndexSnapshot].a_id);
      
            // Fetch data using the captured values
            const homePlayers = await fetch("https://www.umadomena.com/players/clubPlayers", {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                teamID: Number(matchesSnapshot[currentIndexSnapshot].h_id),
              }),
            });
      
            const awayPlayers = await fetch("https://www.umadomena.com/players/clubPlayers", {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                teamID: Number(matchesSnapshot[currentIndexSnapshot].a_id),
              }),
            });
      
            const json1 = await homePlayers.json();
            const json2 = await awayPlayers.json();
      
            // Check if currentIndex and matches haven't changed since the fetch
            if (currentIndexSnapshot === currentIndex && matchesSnapshot === matches) {
              setPlayerOfHomeTeam(json1);
              setPlayersOfAwayTeam(json2);
            }
          };
      
          fetchData();
        }
      }, [currentIndex, matches]);


      const handleNext = () => {
        setCurrentIndex(currentIndex+ 1);
      };
    
      const handlePrev = () => {
        setCurrentIndex(currentIndex - 1);
      };

      const handleInputHomeScore = (e) => {
        setHomeScore(e.target.value)
      }

      const handleInputAwayScore = (e) => {
        setAwayScore(e.target.value)
      }

      const handleSelectChange = (index, value, isGoal) => {
        setSelectedValues((prevSelectedValues) => {
          const updatedValues = [...prevSelectedValues];
          const updatedPlayer = { ...updatedValues[index] }; // create a new object
          if (isGoal) {
            updatedPlayer.goals = value;
          } else {
            updatedPlayer.playerid = value;
          }
          updatedValues[index] = updatedPlayer;
          console.log(updatedValues);
          return updatedValues;
        });
      };
      
   
      const handleButtonClick = () => {
        // Reset the selected values
        setSelectedValues(Array(28).fill(''));
        // Toggle the visibility of selects
        setIsVisible((prevVisibility) => !prevVisibility);
      };

      const handleSubmit = () => {
        console.log('Uslo 1')
        const homePlayers = selectedValues.slice(0, 14);
        const filterHomePlayers = homePlayers.filter(item => item !== '' && item !== null && item !== undefined);
    
        const awayPlayers = selectedValues.slice(14, 28);
        const filterAwayPlayers = awayPlayers.filter(item => item !== '' && item !== null && item !== undefined);

        const postDataToBackend = async () => {
          try {
            
        
            const data = {
              matchid: matchid,
              hometeamid: homeTeamid,
              awayteamid: awayTeamid,
              homePlayersIds: filterHomePlayers,
              awayPlayersIds: filterAwayPlayers,
              homeScore: homeScore,
              awayScore: awayScore
            };
            console.log(data)
            const response = await fetch("https://www.umadomena.com/teamPlayerMatch/addAppGoals", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
        
            if (response.ok) {
              console.log('Data sent successfully');
              // Additional handling if needed
              window.location.reload(); // Reload the page
            } else {
              console.error('Failed to send data to the backend');
              // Handle errors accordingly
            }
          } catch (error) {
            console.error('Error:', error);
            // Handle errors accordingly
          }
        };
        postDataToBackend()
      }

      const nizRasporeda = matches.map((raspored, i) => {
        const birthDate = new Date(raspored.date);
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const formattedDate = birthDate.toLocaleDateString('en-US', options);
        return <GamesToModify key={i} date={formattedDate} time={raspored.time} home={raspored.h_team}  away={raspored.a_team} handleInputHomeScore={handleInputHomeScore} handleInputAwayScore={handleInputAwayScore}/>     
    })


  return (
    <div style={{ width: "60%" }} className="flex flex-wrap justify-center mx-1 border border-solid border-black p-4 mb-10 mt-10 mx-auto">
      <div className='header'>Edit game score and apperances</div>
      <div className="overflow-x-auto m-0 mb-10 mt-10" style={{ width: "100%" }}>
        <div className="border p-4 mb-4">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="bg-blue-500 text-white p-2 mr-2">
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex === nizRasporeda.length - 1} className="bg-blue-500 text-white p-2">
          Next
        </button>
      </div >
      
      <div className="overflow-x-auto m-0 mb-10 mt-10" style={{ width: "100%" }}>
      <div className="table-responsive" style={{ width: "100%" }}>
         <table className="table table-compact mx-auto" style={{width:"70%"}} data-theme="dark">
        {/* head */}
        <thead>
          <tr>
            <th>Date</th>
            <th style={{ textAlign: 'center' }}>Time</th>
            <th style={{ textAlign: 'end' }}>Home Team</th>
            <th></th>
            <th>Away Team</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         {nizRasporeda[currentIndex]}
        </tbody>
      </table>
      </div>
      <MyComponent homePlayers={playersOfHomeTeam} awayPlayers={playersOfAwayTeam} handleSelectChange={handleSelectChange} handleButtonClick={handleButtonClick} isVisible={isVisible} selectedValues={selectedValues}/>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
  Submit
</button>
  </div>
</div>
  )
}

export default AddGoalApp