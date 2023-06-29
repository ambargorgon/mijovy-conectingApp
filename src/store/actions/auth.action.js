import { URL_AUTH_SIGNUP } from "../../constants/database";

export const SIGNUP = "SIGNUP";
export const SIGNOUT = "SIGNOUT"

export const signUp = (email, password, name) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          returnSecureToken: true,
        }),
      });
      const data = await response.json()
      console.log(data)
      dispatch({
        type: SIGNUP,
        token: data.idToken,
        userId: data.localId,
      })
    } catch (error) {
      console.log(error)
    }
  };
};

export const signOut = () => async (dispatch) => {
  try {
    dispatch({ type: SIGNOUT });

  } catch (error) {
    console.log(error)
  }
}