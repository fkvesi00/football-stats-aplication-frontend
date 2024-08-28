import React, { createContext, useEffect, useReducer } from 'react';
import { matchFormat } from './MatchesActions';
import MatchReducer from './MatchReducer';


const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
     const initialState = {
        allMatches: [],
        match: null,
        formattedMatch: {},
        players: [],
        homePlayers: [],
        awayPlayers: [],
        goals: []
    }

    const [state, dispatch] = useReducer(MatchReducer, initialState)

    useEffect(() => {
        if (state.match && state.match.length > 0) {
            const formatted = matchFormat(state.match);
            dispatch({
                type: 'SET_FORMATTED_MATCH',
                payload: formatted[0]
            });
        }
    }, [state.match]);
    
    useEffect(() => {
        if (state.players.length > 0 && state.formattedMatch) {
            const homePlayers = state.players.filter(player => player.teamid === state.formattedMatch.h_id);
            const awayPlayers = state.players.filter(player => player.teamid === state.formattedMatch.a_id);
            
            dispatch({
                type: 'SET_HOME_PLAYERS',
                payload: homePlayers
            });
            dispatch({
                type: 'SET_AWAY_PLAYERS',
                payload: awayPlayers
            });
        }
    }, [state.formattedMatch, state.players]);
    
    return (
        <MatchContext.Provider value={{allMatches: state.allMatches, match: state.formattedMatch, homePlayers: state.homePlayers, awayPlayers: state.awayPlayers, goals: state.goals, dispatch }}>
            {children}
        </MatchContext.Provider>
    );
};

export default MatchContext;