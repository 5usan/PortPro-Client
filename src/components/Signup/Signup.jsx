import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { sentSignUpData } from "../../store/auth-slice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    password !== confirmPassword
      ? setError("Password doesnot match")
      : setError("");
    dispatch(sentSignUpData({ email, password, confirmPassword }));
    navigate("/login");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        type="email"
        placeholder="E-mail(Must be twitter email)"
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
      <Input
        type="password"
        placeholder="Confirm Password"
        label="Confirm Password"
        name="confirmPassword"
        value={confirmPassword}
        setValue={setConfirmPassword}
        error={error}
      />
      <div className="btns-wrapper">
        <div className="btns-section">
          <Button type="submit" buttonName="Signup" />
        </div>
      </div>
    </form>
  );
};

export default Signup;
