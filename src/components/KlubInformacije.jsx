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
       <div className="border p-4 rounded-lg max-w-md mx-auto my-8 flex flex-col items-center md:flex-row md:items-start md:justify-center md:text-left m-5" data-theme="fantasy">
       <div className="mb-4 md:mb-0 md:mr-8 relative overflow-hidden rounded-xl"
  style={{
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    borderRadius: '20px',
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-600"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src={logo}
      alt="Club Logo"
      className="w-40 h-auto md:w-40 rounded-xl transform hover:scale-110 transition-transform duration-300"
    />
  </div>
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