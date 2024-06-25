import React, { useEffect,useState } from 'react'
import KlubCard from '../../shared/KlubCard'
import {motion} from 'framer-motion'
import './header.css';
import './animation.css'

function ListaKlubova() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  
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
      
  
      setClubs(clubsJSON);
    };
  
    fetchClubs();
  }, []);

  const listaKlubova = clubs.map((klub, id) => (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <KlubCard id={klub.teamid} ime={klub.teamname} logo={`/images/${klub.teamid}.jpg`} />
    </motion.div>
  ));


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