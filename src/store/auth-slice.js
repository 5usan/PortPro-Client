import { createSlice } from "@reduxjs/toolkit";
import { postDataWithoutToken } from "../services/services";
import { apiRoutes } from "../config/configRoute";

const token = localStorage.getItem("token");
const isLoggedIn = localStorage.getItem("isLoggedIn");
const user = JSON.parse(localStorage.getItem("user"));
const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    token: token ? token : "",
    isLoggedIn: isLoggedIn ? isLoggedIn : "",
    userData: user ? user : "",
    isSignUped: false,
  },
  reducers: {
    login(state, action) {
      const token = action.payload.token;
      const user = action.payload.user;
      console.log(user, "user");
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", true);
      state.token = token;
      state.isLoggedIn = true;
      state.userData = user;
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      state.token = "";
      state.isLoggedIn = false;
      state.userData = "";
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
        const token = onSuccess.data.payload.data.token;
        const user = onSuccess.data.payload.data;
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
