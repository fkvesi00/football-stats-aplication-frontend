import React, { createContext, useState, useEffect } from 'react';
import { fetchGameById, fetchPlayersInMatch, fetchGoalsInMatch, matchFormat } from './MatchesActions';

const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
    const [match, setMatch] = useState(null);
    const [formattedMatch, setFormattedMatch] = useState({});
    const [players, setPlayers] = useState([]);
    const [homePlayers, setHomePlayers] = useState([]);
    const [awayPlayers, setAwayplayers] = useState([]);
    const [goals, setGoals] = useState([]);

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
    }, [formattedMatch, players]); // Only re-run the effect if formattedMatch or players change
    
    return (
        <MatchContext.Provider value={{ match: formattedMatch, homePlayers, awayPlayers, goals, loadData }}>
            {children}
        </MatchContext.Provider>
    );
};

export default MatchContext;