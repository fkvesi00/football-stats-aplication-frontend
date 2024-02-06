import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './about.css'


function About() {
  const text= `Web aplikacija koja pruža informacije i statistiku o malonogometnoj ligi koja se igra na području Metkovića pod nazivom UMA-Metković.

  Aplikacija pruža informativnu platformu koja na naslovnoj stranici prikazuje trenutnu ljestvicu poretka lige sa odigranim utakmicama, brojevima postignutih i primljenih golova, gol razlikom i sl. 
  Nakon ljestvice dan je raspored odigravanja nadolazećih utakmica  te pregled rezultata svih već odigranih utakmica u dosadašnjem tijeku sezone. 
  Osim što su prikazane odigrane utakmice, odabirom odgovarajuće poveznice dolazi se do podataka o tome koji su sve igrači nastupili na toj utakmici te tko se od njih upisao u strijelce za svoj klub.
  U zaglavlju nalazimo poveznice na stranice koje nude pregled svih igrača, klubova i ljestvice strijelaca. 
  
  Odabirom pojedinog igrača dobit ćemo sve osnovne informacije o njemu.
  Osim osnovnih informacija, aplikacija vodi statistiku o igraču tj. prati broj nastupa ovog igrača kroz sezone za pojedine klubove, kao i broj postignutih golova. 

  Klupske stranice prikazuju informacije o tom klubu, uključujući podatke osim igračima tog kluba, već odigranim i utakmicama koje  se tek trebaju igrati, kao i prikaz poretka, broja pobjeda,
  poraza i neriješenih utakmica, broj postignutih i primljenih golova i na kraju ostvarenog broja bodova.
  `

  return (
    <Card>
        <div className="about">
            <h1>UMA Metković</h1>
            <p>{text}</p>
            
            
            <p>Vaersion: 1.0.0</p>
            <p>
                <Link to='/'>Back to home</Link>
            </p>
        </div>
        
    </Card>
  )
}

export default About