import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("http://localhost:5002/api/auth/login", user);
    localStorage.setItem('user', JSON.stringify(res.data));
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("http://localhost:5002/api/auth/register", user);
    localStorage.setItem('user', JSON.stringify(res.data));
    console.log(JSON.stringify(res.data));
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};