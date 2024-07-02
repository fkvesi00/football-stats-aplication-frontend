import {useEffect, useContext} from 'react';
import Table from './Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrophy   } from '@fortawesome/free-solid-svg-icons';
import MatchContext from '../../context/matchContext/MatchContext';
import ClubContext from '../../context/clubContext/ClubContext';

const StandingsTable = () => {
  const {allMatches, loadAllMatches} = useContext(MatchContext)
  const {clubs, loadClubs} = useContext(ClubContext)
  const stats = []
  useEffect(()=> {
    loadAllMatches()
    loadClubs()
  },[])

  const matchesplayed = allMatches.filter(utakmica => utakmica.score !== null)

  const compareByDate = (a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateB - dateA;
};

// Sort the array by date
const mathesPlayedSorted = matchesplayed.sort(compareByDate);


//ovdje cemo stvorit legendarni objekt sa teamid i teamname i svim utakmicama tog tima
const teamMatches = (teams, allMatches) => {
  const arrayOfArrays = [];

  teams.forEach((team) => {
    const matchesOfTeam = allMatches.reduce((accumulator, match) => {
      if (team.teamid === match.a_id || team.teamid === match.h_id) {
        accumulator.push(match);
      }
      return accumulator;
    }, []);

    const object = {
      id: team.teamid,
      name: team.teamname,
      matches: matchesOfTeam,
    };

    arrayOfArrays.push(object);
  });

  return arrayOfArrays;
};

  const allGamesByClub = teamMatches(clubs, mathesPlayedSorted)
  
  
  allGamesByClub.forEach(club =>{
    const clubStats = {
      id:0,
      won: 0,
      draw: 0,
      lost: 0,
      points: 0,
      gf: 0,
      ga: 0,
      pm: 0,
      name: '',
      rank:''
    }
    
  clubStats.id = club.id
  clubStats.name = club.name
    for (const utakmica of club.matches){
     
    if(utakmica.h_id === club.id){
      clubStats.gf+=parseInt(utakmica.score[0])
      clubStats.ga+=parseInt(utakmica.score[2])
      clubStats.pm=clubStats.gf-clubStats.ga
      if(utakmica.score[0] > utakmica.score[2]){
        clubStats.points+=3
        clubStats.won++;
      }
      else if(utakmica.score[0] < utakmica.score[2]){
        clubStats.lost++
      }
      else {
        clubStats.draw++;
        clubStats.points++;
      }
    }else{
      clubStats.gf+=parseInt(utakmica.score[2])
      clubStats.ga+=parseInt(utakmica.score[0])
      clubStats.pm= clubStats.gf - clubStats.ga
      if(utakmica.score[2] > utakmica.score[0]){
        clubStats.won++;
        clubStats.points+=3;
      }else if(utakmica.score[2] < utakmica.score[0]){
        clubStats.lost++
      }else{
        clubStats.draw++;
        clubStats.points++;
      }
    }
  }
    if(clubStats.id === 10){
      clubStats.points -=6
    }
    stats.push(clubStats)
  })

  const sortedStats = stats.sort((a, b) => {
    if (b.points !== a.points) {
      // Sort by points in descending order
      return b.points - a.points;
    } else {
      const clubB = b.gf - b.ga
      const clubA = a.gf - a.ga
      // If points are the same, sort by gf in ascending order
      return clubA - clubB;
    }
  });
  sortedStats.map((club,i) => club.rank=i)
 

  const rows = sortedStats.map((clubStats, i) => (
    <Table
      key={i}
      rank={i + 1}
      name={clubStats.name}
      played={clubStats.won + clubStats.lost + clubStats.draw}
      w={clubStats.won}
      d={clubStats.draw}
      l={clubStats.lost}
      gf={clubStats.gf}
      ga={clubStats.ga}
      points={clubStats.points}
      id={clubStats.id}
    />
  ));

  return (
    <div className="overflow-x-auto my-10 mr-1 ml-1 mt-5 mb-5 mx-auto max-w-[2/3]">
      <div className="header text-center mb-2 mt-2">
        {'Ljestvica'} <FontAwesomeIcon icon={faTrophy} style={{ color: 'gold' }}/>
      </div>
      <table className="table-auto mx-auto" data-theme="night">
        <thead>
          <tr>
            <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Rank</th>
            <th className="p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Name</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">P</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">W</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">D</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">L</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">+-</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hidden sm:table-cell">±</th>
            <th className="p-2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Pts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">{rows}</tbody>
      </table>
  
      <div className="text-center mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
        <div className="font-bold">Napomena:</div>
        <div className="ml-4 mt-2">
          <div>MNK NEUM -6 bodova;</div>
          <div>Nedolazak na utakmicu dvaput zaredom,</div>
          <div>odustajanje od daljnjeg natjecanja.</div>
        </div>
      </div>
  
      <div className="text-center mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
        <div className="font-bold">Napomena:</div>
        <div className="ml-4 mt-2">
          <div>Međusobni ogled glavno mjerilo</div>
          <div>za dvije momčadi sa istim brojem bodova</div> 
          <div>*za drugo i treće mjesto:</div>
          <div>AMNK OPUZEN - MNK VID 2:0/0:0</div>
        </div>
      </div>
    </div>
  );
};

export default StandingsTable;
