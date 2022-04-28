import { signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import {auth} from "../firebase";
import {SET_USER} from "./actiontype";

export const setUser = (result) => ({
  type: SET_USER,
  user:result,
});
// import { Redirect } from "react-router";
const provider = new GoogleAuthProvider();

export const signInWithGoogle = (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };