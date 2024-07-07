import { createContext, useReducer } from 'react'
import { fetchGamesBySeason } from './ScheduleActions';
import { matchFormat } from '../matchContext/MatchesActions';
import ScheduleReducer from './ScheduleRedcuer';

const ScheduleContext = createContext()

export const ScheduleProvider = ({children}) => {
    const initialState = {
        schedule: []
    }
    
    const [state, dispatch] = useReducer(ScheduleReducer, initialState)

    const loadGamesBySeason = async () => {
        const scheduleBySeason = await fetchGamesBySeason()

        dispatch({
            type: 'GET_SCHEDULE',
            payload: matchFormat(scheduleBySeason)
        })
    }
    return <ScheduleContext.Provider value={{
        schedule: state.schedule,
        loadGamesBySeason
    }}>
        {children}
    </ScheduleContext.Provider>
}

export default ScheduleContext