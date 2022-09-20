import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";

const SignUpForm = ({ closeModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profileImage, setProfileImage] = useState("")
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      } else {
        closeModal();
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateProfileImage = (e) => {
    setProfileImage(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
  <div className='login'>
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="signupTitle">Sign Up</div>
      <div>
        <input
          type="text"
          className='userInputs'
          onChange={updateUsername}
          value={username}
          placeholder='Username'
        ></input>
      </div>
      <div>
        <input
          type="text"
          className='emailInputs'
          onChange={updateEmail}
          value={email}
          placeholder='Email'
        ></input>
      </div>
      <div>
        <input
          type="password"
          className='passwordInputs'
          onChange={updatePassword}
          value={password}
          placeholder='Password'
        ></input>
      </div>
      <div>
        <input
          type="password"
          className='passwordInputs'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder='Repeat Password'
          required={true}
        ></input>
      </div>
      <div>
        <input
          type="url"
          className='profileImg'
          onChange={updateProfileImage}
          value={profileImage}
          placeholder='Profile Image URL'
        ></input>
      </div>
      <button
      type="submit"
      className='signUpButton'
      >Sign Up</button>
    </form>
    </div>
  );
};

export default SignUpForm;
