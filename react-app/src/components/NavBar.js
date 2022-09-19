import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { getBusinesses } from "../store/business";
import LoginFormModal from "./auth/LoginFormModal";
import SignUpFormModal from "./auth/SignupFormModal";
import "./NavBar.css";
const NavBar = ({ loaded }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="session-links flex center">
        <button>Profile</button>
        <LogoutButton />
      </div>
    );
  } else {
    sessionLinks = (
      <div className="session-links flex center">
        <LoginFormModal />
        <SignUpFormModal />
      </div>
    );
  }

  return (
    <nav className="main-nav-container">
      <div className="nav-bar flex center space-between">
        <div className="home-button-container pl20">
          <NavLink
            className="home-button"
            to="/"
            exact={true}
            activeClassName="active"
          >
            {/* Our logo will go here instead (eventually) - hazel */}
            <img
              className="logo"
              src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/2d2a7a4342fc/assets/img/brand/logo_desktop_white.svg"
            ></img>
          </NavLink>
        </div>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
          ></input>
          <button className="search-button">Search</button>
        </div>
        {loaded && sessionLinks}
      </div>
    </nav>
  );
};

export default NavBar;
