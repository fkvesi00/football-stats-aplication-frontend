const StatsReducer = (state, action) => {
    switch(action.type){
        case 'GET_TOP20_SCORERS':
            return {
                ...state,
                scorers: action.payload
            }
        case 'SET_TABLE':
            return {
                ...state,
                table: action.payload
            }
        default: return state
    }
}

export default StatsReducer