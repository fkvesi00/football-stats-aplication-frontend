import React from 'react'
import AddClub from './AddClub';
import AddGame from './AddGame';
import AddPlayer from './AddPlayer';

function AdminPage() {

  return (
    <div >
      <AddClub />
      <AddGame />
      <AddPlayer/>
    </div>
  )
}

export default AdminPage
