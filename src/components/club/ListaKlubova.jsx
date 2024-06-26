import React, { useEffect, useContext } from 'react';
import ClubContext from '../../context/clubContext/ClubContext';
import KlubCard from '../../shared/KlubCard'; // Assuming KlubCard is imported from correct path
import { motion } from 'framer-motion';
import '../layout/header.css';
import '../layout/animation.css';

function ListaKlubova() {
  const { clubs, loading, fetchClubs, setLoading } = useContext(ClubContext);
  
  useEffect(() => {
    const delay = setTimeout(async () => {
      await fetchClubs();
      setLoading(false);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => clearTimeout(delay);
  }, []);


  const renderContent = (
    <div data-theme='garden'>
      <div className='header'>Klubovi</div>
      <div className='flex justify-center flex-wrap'>
        {clubs.map((klub, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <KlubCard id={klub.teamid} ime={klub.teamname} logo={`/images/${klub.teamid}.jpg`} />
          </motion.div>
        ))}
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

export default ListaKlubova;
