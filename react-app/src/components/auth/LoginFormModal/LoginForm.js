import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";

const LoginForm = ({ closeModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal();
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={onLogin} className="loginBox">
      <div className="loginTitle">Login</div>
      <div className="loginErrors">
        {errors.map((error, ind) => (
          <div key={ind} className="errors">
            {error.split(": ")[1]}
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="Email" />
        <input
          // name="email"
          type="text"
          placeholder="Email"
          className="emailInput"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password" />
        <input
          // name="password"
          type="password"
          placeholder="Password"
          className="passwordInput"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit" className="submitLogin">
          Login
        </button>
      </div>
      <button
        onClick={() => {
          setEmail("demo@aa.io");
          setPassword("password");
        }}
        type="submit"
        className="submitDemo"
      >
        Demo Login
      </button>
    </form>
  );
};

export default LoginForm;
