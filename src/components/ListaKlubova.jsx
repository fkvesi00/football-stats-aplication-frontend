import React, { useEffect,useState } from 'react'
import KlubCard from '../shared/KlubCard'
import './header.css';
import './animation.css'

function ListaKlubova() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageUrl = 'https://main--uma-metkovic.netlify.app/api/proxy-image';
  useEffect(() => {
    // Simulating an asynchronous operation with a 1-second delay
    const delay = setTimeout(() => {
      setLoading(false);
    }, 200);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    const fetchClubs = async () => {
      const clubsResponse = await fetch("https://www.umadomena.com/clubs", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
  
      const clubsJSON = await clubsResponse.json();
  
      // Update the logo property with the Netlify function endpoint
      const clubsWithNetlifyEndpoint = clubsJSON.map((klub) => ({
        ...klub,
        logo: `${imageUrl}?url=${encodeURIComponent(klub.logo)}`,
      }));
  
      setClubs(clubsWithNetlifyEndpoint);
    };
  
    fetchClubs();
  }, []);

  const listaKlubova = clubs.map((klub, id) => {
    const clubLogoUrl = `${imageUrl}?url=${encodeURIComponent(klub.logo)}`;
    return <KlubCard key={id} id={klub.teamid} ime={klub.teamname} logo={clubLogoUrl} />;
  });


  const renderContent = (
    <div data-theme='garden'>
      <div className='header'>Klubovi</div>
      <div className='flex justify-center flex-wrap'>
        {listaKlubova}
      </div>
    </div>
  );


  const LoadingSpinner = () => (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );

   return loading ? <LoadingSpinner /> : renderContent;
}

export default ListaKlubova