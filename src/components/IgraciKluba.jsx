import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function IgraciKluba({playerid, playername}) {
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="border-b border-gray-300"
      data-theme='fantasy'
      style={{ padding: '10px' }}
    >
      <td style={{ borderRight: "1px solid black", textAlign: 'center', fontFamily: 'Lucida Console, Monaco, monospace' }}></td>
       <td style={{ borderRight: "1px solid black", textAlign: 'left', fontFamily: 'Lucida Console, Monaco, monospace', backgroundColor: '#0b5437', color: 'white' }}>img</td>
       <Link to={`/igrac/${playerid}`}><td style={{ borderRight: "1px solid black", textAlign: 'left', fontFamily: 'Montserrat' }}>{playername}</td></Link>
    </motion.tr>
    
  )
}




export default IgraciKluba
