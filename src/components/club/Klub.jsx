import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import ClubContext from '../../context/clubContext/ClubContext';
import {fetchPlayersOfClub, fetchPlayerStats, fetchMatchesOfClub} from '../../context/clubContext/ClubActions';

import UtakmiceKluba from '../match/UtakmiceKluba';
import IgraciTimaStatistika from '../player/IgraciTimaStatistika';
import KlubInformacije from './KlubInformacije';
import NavBarClub from '../layout/NavBarClub';
import RasporedKluba from '../match/RasporedKluba';
import KlubSlikaEkipe from './KlubSlikaEkipe';

function Klub({seasonid}) {
  const {id} = useParams();
  const [display, setDisplay] = useState('Utakmice')
  const logo = `/images/slike_ekipe/${id}.jpg`;
  console.log(logo)
  
  const {playersOfClub, matchesOfClub, playerStats, dispatch} = useContext(ClubContext)

  //ucitaj raspored tima i njegove igrace, cinimo to pomocu id kluba, koji se nalazi u parametru stranice
  useEffect(()=>{
    const fetchClubPlayersAndMatches = async (id, seasonid) => {
      try {
        const players = await fetchPlayersOfClub(id, seasonid)
        dispatch({
          type: 'GET_PLAYERS_OF_CLUB',
          payload: players
        })
        const matches = await fetchMatchesOfClub(id, seasonid)
        dispatch({
          type: 'GET_MATCHES_OF_CLUB',
          payload: matches
        })
        const stats = await fetchPlayerStats(id, seasonid)
        dispatch({
          type: 'GET_CLUB_PLAYERS_APPERANCES_AND_GOALS',
          payload: stats
        })
      } catch (error) {
        console.error("Error fetching ", error)
      }
    }
    fetchClubPlayersAndMatches(id, seasonid)
  },[id,seasonid])

useEffect(() => {
  // Scroll to the top of the screen when the component mounts
  window.scrollTo(0, 0);
}, [id]);

const listaIgraca = playersOfClub.map((igrac, i) => {
  const { playerid, playername } = igrac;

  return (
    <Link to={`/igrac/${playerid}`} key={i}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white p-2 m-2 border border-gray-300 rounded-md shadow-md"
      >
        <p className="text-lg font-semibold mb-1">{playername}</p>
      </motion.div>
    </Link>
  );
});


  //u sljedece dvije linije nalazimo utakmice koje su odigrane i koje ce se odigrati
  const matchesplayed = matchesOfClub.filter(utakmica => utakmica.score !== null)
  const matchesToPlay = matchesOfClub.filter(utakmica => utakmica.score == null)

  const playerStatistic = playerStats.map((player,i) => {
    const {playerid, playername, appearances, goals} = player
    return <IgraciTimaStatistika key={playerid} counter={i} playerid={playerid} playerName={playername} app={appearances} goals={goals}/>
  })

  
  const handleClick = (target) => {
    setDisplay(target)
  }


  return (
    <div>
    <div style={{ textAlign: 'center' }}>    
      <KlubInformacije id={id} />
      {logo && <KlubSlikaEkipe logo={logo} />}
      <NavBarClub handleClick={handleClick} target={display} />
  
      {display === 'Raspored' && <RasporedKluba raspored={matchesToPlay} />}
      {display === 'Utakmice' && <UtakmiceKluba utakmice={matchesplayed} />}
      {display === 'Igrači' && (
        <>
          <div className='header'>Igraci</div>
          <div className='flex justify-center flex-wrap'>{listaIgraca}</div>
        </>
      )}
      {display === 'Statistika' && (
        <div className='flex flex-col m-2 p-2'>
        <div className='text-center'>
          <div className='header'>Ljestvica strijelaca</div>
          <table className="table table-compact mx-auto rounded-lg shadow-lg" style={{ width: "60%", backgroundColor: "#556B2F", color: "white" }} data-theme='night'>
            <thead>
              <tr>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>#
                </th>
                <th style={{ borderRight: "1px solid black", textAlign: 'left' }}>
                  <FontAwesomeIcon icon={faUser} />
                </th>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>Golovi <FontAwesomeIcon icon={faFutbol} />
                </th>
                <th style={{ borderRight: "1px solid black", textAlign: 'center' }}>Nastupi
                </th>
              </tr>
            </thead>
            <tbody>
              {playerStatistic}
            </tbody>
          </table>
        </div>
      </div>
      )}
    </div>
  </div>
  )
}

export default Klub