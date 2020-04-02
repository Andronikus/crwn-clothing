import userActionTypes from "./user.actions.types";

const USER_INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case userActionTypes.EMAIL_SIGN_IN_FAILURE:
    case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
