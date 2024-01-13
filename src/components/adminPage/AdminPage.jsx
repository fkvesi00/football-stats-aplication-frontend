import React, { useState } from 'react';
import AddClub from './AddClub';
import AddGame from './AddGame';
import AddPlayer from './AddPlayer';
import AddPlayerToClub from './AddPlayerToClub';
import AddGoalApp from './AddGoalApp';

function AdminPage({ loggedInViaSubmitButton }) {
  return (
    <div>
      {loggedInViaSubmitButton ? (
        <>
          <AddClub />
          <AddGame />
          <AddPlayer />
          <AddPlayerToClub />
          <AddGoalApp />
        </>
      ) : (
        <div>
          <p>You have no right here. Please go back to the root page.</p>
        </div>
      )}
    </div>
  );
}

export default AdminPage;