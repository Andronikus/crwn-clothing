const USER_INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state=USER_INITIAL_STATE, action) => {

    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;