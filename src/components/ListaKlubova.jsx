import React, { useEffect,useState } from 'react'
import KlubCard from '../shared/KlubCard'
import './header.css';
import './animation.css'

function ListaKlubova() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation with a 1-second delay
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(delay);
  }, []);

  useEffect(()=>{
    
    const fetchClubs= async () => {
      const clubs = await fetch("http://localhost:3000/clubs",{ 
        method:'GET',
        headers:{'Content-Type':'application/json'}
      });
      const clubsJSON = await clubs.json()
      setClubs(clubsJSON)
    }

    fetchClubs()
  },[])

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