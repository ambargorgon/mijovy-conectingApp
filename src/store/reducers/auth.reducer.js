import { SIGNUP } from "../actions/auth.action";
import { SIGNOUT } from "../actions/auth.action";

const initialState = {
  token: null,
  userId: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, token: action.token, userId: action.userId};
    case SIGNOUT:
      return {initialState}
    default:
      return state;
  }
};

export default AuthReducer
