import { createContext, useReducer } from "react";
import {calculateTable} from './StatsActions'
import StatsReducer from "./StatsReducer";

const StatsContext = createContext()

export const StatsProvider = ({children}) =>{

    const initialState = {
        scorers: [],
        table: []
    }

    const [state, dispatch] = useReducer(StatsReducer, initialState)
    
    return (
        <StatsContext.Provider value={{
            scorers: state.scorers,
            table: state.table,
            dispatch
        }}>
            {children}
        </StatsContext.Provider>
    )
}

export default StatsContext