import React, { useState } from 'react';

function Exapmle() {
    const [currentSet, setCurrentSet] = useState(0);

    const divs = [
      'Div 1', 'Div 2', 'Div 3', 'Div 4', 'Div 5', 'Div 6',
      'Div 7', 'Div 8', 'Div 9', 'Div 10', 'Div 11', 'Div 12',
      'Div 13', 'Div 14', 'Div 15', 'Div 16', 'Div 17', 'Div 18',
    ];
  
    const divsPerPage = 6;
    const totalPages = Math.ceil(divs.length / divsPerPage);
  
    const handlePrevSet = () => {
      setCurrentSet((prevSet) => (prevSet - 1 + totalPages) % totalPages);
    };
  
    const handleNextSet = () => {
      setCurrentSet((prevSet) => (prevSet + 1) % totalPages);
    };
  
    const displayDivs = divs.slice(
      currentSet * divsPerPage,
      (currentSet + 1) * divsPerPage
    );
  
    return (
      <div>
        <div className="set">
          {displayDivs.map((div, index) => (
            <div key={index}>{div}</div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevSet}>Previous Set</button>
          <button onClick={handleNextSet}>Next Set</button>
        </div>
      </div>
    );
  }

export default Exapmle
