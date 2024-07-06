import { createContext, useState } from "react";
import {fetchScorers, calculateTable} from './StatsActions'

const StatsContext = createContext()

export const StatsProvider = ({children}) =>{
    const [scorers, setScorers] = useState([]);
    const [table, setTable] = useState([])

    const loadScorers = async () => {
        await fetchScorers(setScorers)
    }

    const loadTable = (allGamesByClub) => {
        setTable(calculateTable(allGamesByClub))
    }
    
    return (
        <StatsContext.Provider value={{
            scorers,
            table,
            loadScorers,
            loadTable
        }}>
            {children}
        </StatsContext.Provider>
    )
}

export default StatsContext