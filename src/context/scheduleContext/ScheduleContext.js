import { createContext, useState } from 'react'
import { fetchGamesBySeason } from './ScheduleActions';

const ScheduleContext = createContext()

export const ScheduleProvider = ({children}) => {
    const [raspored, setRaspored] = useState([]);

    const loadGamesBySeason = () => {
        fetchGamesBySeason(setRaspored)
    }
    return <ScheduleContext.Provider value={{
        raspored,
        loadGamesBySeason
    }}>
        {children}
    </ScheduleContext.Provider>
}

export default ScheduleContext