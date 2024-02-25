import React,{useState} from 'react'
import Utakmica from './Utakmica'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faChevronRight, faChevronLeft  } from '@fortawesome/free-solid-svg-icons';


function Utakmice({utakmice}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const nizUtakmica = utakmice.map((utakmica,i)=>{
    
      //console.log(utakmica)
      const birthDate = new Date(utakmica.date);
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const formattedDate = birthDate.toLocaleDateString('hr-HR', options);
      return <Utakmica key={i} MatchID={utakmica.match_id} Date={formattedDate} Time={utakmica.time}  
      HomeTeamID= {utakmica.h_team}  HomeTeamScore={utakmica.score} AwayTeamName = {utakmica.a_team} a_id = {utakmica.a_id} h_id = {utakmica.h_id}
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
      <div className="overflow-x-auto m-0 mt-10 mb-10">
      <div className="flex gap-4 justify-center p-3">
        <h2 className="header">{'Utakmice'} <FontAwesomeIcon icon={faFutbol} style={{color:'black'}}/></h2>
      </div>
      <div className="table-responsive">
      <table className="table table-compact mx-auto m-2 p-2 sm:w-6/7 md:w-6/7 lg:w-2/3 " data-theme="dark">
          <thead>
            <tr>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Date</th>
              <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Matchup</th>
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
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span className="text-gray-700">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
    )
  }
  export default Utakmice