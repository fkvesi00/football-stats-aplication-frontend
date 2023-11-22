import React from 'react'
import AddClub from './AddClub';
import AddGame from './AddGame';
import AddPlayer from './AddPlayer';
import AddPlayerToClub from './AddPlayerToClub';
import AddGoalApp from './AddGoalApp';


function AdminPage() {
  

  return (
    <div >
      <AddClub />
      <AddGame />
      <AddPlayer/>
      <AddPlayerToClub/>
      <AddGoalApp />
    </div>
  )
}

export default AdminPage
