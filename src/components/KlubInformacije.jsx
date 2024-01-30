import React from 'react';

function KlubInformacije({id}) {
  const logo = `/images/${id}.jpg`
  return (
    <>
    <div className="border p-4 rounded-lg max-w-md mx-auto my-8 flex flex-col items-center md:flex-row md:items-start md:justify-center md:text-left">
      {/* Left Column (Logo) */}
      <div className="mb-4 md:mb-0 md:mr-4">
        {/* Include your club logo here */}
        <img src={logo} alt="Club Logo" className="w-16 h-auto md:w-24" />
      </div>

      {/* Right Column (Club Information) */}
      <div>
        <div className="mb-2">
          <strong>Name of Club:</strong> Your Club Name
        </div>
        <div className="mb-2">
          <strong>Coach:</strong> Coach Name
        </div>
        <div className="mb-2">
          <strong>Number of Players:</strong> 25 {/* Replace with the actual number */}
        </div>
        <div className="mb-2">
          <strong>Number of Trophies:</strong> 10 {/* Replace with the actual number */}
        </div>
      </div>
      </div>
      {/* Text about the Club */}
      <div className="text-center mt-4">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    
    </>
  );
}

export default KlubInformacije;