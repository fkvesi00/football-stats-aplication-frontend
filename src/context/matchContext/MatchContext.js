import React, { createContext, useState, useEffect, useReducer } from 'react';
import { fetchAllMatches ,fetchGameById, fetchPlayersInMatch, fetchGoalsInMatch, matchFormat } from './MatchesActions';
import MatchReducer from './MatchReducer';

const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
    const [allMatches, setAllMatches] = useState([])
    const [match, setMatch] = useState(null);
    const [formattedMatch, setFormattedMatch] = useState({});
    const [players, setPlayers] = useState([]);
    const [homePlayers, setHomePlayers] = useState([]);
    const [awayPlayers, setAwayplayers] = useState([]);
    const [goals, setGoals] = useState([]);

    const initialState = {
        allMatches: [],
        match: null,
        formattedMatch: {},
        players: [],
        homePlayers: [],
        awayPlayers: [],
        goals: []
    }

    const loadAllMatches = async() => {
        const allMatches = await fetchAllMatches()

        setAllMatches(matchFormat(allMatches))
    }

    const loadData = async (id) => {
        try {
            const matchData = await fetchGameById(id);
            const playerData = await fetchPlayersInMatch(id);
            const goalData = await fetchGoalsInMatch(id);
    
            setMatch(matchData);
            setPlayers(playerData);
            setGoals(goalData);
        } catch (error) {
            console.error('Error fetching match data:', error);
        }
    };
    

    useEffect(() => {
        if (match && match.length > 0) { 
            const formatted = matchFormat(match);
            setFormattedMatch(formatted[0]);
        }
    }, [match]); 
    
    useEffect(() => {
        if (players.length > 0 && formattedMatch) {
            const homeTeam = players.filter(player => player.teamid === formattedMatch.h_id);
            const awayTeam = players.filter(player => player.teamid === formattedMatch.a_id);
            setHomePlayers(homeTeam);
            setAwayplayers(awayTeam);
        }
    }, [formattedMatch, players]);
    
    return (
        <MatchContext.Provider value={{allMatches, match: formattedMatch, homePlayers, awayPlayers, goals, loadAllMatches,loadData }}>
            {children}
        </MatchContext.Provider>
    );
};

export default MatchContext;