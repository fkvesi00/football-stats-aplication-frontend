import {createContext, useState} from 'react'
import KlubCard from '../../shared/KlubCard'
import {motion} from 'framer-motion'

const ClubContext = createContext()

export const ClubProvider =  ({children})  => {
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchClubs = async () => {
      const clubsResponse = await fetch("https://www.umadomena.com/clubs", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
  
      const clubsJSON = await clubsResponse.json();
    
      setClubs(clubsJSON);
    };
  

  return <ClubContext.Provider value={{
    clubs,
    loading,
    setLoading,
    fetchClubs
  }}>
    {children}
  </ClubContext.Provider>
}

export default ClubContext