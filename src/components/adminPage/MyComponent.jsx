import React, { useState } from 'react';
import { Container } from '@mui/material';
import SelectComponent from './SelectComponent';
import ButtonComponent from './ButtonComponent';

const MyComponent = ({homePlayers, awayPlayers}) => {
  
  
  const [selectedValues, setSelectedValues] = useState(Array(24).fill(''));
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    // Reset the selected values
    setSelectedValues(Array(24).fill(''));
    // Toggle the visibility of selects
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  

  const handleSelectChange = (index, selectedValue) => {
    // Update the selected value at the given index
    const updatedSelectedValues = [...selectedValues];
    updatedSelectedValues[index] = selectedValue;
    const selectedPlayers = []
    selectedPlayers.push(selectedValue)
    setSelectedValues(updatedSelectedValues);
    
    // You can perform any other actions with the selected value here
    console.log('Selected value:', selectedValue);
    
    
    
  };

  return (
    <Container>
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