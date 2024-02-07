import React from 'react';
import clubsData from './clubsInfo.js';

function KlubInformacije({ id, tablica }) {
  const targetClub = clubsData.filter((club) => club.id === Number(id));

  if (!targetClub.length) {
    // Handle the case where the club with the specified ID is not found
    return <div>Club not found</div>;
  }

  const treneri = targetClub[0].coach ? Object.values(targetClub[0].coach) : null;

  const divTreneri = treneri
  ? treneri.map((trener, index) => (
      <div key={index} style={{ fontFamily: 'Times New Roman, serif' }}>
        {trener}
      </div>
    ))
  : <div>/</div>;

  const logo = `/images/${id}.jpg`;

  return (
    <div className="mx-10">
          <div className="border rounded-lg max-w-md mx-auto my-8 flex flex-col items-center md:flex-row md:items-start md:justify-center md:text-left m-5 shadow-lg" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #EAEAEA 100%)' }}>
    {/* Left Column (Logo) */}
    <div className="mb-4 md:mb-0 md:mr-8 p-4 bg-white rounded-lg flex justify-center items-center" style={{ minWidth: '160px', minHeight: '160px' }}>
      {/* Include your club logo here */}
      <img src={logo} alt="Club Logo" className="w-40 h-auto md:w-40" />
    </div>
        {/* Right Column (Club Information) */}
        <div>
          <div className="mb-2">
            {targetClub[0].name && <h2 className="text-2xl font-bold">{targetClub[0].name}</h2>}
          </div>
          <div className="mb-2">
            <strong>Voditelj/i:</strong>
            <p>{divTreneri}</p>
          </div>
          <div className="mb-2">
            <strong>Media:</strong>
            <p>www.instagram.com</p> {/* Replace with the actual number */}
          </div>
          {/* <div className="mb-2">
            {tablica[0] ? (
              <strong>Trenutna pozicija: #{tablica[0].rank + 1}</strong>
            ) : (
              <></>
            )}
          </div> */}
        </div>
      </div>
      {/* Text about the Club */}
{/*       <div className="text-center mt-4">
        <p className="text-sm">
          
        </p>
      </div> */}
    </div>
  );
}

export default KlubInformacije;