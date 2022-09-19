import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { getBusinesses, searchBusinesses } from "../store/business";
import LoginFormModal from "./auth/LoginFormModal";
import SignUpFormModal from "./auth/SignupFormModal";
import CreateBusinessModal from "./Business/CreateBusiness";
import ProfileButton from "./ProfileButton";
import { useState } from "react";
import "./NavBar.css";
const NavBar = ({ loaded }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [search, setSearch] = useState("");
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="session-links flex center">
        <LoginFormModal />
        <SignUpFormModal />
      </div>
    );
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`/businesses/search?q=${search}`);
    dispatch(searchBusinesses(search));
  };

  return (
    <nav className="main-nav-container">
      <div className="nav-bar flex center space-between">
        <div className="home-button-container p20">
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
        <div className="search-bar flex">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className="search-button" onClick={handleSearch}>
            <svg width="24" height="24" class="icon_svg">
              <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
            </svg>
          </button>
        </div>
        {loaded && sessionLinks}
      </div>
    </nav>
  );
};

export default NavBar;
