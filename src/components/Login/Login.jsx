import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { apiRoutes } from "../../config/configRoute";
import "./Login.css";
import { postData } from "../../services/services";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await postData(
      apiRoutes.login,
      data,
      (response) => {
        console.log(response, "success");
      },
      (error) => {
        console.log(error.response.data, "failure");
      }
    );
  };

  const signupHandler = () => {
    navigate("/signup");
  };

  const loginWithTwitter = () => {};
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
