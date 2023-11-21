import React from 'react'
import AddClub from './AddClub';
import AddGame from './AddGame';
import AddPlayer from './AddPlayer';
import AddPlayerToClub from './AddPlayerToClub';
import AddGoalApp from './AddGoalApp';
import MyComponent from './MyComponent';

function AdminPage() {

  return (
    <div >
      <AddClub />
      <AddGame />
      <AddPlayer/>
      <AddPlayerToClub/>
      <AddGoalApp />
      {/*<Exapmle/> */}
      <MyComponent/>
    </div>
  )
}

export default AdminPage
