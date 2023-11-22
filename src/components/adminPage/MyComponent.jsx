import React, { useState } from 'react';
import { Container } from '@mui/material';
import SelectComponent from './SelectComponent';
import ButtonComponent from './ButtonComponent';

const MyComponent = () => {
  const [valuesArray, setValuesArray] = useState([
    'Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5',
    'Value 6', 'Value 7', 'Value 8', 'Value 9', 'Value 10',
    'Value 11', 'Value 12', 'Value 13', 'Value 14', 'Value 15',
    'Value 16', 'Value 17', 'Value 18', 'Value 19', 'Value 20',
    'Value 21', 'Value 22', 'Value 23', 'Value 24',
  ]);

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
    setSelectedValues(updatedSelectedValues);

    // You can perform any other actions with the selected value here
    console.log('Selected value:', selectedValue);
  };

  return (
    <Container>
      <ButtonComponent onClick={handleButtonClick} isVisible={isVisible} />
      {isVisible && (
        <SelectComponent
          valuesArray={valuesArray}
          selectedValues={selectedValues}
          handleSelectChange={handleSelectChange}
        />
      )}
    </Container>
  );
};

export default MyComponent;