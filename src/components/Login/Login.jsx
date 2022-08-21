import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { sentLoginData } from "../../store/auth-slice";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(sentLoginData(data));
  };

  if (isLoggedIn) {
    navigate("/dashboard");
  }

  const signupHandler = () => {
    navigate("/signup");
  };

  const loginWithTwitter = () => {
    window.open("http://localhost:4000/auth/twitter", "_self");
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <Input
          type="email"
          placeholder="E-mail"
          label="E-mail"
          name="Email"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          value={password}
          setValue={setPassword}
        />
        <div className="btns-wrapper">
          <div className="btns-section">
            <Button type="submit" buttonName="Login" />
            <Button
              type="button"
              buttonName="Signup"
              clickHandler={signupHandler}
            />
          </div>
          <div>
            <p className="or">OR</p>
            <div className="btns-section">
              <Button
                type="button"
                buttonName="Login with twitter"
                clickHandler={loginWithTwitter}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
