// SelectComponent.js
import React from 'react';
import { Select, Grid, Paper, Divider } from '@mui/material';

const SelectComponent = ({ valuesArray, selectedValues, handleSelectChange }) => {
    const handleChange = (index, e) => {
        console.log('Handle change called:', index, e.target.value);
        handleSelectChange(index, e.target.value);
      };
    
      return (
        <Grid container spacing={2}>
          {selectedValues.map((selectedValue, index) => (
            <Grid item key={index} xs={6} sm={6} md={4} lg={3} xl={2}>
              <Paper style={{ padding: '10px', position: 'relative' }}>
              <select value={selectedValue} onChange={(e) => handleChange(index, e)}>
  <option value="" disabled>Select a value</option>
  {valuesArray.map((value) => (
    <option key={value} value={value}>{value}</option>
  ))}
</select>
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
      );
    };

export default SelectComponent;