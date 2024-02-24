// SelectComponent.js
const SelectComponent = ({ homePlayers, awayPlayers, selectedValues, handleSelectChange }) => {
  const handleChange = (index, e, isGoal) => {
    console.log('Handle change of player :', index, e, isGoal);
    handleSelectChange(index, e.target.value, isGoal);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {selectedValues.map((selectedValue, index) => (
       <div key={index} className={`p-4 relative border ${index >= 13 ? 'border-black' : 'border-gray-300'}`}>
          <select
            value={selectedValue.playerid || ''}
            onChange={(e) => handleChange(index, e, false)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">
              Select a player
            </option>
            {index < 14
              ? homePlayers.map((value) => (
                  <option key={value.playerid} value={value.playerid}>
                    {value.playername}
                  </option>
                ))
              : awayPlayers.map((value) => (
                  <option key={value.playerid} value={value.playerid}>
                    {value.playername}
                  </option>
                ))}
          </select>
          <input
            type="number"
            placeholder="Enter a number"
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            min="0"
            onChange={(e) => handleChange(index, e, true)}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectComponent;