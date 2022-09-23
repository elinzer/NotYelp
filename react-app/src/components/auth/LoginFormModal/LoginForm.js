import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";

const LoginForm = ({ closeModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
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
    <form onSubmit={onLogin}>
      <div className="loginBox">
        <div className="loginTitle">Login</div>
        <div className="signupErrors">
          {isSubmitted &&
            errors.map((error, ind) => (
              <div key={ind} className="errors">
                {error.split(": ")[1]}
              </div>
            ))}
        </div>
        <div className="input-container">
          <div className="inputItem">
            <input
              // name="email"
              type="text"
              placeholder=" "
              className="emailInput"
              value={email}
              onChange={updateEmail}
              required
            />
            <label htmlFor="Email">Email</label>
          </div>
          <div className="inputItem">
            <input
              // name="password"
              type="password"
              placeholder=" "
              className="passwordInput"
              value={password}
              required
              onChange={updatePassword}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="submitLogin">
            Login
          </button>
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
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
