import React, { useEffect, useContext } from 'react'
import KlubCard from '../../shared/KlubCard'
import ClubContext from '../../context/clubContext/ClubContext';
import {motion} from 'framer-motion'
import '../layout/header.css';
import '../layout/animation.css'

function ListaKlubova() {
  const {clubs, loading, fetchClubs, setLoading} = useContext(ClubContext)
  
  useEffect(() => {

    const delay = setTimeout(async () => {
      await fetchClubs();
      setLoading(false);
    }, 200);

    return () => clearTimeout(delay);
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