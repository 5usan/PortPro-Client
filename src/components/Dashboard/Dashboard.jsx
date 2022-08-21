import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { authActions } from "../../store/auth-slice";
import Button from "../Button/Button";

const Dashboard = () => {
  const userState = useSelector((state) => state.auth.userData);
  const user = userState ? userState : JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <div>
        Welcome <b>{user.email}</b>, this is your dashboard
      </div>
      <Button buttonName="Logout" type="button" clickHandler={logoutHandler} />
    </div>
  );
};

export default Dashboard;
