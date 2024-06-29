import React, { useEffect } from 'react';
import { useAuth } from '../../context/authContext/AuthContext';
import AddClub from './AddClub';
import AddGame from './AddGame';
import AddPlayer from './AddPlayer';
import AddPlayerToClub from './AddPlayerToClub';
import AddGoalApp from './AddGoalApp';

function AdminPage() {
  const { isLoginValid, resetLoginValid } = useAuth();

  // useEffect to reset isLoginValid when the component unmounts
  useEffect(() => {
    return () => {
      // Reset login state when AdminPage component unmounts
      resetLoginValid();
    };
  }, [resetLoginValid]);

  return (
    <div>
      {isLoginValid ? (
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