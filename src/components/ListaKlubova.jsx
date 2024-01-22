import React, { useEffect,useState } from 'react'
import KlubCard from '../shared/KlubCard'
import './header.css';
import './animation.css'

function ListaKlubova() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchClubs = async () => {
      const clubsResponse = await fetch("https://www.umadomena.com/clubs", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
  
      const clubsJSON = await clubsResponse.json();
  
      // Update the logo property with the Netlify function endpoint
      
  
      setClubs(clubsJSON);
    };
  
    fetchClubs();
  }, []);

  const listaKlubova = clubs.map((klub, id) => {
    return <KlubCard key={id} id={klub.teamid} ime={klub.teamname} logo={klub.logo} />;
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