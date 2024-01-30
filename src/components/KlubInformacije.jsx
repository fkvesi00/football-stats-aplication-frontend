import React from 'react';

function KlubInformacije({id}) {
  const logo = `/images/${id}.jpg`
    return (
    <div className="border p-4 rounded-lg max-w-md mx-auto my-8">
      {/* Club Logo */}
      <div className="mb-4">
        {/* Include your club logo here */}
        <img src={logo} alt="Club Logo" className="w-full h-auto" />
      </div>

      {/* Club Information */}
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

      {/* Text about the Club */}
      <div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default KlubInformacije;