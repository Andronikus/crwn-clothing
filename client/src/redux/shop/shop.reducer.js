import shopActionTypes from './shop.action.types';

const INITIAL_STATE = {
    collections: undefined,
    isFetching: false,
    errorMessage: ''
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.FETCHING_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case shopActionTypes.FETCHING_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case shopActionTypes.FETCHING_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default shopReducer;