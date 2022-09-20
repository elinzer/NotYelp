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
    <form onSubmit={onLogin} className='loginBox'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="loginTitle">Login</div>
      <div>
        <label htmlFor="email"/>
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
        <label htmlFor="password"/>
        <input
          // name="password"
          type="password"
          placeholder="Password"
          className="passwordInput"
          value={password}
          onChange={updatePassword}
        />
        <button
        type="submit"
        className="submitLogin"
        >Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
