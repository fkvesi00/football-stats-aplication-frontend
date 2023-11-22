// ButtonComponent.js
import React from 'react';
import { Button } from '@mui/material';

const ButtonComponent = ({ onClick, isVisible }) => {
  return (
    <Button variant="contained" onClick={onClick} style={{ marginBottom: '20px' }}>
      {isVisible ? 'Hide Selects' : 'Open Selects'}
    </Button>
  );
};

export default ButtonComponent;