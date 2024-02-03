import React from 'react';
import clubsData from './clubsInfo.js'

function KlubInformacije({id, tablica}) {

  const targetClub = clubsData.filter(club => club.id === Number(id));
  const treneri = Object.values(targetClub[0].coach) 
  
  const divTreneri = treneri.map(trener => {
    return <div>{trener}</div>
  })

  const logo = `/images/${id}.jpg`
  return (
    <div className='mx-10'>
    <div className="border p-4 rounded-lg max-w-md mx-auto my-8 flex flex-col items-center md:flex-row md:items-start md:justify-center md:text-left m-5" data-theme="fantasy">
      {/* Left Column (Logo) */}
      <div className="mb-4 md:mb-0 md:mr-8">
        {/* Include your club logo here */}
        <img src={logo} alt="Club Logo" className="w-40 h-auto md:w-40" />
      </div>

      {/* Right Column (Club Information) */}
      <div>
        <div className="mb-2">
          <h2 className="text-2xl font-bold">{targetClub.name}</h2>
        </div>
        <div className="mb-2">
          <strong>Voditelj:</strong> 
          <p>{divTreneri}</p>
        </div>
        <div className="mb-2">
          <strong>Media:</strong> 
          <p>www.instagram.com</p> {/* Replace with the actual number */}
        </div>
        <div className="mb-2">
          <strong>Trenutna pozicija: #</strong> 
          {console.log(tablica[0].clubStats.rank+1)}
        </div>
      </div>
      </div>
      {/* Text about the Club */}
      <div className="text-center mt-4">
        <p className="text-sm">
          U ovom odjelku mozemo napisati neke okvirne informacije o ovom klubu. Opisni tekst moze se odnosti na igrace, tim navijace nesto saljivo i informativno.
        </p>
      </div>
    </div>
  );
}

export default KlubInformacije;