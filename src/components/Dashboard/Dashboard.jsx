import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { authActions } from "../../store/auth-slice";
import { getDashboardInfo } from "../../store/dashboard-slice";
import Button from "../Button/Button";

const Dashboard = () => {
  const userState = useSelector((state) => state.auth.userData);
  const user = userState ? userState : JSON.parse(localStorage.getItem("user"));
  const userInfo = useSelector((state) => state.dashboard.userDashboard);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardInfo(user.email));
  }, [dispatch, user]);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <div>
        Welcome <b>{userInfo.email}</b>, this is your dashboard
      </div>
      <div>
        Your password: <b>{userInfo.password}</b>
      </div>
      <div>
        Created At: <b>{userInfo.createdAt}</b>
      </div>
      <div>
        Updated At: <b>{userInfo.updatedAt}</b>
      </div>
      <Button buttonName="Logout" type="button" clickHandler={logoutHandler} />
    </div>
  );
};

export default Dashboard;
