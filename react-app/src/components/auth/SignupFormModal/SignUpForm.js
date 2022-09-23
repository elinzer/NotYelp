import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";
const SignUpForm = ({ closeModal }) => {
  const imageURLRegex = /\.(jpeg|jpg|png)$/;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (password === repeatPassword) {
      setErrors([]);
      const data = await dispatch(
        sessionActions.signUp(username, email, password, profileImage)
      );
      if (data && data.errors) {
        setErrors(data.errors);
      } else if (data && !data.errors) {
        closeModal();
      }
    } else {
      return setErrors(["password: Passwords do not match"]);
    }
  };

  // useEffect(() => {
  //   const errors = [];
  //   if (!profileImage.match(imageURLRegex)) {
  //     errors.push(
  //       "preview_img: Image must end in .png/.jpg/.jpeg"
  //     );
  //   }
  //   if (password !== repeatPassword) {
  //     errors.push("password: Passwords do not match");
  //   }
  //   console.log("Errors:", errors);
  //   setErrors(errors);
  // }, [profileImage, password, repeatPassword]);

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
    <form onSubmit={onSignUp}>
      <div className="login">
        <div className="signupTitle">Sign Up</div>
        <div className="signupErrors">
          {isSubmitted &&
            errors.map((error, ind) => (
              <div key={ind} className="signupError">
                {error.split(": ")[1]}
              </div>
            ))}
        </div>
        <div className="input-container">
          <div className="inputItem">
            <input
              type="text"
              className="userInputs"
              onChange={updateUsername}
              value={username}
              placeholder=" "
              required
            />
            <label>Username</label>
          </div>
          <div className="inputItem">
            <input
              type="email"
              className="emailInputs"
              onChange={updateEmail}
              value={email}
              placeholder=" "
              required
            />
            <label>Email</label>
          </div>
          <div className="inputItem">
            <input
              type="password"
              className="passwordInputs"
              onChange={updatePassword}
              value={password}
              placeholder=" "
              required
            />
            <label>Password</label>
          </div>
          <div className="inputItem">
            <input
              type="password"
              className="passwordInputs"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              placeholder=" "
              required={true}
            />
            <label>Confirm Password</label>
          </div>
          <div className="inputItem">
            <input
              type="url"
              className="profileImg"
              onChange={updateProfileImage}
              value={profileImage}
              placeholder=" "
              required
            />
            <label>Profile Image URL</label>
          </div>
          <button type="submit" className="signUpButton">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
