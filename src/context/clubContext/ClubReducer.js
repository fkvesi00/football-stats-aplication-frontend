const ClubReducer = (state, action) => {
    switch(action.type){
        case 'GET_CLUBS':
            return {
                ...state,
                clubs: action.payload
            }
         default: 
            return state
    }   
}

export default ClubReducer