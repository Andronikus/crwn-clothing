import userActionTypes from "./user.actions.types";

const USER_INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
