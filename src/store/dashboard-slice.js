import { createSlice } from "@reduxjs/toolkit";
import { apiRoutes } from "../config/configRoute";
import { getData } from "../services/services";

const token = localStorage.getItem("token");

const dashboardSlice = createSlice({
  name: "Dashboard",
  initialState: {
    userDashboard: "",
  },
  reducers: {
    userDashboardInfo(state, action) {
      state.userDashboard = action.payload;
    },
  },
});

export const getDashboardInfo = (data) => {
  return (dispatch) => {
    getData(
      apiRoutes.dashboard + `${data}`,
      token,
      (onSuccess) => {
        dispatch(
          dashboardActions.userDashboardInfo(
            onSuccess.data.payload.data.userData
          )
        );
      },
      (onFail) => {
        console.log(onFail, "onFail");
      }
    );
  };
};

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;
