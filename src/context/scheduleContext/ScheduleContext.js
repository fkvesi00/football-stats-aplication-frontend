import { createContext, useState } from 'react'
import { fetchGamesBySeason } from './ScheduleActions';
import { matchFormat } from '../matchContext/MatchesActions';

const ScheduleContext = createContext()

export const ScheduleProvider = ({children}) => {
    const [schedule, setSchedule] = useState([]);

    const loadGamesBySeason = async () => {
        const scheduleBySeason = await fetchGamesBySeason()

        setSchedule(matchFormat(scheduleBySeason))
    }
    return <ScheduleContext.Provider value={{
        schedule,
        loadGamesBySeason
    }}>
        {children}
    </ScheduleContext.Provider>
}

export default ScheduleContext