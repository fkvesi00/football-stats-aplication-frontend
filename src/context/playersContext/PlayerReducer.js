const PlayerReducer = (state, action) => {
    switch (action.type){
        case 'GET_ALL_PLAYERS': 
            return {
                ...state,
                players: action.payload
            }
        case 'GET_PLAYER':
            return {
                ...state,
                player: action.payload
            }
        case 'GET_PLAYER_APP':
            return {
                ...state,
                app: action.payload
            }
        case 'GET_PLAYER_GOALS':
            return {
                ...state,
                goals: action.payload
            }
        default: return state
    }
}

export default PlayerReducer