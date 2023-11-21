import React,{ useState, useEffect } from 'react'
import GamesToModify from './GamesToModify'

function AddGoalApp() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/getMatches');
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


      const nizRasporeda = matches.map((raspored, i) => {
        const birthDate = new Date(raspored.date);
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const formattedDate = birthDate.toLocaleDateString('en-US', options);
        return <GamesToModify key={i} date={formattedDate} time={raspored.time} home={raspored.h_team}  away={raspored.a_team}/>     
    })
  return (
    <div style={{ width: "60%" }} className="flex flex-wrap justify-center mx-1 border border-solid border-black p-4 mb-10 mt-10 mx-auto">
  <div className="overflow-x-auto m-0 mb-10 mt-10" style={{ width: "100%" }}>
    <div className="table-responsive" style={{ width: "100%" }}>
      <table className="table table-compact mx-auto" style={{ width: "100%" }} data-theme="dark">
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
          {nizRasporeda}
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}

export default AddGoalApp

