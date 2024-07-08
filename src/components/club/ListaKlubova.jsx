import { useEffect, useContext, useState } from 'react';
import { motion } from 'framer-motion';

import ClubContext from '../../context/clubContext/ClubContext';
import {fetchClubs} from '../../context/clubContext/ClubActions'
import KlubCard from '../../shared/KlubCard'; // Replace with correct path if needed
import '../layout/header.css';
import '../layout/animation.css';

function ListaKlubova() {
  const { clubs, dispatch } = useContext(ClubContext);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadClubs = async () => {
      try {
        const fetchedClubs = await fetchClubs();
        dispatch({
          type: 'GET_CLUBS',
          payload: fetchedClubs,
        });
      } catch (error) {
        console.error('Error fetching clubs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadClubs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);


  const renderContent = (
    <div data-theme='garden'>
      <div className='header'>Klubovi</div>
      <div className='flex justify-center flex-wrap'>
        {clubs && clubs.map((klub, id) => (
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
