import React from 'react'
import Quarterfinals from './Quarterfinals';
import Semifinals from './Semifinals';
import './cup.css'
import Finals from './Finals';
import EightFinals from './EightFinals';

function Cup() {
    return (
        <div className="container">
          <h1>UMA KUP</h1>
          <div className="tournament-bracket tournament-bracket--rounded">
            <EightFinals />
            <Quarterfinals />
            <Semifinals />
            <Finals/>
            {/* You can add other rounds like Semifinals, Bronze, and Gold here */}
          </div>
        </div>
      );
}

export default Cup
