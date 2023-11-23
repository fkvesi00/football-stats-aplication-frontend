import React, { useState } from 'react';
import { Container } from '@mui/material';
import SelectComponent from './SelectComponent';
import ButtonComponent from './ButtonComponent';

const MyComponent = ({homePlayers, awayPlayers, handleSelectChange , handleButtonClick, isVisible, selectedValues}) => {
  
  
 



  return (
    <Container className='m4 p-4'>
      <ButtonComponent onClick={handleButtonClick} isVisible={isVisible} />
      {isVisible && (
        <SelectComponent
          homePlayers={homePlayers}
          awayPlayers={awayPlayers}
          selectedValues={selectedValues}
          handleSelectChange={handleSelectChange}
        />
      )}
    </Container>
  );
};

export default MyComponent;