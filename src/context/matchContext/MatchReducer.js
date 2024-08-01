const MatchReducer = (state, action) =>{
    switch (action.type) {
        case 'GET_ALL_MATCHES':
            return{
                ...state,
                allMatches: action.payload
            }
        case 'GET_MATCH_BY_ID':
            return {
                ...state,
                match: action.payload
            }
        case 'GET_PLAYERS_IN_MATCH':
            return {
                ...state,
                players: action.payload
            }
        case 'GET_GOALS_IN_MATCH':
            return  {
                ...state,
                goals: action.payload
            }
        case 'SET_FORMATTED_MATCH':
            return {
                ...state,
                formattedMatch: action.payload,
            };
            
        case 'SET_HOME_PLAYERS':
            return {
                ...state,
                homePlayers: action.payload,
            };
            
        case 'SET_AWAY_PLAYERS':
            return {
                ...state,
                awayPlayers: action.payload,
            };
        default: return state
    }
}

export default MatchReducer