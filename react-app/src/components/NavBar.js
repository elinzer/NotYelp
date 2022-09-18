import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { getBusinesses } from "../store/business";
import LoginFormModal from "./auth/LoginFormModal";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <LoginFormModal />
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <button onClick={() => dispatch(getBusinesses())}>
            {/* Temporary Button to test Redux Store */}
            Get Businesses
          </button>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
