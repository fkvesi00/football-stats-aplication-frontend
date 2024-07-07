const ScheduleReducer = (state, action) =>{
    switch(action.type){
        case 'GET_SCHEDULE':
            return {
                ...state,
                schedule: action.payload
            }
        default: return state
    }
}

export default ScheduleReducer