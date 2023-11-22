import React,{ useState, useEffect } from 'react'
import GamesToModify from './GamesToModify'
import MyComponent from './MyComponent';

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

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % nizRasporeda.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + nizRasporeda.length) % nizRasporeda.length);
    };
  

  return (
    <div style={{ width: "60%" }} className="flex flex-wrap justify-center mx-1 border border-solid border-black p-4 mb-10 mt-10 mx-auto">
      <div className='header'>Edit game score and apperances</div>
      <div className="overflow-x-auto m-0 mb-10 mt-10" style={{ width: "100%" }}>
        <div className="table-responsive" style={{ width: "100%" }}>
        <div className="border p-4 mb-4">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="bg-blue-500 text-white p-2 mr-2">
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex === nizRasporeda.length - 1} className="bg-blue-500 text-white p-2">
          Next
        </button>
      </div>
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
         {nizRasporeda[currentIndex]}
        </tbody>
      </table>
      <MyComponent />
    </div>
  </div>
</div>
  )
}

export default AddGoalApp
