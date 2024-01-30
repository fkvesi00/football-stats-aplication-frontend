import React from 'react';

function KlubInformacije({id}) {
  const logo = `/images/${id}.jpg`
  return (
    <>
    <div className="border p-4 rounded-lg max-w-md mx-auto my-8 flex flex-col items-center md:flex-row md:items-start md:justify-center md:text-left">
      {/* Left Column (Logo) */}
      <div className="mb-4 md:mb-0 md:mr-8">
        {/* Include your club logo here */}
        <img src={logo} alt="Club Logo" className="w-40 h-auto md:w-40" />
      </div>

      {/* Right Column (Club Information) */}
      <div>
        <div className="mb-2">
          <strong>Naziv kluba:</strong> 
          <h2>Your Club Name</h2>
        </div>
        <div className="mb-2">
          <strong>Voditelj:</strong> 
          <p>Coach Name</p>
        </div>
        <div className="mb-2">
          <strong>Media:</strong> 
          <p>www.instagram.com</p> {/* Replace with the actual number */}
        </div>
        <div className="mb-2">
          <strong>Osvojene lige:</strong> 
          <p>4</p> {/* Replace with the actual number */}
        </div>
        <div className="mb-2">
          <strong>Trenutna pozicija: #6</strong> 
        </div>
      </div>
      </div>
      {/* Text about the Club */}
      <div className="text-center mt-4">
        <p className="text-sm">
          U ovom odjelku mozemo napisati neke okvirne informacije o ovom klubu. Opisni tekst moze se odnosti na igrace, tim navijace nesto saljivo i informativno.
        </p>
      </div>
    </>
  );
}

export default KlubInformacije;