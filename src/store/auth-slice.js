import { createSlice } from "@reduxjs/toolkit";
import { postDataWithoutToken } from "../services/services";
import { apiRoutes } from "../config/configRoute";

const token = localStorage.getItem("token");
const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    token: localStorage.getItem("token"),
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    userData: "",
    isSignUped: false,
  },
  reducers: {
    login(state, action) {
      const token = action.payload.token;
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", true);
      state.token = token;
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      state.token = "";
      state.isLoggedIn = false;
    },
    signup(state, action) {
      state.isSignUped = true;
    },
  },
});

export const sentLoginData = (data) => {
  return (dispatch) => {
    postDataWithoutToken(
      apiRoutes.login,
      JSON.stringify(data),
      (onSuccess) => {
        const jwt = onSuccess.data.payload.data.token;
        const user = onSuccess.data.payload.data;
        const token = "Bearer " + jwt;
        dispatch(authActions.login({ token, user }));
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };
};

export const sentSignUpData = (data) => {
  return (dispatch) => {
    console.log("A");
    postDataWithoutToken(
      apiRoutes.signup,
      JSON.stringify(data),
      (onSuccess) => {
        console.log(onSuccess, "onSuccess");
        dispatch(authActions.signup());
        return true;
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };
};
export const authActions = authSlice.actions;
export default authSlice;
