import {useContext, useEffect, useState} from 'react'
import {motion} from 'framer-motion'

import PlayerCard from '../../shared/PlayerCard'
import PlayerContext from '../../context/playersContext/PlayerContext'
import {fetchPlayers, calculatePlayerAge} from '../../context/playersContext/PlayerActions'

function ListaIgraca() {
    const {players, dispatch} = useContext(PlayerContext)
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const loadPlayers = async () => {
        try {
          const fetchedPlayers = await fetchPlayers();
          dispatch({
            type: 'GET_ALL_PLAYERS',
            payload: fetchedPlayers,
          });
        } catch (error) {
          console.error('Error fetching players:', error);
        } finally {
          setLoading(false);
        }
      };
  
      loadPlayers();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    
    
      const filterPlayer = players.filter(el => {
        return el.playername.toLowerCase().includes(input.toLocaleLowerCase());
      })

      const onSearchChange = (event) =>{
       setInput(event.target.value)
      }


      const listaIgraca = filterPlayer.map((igrac, i) => {
        const { playerid, playername, playerbirth, playernationality, PlayerPhoto } = igrac;
        const playerAge = calculatePlayerAge(playerbirth);
      
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PlayerCard ime={playername} godine={playerAge} nacionalnost={playernationality} slika={PlayerPhoto} id={playerid} />
          </motion.div>
        );
      });

      const LoadingSpinner = () => (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
 
      return loading ? <LoadingSpinner /> : (
      <div data-theme='garden'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input
        placeholder="Search player..."
        onChange={onSearchChange}
        type="text"
        style={{
          padding: '5px',
          margin:'7px',
          border: '2px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
      <div className='flex justify-center flex-wrap' >
       {listaIgraca}
      </div>
    </div>
    )
}

export default ListaIgraca
