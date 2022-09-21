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
    if (errors.length) return null;
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

  useEffect(() => {
    const errors = [];
    if (!profileImage.match(imageURLRegex)) {
      errors.push("Preview url must end in valid img extension [png/jpg/jpeg]");
    }
    if (password !== repeatPassword) {
      errors.push("password: Passwords do not match");
    }
    setErrors(errors);
  }, [profileImage, password, repeatPassword]);

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
    <div className="login">
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
          <div>
            <input
              type="text"
              className="userInputs"
              onChange={updateUsername}
              value={username}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="text"
              className="emailInputs"
              onChange={updateEmail}
              value={email}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              className="passwordInputs"
              onChange={updatePassword}
              value={password}
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="password"
              className="passwordInputs"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              placeholder="Repeat Password"
              required={true}
            />
          </div>
          <div>
            <input
              type="url"
              className="profileImg"
              onChange={updateProfileImage}
              value={profileImage}
              placeholder="Profile Image URL"
            />
          </div>
          <button type="submit" className="signUpButton">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
