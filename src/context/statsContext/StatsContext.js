import { createContext, useReducer } from "react";
import {fetchScorers, calculateTable} from './StatsActions'
import StatsReducer from "./StatsReducer";

const StatsContext = createContext()

export const StatsProvider = ({children}) =>{

    const initialState = {
        scorers: [],
        table: []
    }

    const [state, dispatch] = useReducer(StatsReducer, initialState)

    const loadScorers = async () => {
        const scorers = await fetchScorers()

        dispatch({
            type:'GET_TOP20_SCORERS',
            payload: scorers
        })
    }

    const loadTable = (allGamesByClub) => {
        dispatch({
            type:'SET_TABLE',
            payload: calculateTable(allGamesByClub)
        })
    }
    
    return (
        <StatsContext.Provider value={{
            scorers: state.scorers,
            table: state.table,
            loadScorers,
            loadTable
        }}>
            {children}
        </StatsContext.Provider>
    )
}

export default StatsContext