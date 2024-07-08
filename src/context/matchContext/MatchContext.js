import React, { createContext, useState, useEffect, useReducer } from 'react';
import { fetchAllMatches ,fetchGameById, fetchPlayersInMatch, fetchGoalsInMatch, matchFormat } from './MatchesActions';
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

    const loadAllMatches = async() => {
        const allMatches = await fetchAllMatches()

        dispatch({
            type: 'GET_ALL_MATCHES',
            payload: matchFormat(allMatches)
        })
    }

    const loadData = async (id) => {
        try {
            const matchData = await fetchGameById(id);
            const playerData = await fetchPlayersInMatch(id);
            const goalData = await fetchGoalsInMatch(id);
    
            dispatch({
                type: 'GET_MATCH_BY_ID',
                payload: matchData
            })
            dispatch({
                type: 'GET_PLAYERS_IN_MATCH',
                payload: playerData
            })
            dispatch({
                type: 'GET_GOALS_IN_MATCH',
                payload: goalData
            })
        } catch (error) {
            console.error('Error fetching match data:', error);
        }
    };
    

    useEffect(() => {
        if (state.match && state.match.length > 0) { 
            const formatted = matchFormat(state.match);
            state.formattedMatch = formatted[0];
        }
    }, [state.match]); 
    
    useEffect(() => {
        if (state.players.length > 0 && state.formattedMatch) {
            state.homePlayers= state.players.filter(player => player.teamid === state.formattedMatch.h_id);
            state.awayPlayers = state.players.filter(player => player.teamid === state.formattedMatch.a_id);
        }
    }, [state.formattedMatch, state.players]);
    
    return (
        <MatchContext.Provider value={{allMatches: state.allMatches, match: state.formattedMatch, homePlayers: state.homePlayers, awayPlayers: state.awayPlayers, goals: state.goals, loadAllMatches,loadData }}>
            {children}
        </MatchContext.Provider>
    );
};

export default MatchContext;