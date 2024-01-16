import React,{useState} from 'react'
import Utakmica from './Utakmica'

function Utakmice({utakmice}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const nizUtakmica = utakmice.map((utakmica,i)=>{
    
      //console.log(utakmica)
      const birthDate = new Date(utakmica.date);
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const formattedDate = birthDate.toLocaleDateString('hr-HR', options);
      return <Utakmica key={i} MatchID={utakmica.match_id} Date={formattedDate} Time={utakmica.time}  
      HomeTeamID= {utakmica.h_team}  HomeTeamScore={utakmica.score} AwayTeamName = {utakmica.a_team} 
      />
    })
    
    const totalGames = nizUtakmica.length;
    const totalPages = Math.ceil(totalGames / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentGames = nizUtakmica.slice(startIndex, endIndex)
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    return (
      <div className="overflow-x-auto m-0 mt-20 mb-10">
      <div className="flex gap-4 justify-center p-5">
        <h2 className="header">Utakmice</h2>
      </div>
      <div className="flex gap-4 justify-center p-5">
        <h3 className="text-lg font-semibold text-gray-600">Kolo {currentPage}</h3>
      </div>
      <div className="table-responsive">
       <table className="table table-compact mx-auto sm:w-full lg:w-2/3 m-2 p-2" data-theme="retro">
          <thead>
            <tr>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Date</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ textAlign: 'center' }}>Matchup</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ textAlign: 'center' }}>Score</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ textAlign: 'center' }}>Link</th>
            </tr>
          </thead>
          <tbody>{currentGames}</tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-gray-700">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    )
  }
  export default Utakmice