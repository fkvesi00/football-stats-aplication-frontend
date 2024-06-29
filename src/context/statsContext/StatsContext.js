import { createContext, useState } from "react";
import {fetchScorers} from './StatsActions'

const StasContext = createContext()

export const StasProvider = ({children}) =>{
    const [scorers, setScorers] = useState([]);

    const loadScorers = async () => {
        await fetchScorers(setScorers)
    }

    return (
        <StasContext.Provider value={{
            scorers,
            loadScorers
        }}>
            {children}
        </StasContext.Provider>
    )
}

export default StasContext