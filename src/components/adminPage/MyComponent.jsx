import React, { useState } from 'react';
import { Button, Select, Grid, Container, Paper, Divider } from '@mui/material';

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
      <Button variant="contained" onClick={handleButtonClick} style={{ marginBottom: '20px' }}>
        {isVisible ? 'Hide Selects' : 'Open Selects'}
      </Button>
      {isVisible && (
        <Grid container spacing={2}>
          {selectedValues.map((selectedValue, index) => (
            <Grid item key={index} xs={6} sm={6} md={4} lg={3} xl={2}>
              <Paper style={{ padding: '10px', position: 'relative' }}>
                <Select
                  value={selectedValue}
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                  fullWidth
                >
                  <option value="" disabled>Select a value</option>
                  {valuesArray.map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                {index === 11 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{ position: 'absolute', top: '0', bottom: '0', right: '-1px', backgroundColor: 'red' }}
                  />
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default MyComponent;