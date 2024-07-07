const ClubReducer = (state, action) => {
    switch (action.type){
        case 'GET_CLUBS':
            return {
                ...state,
                clubs: action.payload
            }
        case 'GET_PLAYERS_OF_CLUB':
            return {
                ...state,
                playersOfClub: action.payload
            }
        case 'GET_MATCHES_OF_CLUB':
            return {
                ...state,
                matchesOfClub: action.payload
            }
        case 'GET_CLUB_PLAYERS_APPERANCES_AND_GOALS':
            return {
                ...state,
                playerStats: action.payload
            }
         default: 
            return state
    }   
}

export default ClubReducer